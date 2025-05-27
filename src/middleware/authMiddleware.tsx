// authMiddleware.tsx
import { Navigate } from "react-router-dom"; 
import { useAppSelector } from "@/config/hooks/useRedux";
import { ChildrenProps } from "@/utils/types";

function AuthMiddleware({ children }: ChildrenProps) {
  const auth = useAppSelector((state) => state.auth);

  if (!auth.token) {
    console.warn("Unauthorized access - redirecting to login");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default AuthMiddleware;
