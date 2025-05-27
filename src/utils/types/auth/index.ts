 interface IAuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
    } | null;
    token?: string | null;
    setUser?: (user: IAuthState["user"]) => void;
    setToken?: (token: string | null) => void;
    setIsAuthenticated?: (isAuthenticated: boolean) => void;
    logout?: () => void;
}

 interface IAuthContext {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type { IAuthState, IAuthContext }