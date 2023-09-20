/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "primary": '#080F20',
                "secondary": '#0934B2'
            },
            backgroundImage: {
                "header-bg": "url('/src/assets/images/bg01.webp')",
                "view-bg": "url('/src/assets/images/viewmore.webp')",
                "content-bg": "url('/src/assets/images/bg02.webp')",
                "footer-bg": "url('/src/assets/images/footer.webp')",
                "btns-bg": "url('/src/assets/images/btns.webp')",
                "heroes-bg": "url('/src/assets/images/heroes.webp')",
                "borderoff-bg": "url('/src/assets/images/borderoff.webp')",
                "newbg-bg": "url('/src/assets/images/newsbg2.webp')",
                "wih1-bg": "url('/src/assets/images/wih1.webp')",
                "wih2-bg": "url('/src/assets/images/wih2.webp')",
                "wih3-bg": "url('/src/assets/images/wih3.webp')",
                "gameinfo-bg": "url('/src/assets/images/gameinfobg.webp')",
                "battleground-bg": "url('/src/assets/images/battleground-bg.webp')",
                "item-bg": "url('/src/assets/images/itembg.webp')",
                "helpcenter": "url('/src/assets/images/helpcenter.webp')",
                "updateNote": "url('/src/assets/images/note0607.webp')",
                "banlist": "url('/src/assets/images/banlist.webp')",
                "map5v5": "url('/src/assets/images/map5v5.png')",
            },
            dropShadow: {
                glow: [
                    "0 0px 2px rgba(0, 0, 0, 1)",
                    "0 0px 5px rgba(239, 218, 126, 0.65)",
                    "0 0px 10px rgba(239, 218, 126, 0.5)",
                ],
                bxshdw: "0px 0px 10px #000",
            },
            animation: {
                "spin-slow": "spin 10s linear infinite",
                "pulse-slow": "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            fontFamily: {
                'basime': ['Bacasime Antique', 'serif'],
                'ptserif': ['PT Serif', 'serif'],
                'garamond': ['EB Garamond', 'serif'],

            }

        },
    },
    plugins: [],
};
