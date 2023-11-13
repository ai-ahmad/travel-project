import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
  // server: {
  //   port: 8080, // Устанавливаем желаемый порт
  //   host: "192.168.81.206", // Устанавливаем локальный IP-адрес
  // },
  manifest: {
    name: "Dovdir app",
    short_name: "Dovdir",
    description: "Dovdir app",
    lang: "en",
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "standalone",
    icons: [{}],
  },
});
