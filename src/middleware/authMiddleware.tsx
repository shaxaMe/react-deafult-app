
import { Navigate } from "react-router-dom"; 
import { useAppSelector } from "@/config/hooks/useRedux";
import { ChildrenProps } from "@/utils/types";

function AuthMiddleware({ children }: ChildrenProps) {
  const auth = useAppSelector((state) => state.auth);

  if (!auth.token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default AuthMiddleware;
