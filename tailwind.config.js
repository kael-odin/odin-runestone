/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // content.js 里项目卡的 color 存的是色名（blue-500 等），运行时拼进
  // text-${color} / hover:bg-${color}，必须 safelist 才会生成对应类
  safelist: [
    { pattern: /^(text|bg|hover:bg)-(blue|gray|purple|pink|green|orange|red|violet)-(200|300|400|500|600)$/ },
  ],
  theme: {
    extend: {
      colors:{
        // Binil-clone dark theme tokens (mirror thegr8binil.me CSS variables)
        "background":"#0e100f",
        "primarytext":"#ffffe3",
        "sectext":"#d1d1d1",
        "placeholder":"#454533",
        "accentv":"#a374ff",
        "accentb":"#18a0fb",
        "accenty":"#ffd074",
        "accentl":"#ffffe3",
        "accentc":"#17f1d1",
        "accentp":"#ee46d3",
        "bline":"#323228",
        "bgcard":"#191917",
        "bgreen":"#0ae448",
        "bblue":"#00bad5",
        "bviolet":"#9d95ff",
        "bpink":"#fec5fb",
        "borange":"#ff8709",
        // legacy upstream aliases
        "diffblue":"#17f1d1"
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
    },
  },
  plugins: [],
}}