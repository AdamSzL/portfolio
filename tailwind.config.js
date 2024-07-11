/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
                opensans: ['Open Sans'],
            },
            colors: {
                'dark-blue': '#1E3050',
            },
            borderWidth: {
                '1': '1px',
            },
            animation: {
                'typewriter-instant': 'typing 3s steps(40, end), blink_caret .75s step-end infinite',
                'typewriter-delayed': 'typing 3s steps(40, end) 3s forwards, blink_caret .75s step-end 3s infinite',
                'fade-in': 'fade_in 1s',
                'slide-in': 'slide_in 0.1s linear',
            },
            keyframes: {
                typing: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
                blink_caret: {
                    '0%, 100%': { borderColor: 'transparent' },
                    '50%': { borderColor: 'black' }
                },
                fade_in: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slide_in: {
                    '0%': { transform: 'translate(-300px)' },
                    '100%': { transform: 'translate(0)' }
                }
            },
            maxWidth: {
                '8xl': '96rem',
            }
        },
    },
    plugins: [],
}