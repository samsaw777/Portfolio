const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  gray: {
    faint: "#757575",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  blue: {
    100: "#e3f2fd",
    200: "#bbdefb",
    300: "#90caf9",
    400: "#64b5f6",
    500: "#42a5f5",
    600: "#2196f3",
    core: "#4285f4",
  },
  red: {
    100: "#FFEBEE",
    200: "#FFCDD2",
    300: "#EF9A9A",
    400: "#E57373",
    500: "#EF5350",
    600: "#F44336",
    core: "#EA4335",
  },
  yellow: {
    100: "#FFF8E1",
    200: "#FFECB3",
    300: "#FFE082",
    400: "#FFD54F",
    500: "#FFCA28",
    600: "#FFC107",
    core: "#FBBC04",
  },
  green: {
    100: "#E8F5E9",
    200: "#C8E6C9",
    300: "#A5D6A7",
    400: "#81C784",
    500: "#66BB6A",
    600: "#4CAF50",
    core: "#34A853",
  },

  // ── Dark Mode (default) ──
  navigationColor: "#0C0F14",
  greenTextColor: "#5B8DEF", // primary accent (was yellow #F9D342)
  secondColor: "#6B7A94", // muted text
  sliderColor: "#14181F", // surface/card bg
  redColor: "#5B8DEF", // accent (was yellow #F9D342)
  mainTextColor: "#E8ECF4", // primary text

  // ── Light Mode ──
  lightNavigationColor: "#FFFFFF",
  lightMainBackground: "#F4F6FA",
  lightCardBackground: "#FFFFFF",
  lightHeadingText: "#1A1F2E",
  lightSubtext: "#6B7A94",
  lightPrimaryAccent: "#3D6BC7",

  // ── Scheme 2: Cool & Minimal palette tokens ──
  primary: "#5B8DEF",
  primaryHover: "#7BA4F7",
  secondary: "#3D6BC7",
  surface: "#14181F",
  surfaceHover: "#1A1F28",
  border: "#1E2430",
  active: "#4A7ADE",

  lightPrimary: "#3D6BC7",
  lightPrimaryHover: "#4A7ADE",
  lightSecondary: "#2B52A0",
  lightSurface: "#FFFFFF",
  lightSurfaceHover: "#FFFFFf",
  lightBorder: "#DFE3EC",
  lightActive: "#2B52A0",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors,
    extend: {
      backgroundImage: {
        remote: 'url("../src/Images/remote.png")',
      },
      inset: {
        sLetter: "634px",
      },
      height: {
        viewHeight: "100vh",
        introductionHeight: "90vh",
        iconsHeight: "72.6vh",
        iHeight: "343px",
        xlHeight: "300px",
        lgHeight: "200px",
        cardheight: "200px",
        blogHeight: "50px",
        blogheight: "80px",
      },
      width: {
        sideWidth: "10%",
        mainWidth: "80%",
        iWidth: "543px",
        xlWidth: "500px",
        lgWidth: "350px",
      },
      fontSize: {
        landingSize: "80px",
        mobileSize: "40px",
        mediumSize: "63px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
