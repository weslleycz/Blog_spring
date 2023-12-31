import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(
      { API_Url: "http://localhost:8080/" },
      { defineOn: "import.meta.env" }
    ),
  ],
});
