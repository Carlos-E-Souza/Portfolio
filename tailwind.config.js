module.exports = {
    content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
    theme: {
        extend: {
            colors: {
                surface: {
                    pri: "#2C5364",
                    sec: "#162d37",
                    third: "#0F2027",
                },
                txt: {
                    pri: "#F4F4F5",
                    sec: "#E7E7EC",
                    third: "#DADAE4",
                    four: "#a8b2d1",
                    five: "#8892b0",
                },
            },
            keyframes: {
                up: {
                    "100%": { transform: "transalateY(10px)" },
                },
                slideIn: {
                    "0%": { transform: "translateX(-100%)" },
                    "20%": { transform: "translateX(-80%)" },
                    "40%": { transform: "translateX(-60%)" },
                    "60%": { transform: "translateX(-40%)" },
                    "80%": { transform: "translateX(-20%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
            animation: {
                up: "up 1s linear 1",
                slide: "slideIn 2s linear 1",
            },
            gridTemplateColumns: {
                tecs: "repeat(2, minmax(140px, 200px))",
            },
        },
    },
    plugins: [],
}
