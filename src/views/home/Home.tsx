import { useAppSelector } from "../../config/hooks/useRedux.ts";
import { useAppDispatch } from "../../config/hooks/useRedux.ts";
import {IAuthState,IAuthContext} from "@/utils/types/auth/index.ts";
import useFetch from "@/config/hooks/useFetch.ts"
import {useQuery} from "@tanstack/react-query";
const fetchTodo = async (): Promise<IAuthContext> => {
  const response = await useFetch<IAuthContext>("/todos/1");
  return response;
};
const Home = () => {
  const auth = useAppSelector((state: { auth: IAuthState }) => state.auth);
  const dispatch = useAppDispatch();

  function handleLogin() {
    dispatch({
      type: "auth/setUser",
      payload: { name: "username", id: "pass" },
    });
    dispatch({ type: "auth/setToken", payload: "pass" });
  }
  function handleLogout() {
    dispatch({ type: "auth/logout" });
  }
  const { data, isLoading, error } = useQuery<IAuthContext>({
    queryKey: ['todo-1'],
    queryFn: fetchTodo,
  });
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        {auth.isAuthenticated ? "Logged in" : "Not logged in"}
        <div className="mt-4">
          {auth.user ? (
            <div>
              <p>User: {auth.user.name}</p>
              <p>ID: {auth.user.id}</p>
            </div>
          ) : (
            <p>No user data available</p>
          )}
        </div>
        <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
                <div>
                    <p>Todo ID: {data?.id}</p>
                    <p>Todo Title: {data?.title}</p>
                    <p>Todo Completed: {data?.completed ? "Yes" : "No"}</p>
                </div>
            )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}>
          logout
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}>
          login
        </button>
      </div>
    </div>
  );
};

export default Home;
