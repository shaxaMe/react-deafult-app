import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1>Login Page</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>Login</button>
    <p>Redirects to the dashboard on login.</p>
    <p>Note: This is a placeholder login page.</p>
    <p>In a real application, you would implement authentication logic here.</p>
  </div>;
}

export default Login;
