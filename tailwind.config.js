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
                },
            },
            animation: {
                up: "scale(0.97) ease-in-out",
            },
        },
    },
    plugins: [],
}
