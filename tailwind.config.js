/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': {'max': '399px'}, 
      },
     
      fontFamily: {
        'bree-serif': ['"Bree Serif"', 'serif'],
        'philosopher': ['"Philosopher"', 'sans-serif'],
      },
      keyframes: {
        customSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        linearMotion: {
          '0%': { transform: 'translateX(-20%)', animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' },
          '100%': { transform: 'translateX(105%)', animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        },
        arrowanimation: {
          '0%': { transform: "translate(2px)" },
          '50%': { transform: "translate(6px)" },
          '100%': { transform: "translate(2px)" }
        },
        // nameChangeAnimation: {
        //   '0%': { transform: "translateY(-24px)", opacity: "50%" },
        //   '50%': { transform: "translateY(0px)", opacity: "100%" },
        //   '100%': { transform: "translateY(24px)", opacity: "50%" },

        // },
      
      },

      animation: {
        spin: 'customSpin 3s linear infinite',
        linearMotion: 'linearMotion 20s infinite',
        arrowanimation: 'arrowanimation 1s infinite',
        nameChangeAnimation: 'nameChangeAnimation 3s infinite',
      },

    },
  },
  plugins: [],
}

