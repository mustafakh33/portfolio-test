// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#06b6d4", // اللون الأساسي (Cyan 500)
//         "primary-dark": "#0891b2", // درجة أغمق للـ hover (Cyan 600)
//         "dark-bg": "#040b14", // خلفية الشريط الجانبي
//         "dark-section": "#1f2937", // خلفيات داكنة فرعية (Gray 800)
//         white: "#ffffff", // اللون الأبيض
//         "light-bg": "#f9fafb", // خلفية الأقسام الفاتحة (Gray 50)
//         "light-accent": "#e5e7eb", // لون خفيف للتمييز (Gray 200)
//         "text-primary": "#1f2937", // لون النصوص الأساسي (Gray 800)
//         "text-secondary": "#4b5563", // لون النصوص الفرعي (Gray 600)
//         "text-light": "#d1d5db", // لون النصوص على الخلفيات الداكنة (Gray 300)
//         "text-white": "#ffffff",
//         "text-muted": "#6b7280", // لون النصوص الباهتة (Gray 500)
//         "primary-light-bg": "#cffafe", // خلفية سماوية فاتحة (Cyan 100)
//         "primary-text-dark": "#155e75", // نص داكن على خلفية سماوية (Cyan 800)
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // تم تحديث الألوان هنا
        'primary': '#002D9C',             // اللون الأساسي الجديد (Royal Blue)
        'primary-dark': '#00247A',        // درجة أغمق للـ hover
        'dark-bg': '#040b14',
        'dark-section': '#1f2937',
        'white': '#ffffff',
        'light-bg': '#f9fafb',
        'light-accent': '#e5e7eb',
        'text-primary': '#1f2937',
        'text-secondary': '#4b5563',
        'text-light': '#d1d5db',
        'text-white': '#ffffff',
        'text-muted': '#6b7280',
        'primary-light-bg': '#EBF0FA',   // خلفية زرقاء فاتحة جداً
        'primary-text-dark': '#002D9C',  // نص أزرق داكن (نفس اللون الأساسي)
      },
    },
  },
  plugins: [],
};
export default config;