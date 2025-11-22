// tailwind.config.js 优化（兼容 Vite 路径匹配）
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // 覆盖 src 下所有文件
    "./src/**/**/*.{vue,js,ts,jsx,tsx}", // 覆盖嵌套子目录（如 src/views/home/*.vue）
    "./src/components/**/*.{vue,js,ts,jsx,tsx}", // 单独指定组件目录（确保扫描）
  ],
  theme: { extend: {} },
  plugins: [],
};