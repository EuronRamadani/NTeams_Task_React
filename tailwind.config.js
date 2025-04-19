module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgroundsdark-blue": "var(--backgroundsdark-blue)",
        "backgroundsice-cold": "var(--backgroundsice-cold)",
        "backgroundsmidnight-blue": "var(--backgroundsmidnight-blue)",
        "brand-colorsbackgroundlight-purple":
          "var(--brand-colorsbackgroundlight-purple)",
        "brand-colorsbackgroundmain": "var(--brand-colorsbackgroundmain)",
        "brand-colorsbackgroundwhite": "var(--brand-colorsbackgroundwhite)",
        "brand-colorspink": "var(--brand-colorspink)",
        "brand-colorspurple": "var(--brand-colorspurple)",
        brandpurple: "var(--brandpurple)",
        "pastelpastel-blue": "var(--pastelpastel-blue)",
        typographyblack: "var(--typographyblack)",
        "typographydark-grey": "var(--typographydark-grey)",
        "typographylight-grey": "var(--typographylight-grey)",
        "typographytypography-anthracite":
          "var(--typographytypography-anthracite)",
        "typographytypography-grey": "var(--typographytypography-grey)",
        typographywhite: "var(--typographywhite)",
        "typographywhite-text": "var(--typographywhite-text)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "desktop-body-text-desktop":
          "var(--desktop-body-text-desktop-font-family)",
        "desktop-footer-paragraph-text":
          "var(--desktop-footer-paragraph-text-font-family)",
        "desktop-heading-2": "var(--desktop-heading-2-font-family)",
        "desktop-heading-3": "var(--desktop-heading-3-font-family)",
        "desktop-heading-4": "var(--desktop-heading-4-font-family)",
        "desktop-title-1": "var(--desktop-title-1-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "blue-drop-shadow-for-dark-backgrounds":
          "var(--blue-drop-shadow-for-dark-backgrounds)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#5152fb',
              textDecoration: 'none',
              '&:hover': {
                color: '#4142eb',
              },
            },
          },
        },
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: ["class"],
};