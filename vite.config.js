import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  server: {
    port: 8080,
  },
  define: { "process.env": {} },
};
