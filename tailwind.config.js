/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3b237",        // 你最愛的金黃主色，明亮且醒目
        secondary: "#2768a8",      // 深藍偏冷色，穩重又有科技感（也是你喜歡的）
        dark: "#181c24",           // 深藍灰，比純黑柔和、視覺友善
        "dark-accent": "#242935",  // 卡片背景用，深但有層次，適合 UI 分區
        light: "#fdfae6",          // 亮米白，溫暖乾淨，不刺眼
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      spacing: {
        '4': '1rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'tech': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}; 