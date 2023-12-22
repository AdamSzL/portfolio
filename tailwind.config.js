/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
                opensans: ['Open Sans'],
            },
            borderWidth: {
                '1': '1px',
            },
            animation: {
                'typewriter-instant': 'typing 3s steps(40, end), blink_caret .75s step-end infinite',
                'typewriter-delayed': 'typing 3s steps(40, end) 3s forwards, blink_caret .75s step-end 3s infinite',
            },
            keyframes: {
                typing: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
                blink_caret: {
                    '0%, 100%': { borderColor: 'transparent' },
                    '50%': { borderColor: 'black' }
                }
            }
        },
    },
    plugins: [],
}