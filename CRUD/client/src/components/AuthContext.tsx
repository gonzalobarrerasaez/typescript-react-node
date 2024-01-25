// components/AuthContext.tsx
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        router.push("/dashboard");
      } else {
        // Manejar el error, mostrar un mensaje, etc.
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Simula la verificación del estado de autenticación en el montaje del componente.
    setIsLoggedIn(true);
  }, []);

  const contextValue: AuthContextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
