/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
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
            },
            dropShadow: {
                glow: [
                    "0 0px 5px rgba(0, 135, 255, 0.9)",
                    "0 0px 10px rgba(135, 0, 255, 0.75)",
                ],
            },
        },
    },
    plugins: [],
};
