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
            },
        },
    },
    plugins: [],
};
