import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

import typographyPlugin from './src/styles/tailwind-plugins/typography-plugin'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6156E2',
                secondary: '#343839',
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to right, rgba(45,38,148,0.18), rgba(211,68,201,0.18))'
            }
        },
    },
    darkMode: 'class',
    plugins: [
        heroui({
            defaultExtendTheme: 'dark',
            defaultTheme: 'dark',
            layout: {}, // common layout options
            themes: {
                light: {
                    layout: {}, // light theme layout options
                    colors: {
                        background: '#bab9bb',
                        foreground: '#222e48',
                        primary: {
                            DEFAULT: '#6156E2',
                            foreground: '#222e48',
                        },
                    },
                },
                dark: {
                    layout: {}, // dark theme layout options
                    colors: {
                        background: '#070707',
                        foreground: '#bab9bb',
                        primary: {
                            DEFAULT: '#6156E2',
                            foreground: '#bab9bb',
                        },
                    },
                },
                // ... custom themes
            },
        }),
        typographyPlugin,
    ],
}
export default config
