import { AppProps } from "next/app";
import { AuthProvider } from "./components/AuthContext";
import "./components/styles/global.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
