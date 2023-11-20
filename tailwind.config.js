/**
 * Tailwind CSS configuration file.
 * 
 * This file sets up the Tailwind CSS framework for a web project, customizing various aspects
 * according to the specific needs of the application. Key configurations include:
 * 
 * - darkMode: Sets the dark mode strategy to 'class', allowing the use of a specific class
 *   (like 'dark') to enable dark mode styles.
 * 
 * - safelist: Specifies a list of classes that should always be included in the final build,
 *   even if they don't appear in any source files. This is useful for dynamic class names that
 *   might not be picked up by Tailwind's purge process. Patterns can also be provided to safelist
 *   a range of class names.
 * 
 * - content: Defines the file paths that Tailwind should scan for class names. 
 *   This includes JS, TS, JSX, TSX, and MDX files in various directories.
 * 
 * - theme: Extends the default Tailwind theme with custom settings and styles. 
 *   This includes configurations for containers, custom colors, border radii, keyframes, and animations.
 * 
 * - plugins: Adds additional plugins to Tailwind, in this case, 'tailwindcss-animate' for animations.
 * 
 * This configuration ensures that Tailwind generates the right utility classes and applies the
 * correct styling rules as per the customizations defined here, which are crucial for maintaining
 * the design consistency and performance of the web application.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // This should be a string, not an array
  safelist: [
    'custom-baby-blue',
    'custom-baby-pink',
    'custom-baby-yellow',
    'custom-baby-orange',
    {
      pattern: /bg-/, // Example: matches any class that starts with 'bg-'
    },
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-orange': '#e77133',
        'dark-green': '#146E47',
        'custom-baby-blue': '#B5D7D1',
        'custom-baby-pink': '#E1D0D9',
        'custom-baby-yellow': '#E8E6C3',
        'custom-baby-orange': '#f2ccb6',
        // The following color definitions should be inside the colors object
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
