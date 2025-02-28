import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9',
                project:'176/119'
            },
            screens: {
                xs: '430px',
            },
            fontFamily: {
                sans: ['Inter', 'Arial', 'sans-serif'],
            },
        },
    },
}
