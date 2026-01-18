import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0c0f",
          900: "#111319",
          800: "#1b1e27",
          700: "#2b303d",
          500: "#70778c",
          300: "#c6c9d2",
          100: "#f3f4f7"
        },
        nebula: {
          600: "#4c6fff",
          500: "#5b7cff",
          400: "#7f94ff",
          300: "#a5b4ff"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1.25rem"
      },
      boxShadow: {
        card: "0 20px 40px rgba(15, 18, 30, 0.08)",
        cardHover: "0 24px 50px rgba(15, 18, 30, 0.16)"
      },
      maxWidth: {
        container: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
