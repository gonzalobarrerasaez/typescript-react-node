import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import { useAuth } from "./AuthContext";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      // Realizar la llamada a la API para autenticar al usuario
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Verificar si la autenticación fue exitosa antes de obtener el token
      if (data.success) {
        // Llamar a la función proporcionada para manejar la obtención del token
        onLogin(data.token);
      } else {
        // Manejar caso de autenticación fallida
        console.error("Error de autenticación:", data.message);
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ textAlign: "center", marginTop: "10em" }}
    >
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Iniciar sesión
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
