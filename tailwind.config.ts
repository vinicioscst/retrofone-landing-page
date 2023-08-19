import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerimg': "url('/banner-img.jpg')",
        'formimg': "url('/form-img.jpg')"
      },
      colors: {
        'vintage-wine': '#992800',
        'vintage-orange': '#D34A24',
        'vintage-yellow': '#FFAF00',
        'vintage-green': '#3C7F72',
      }
    },
  },
  plugins: [],
}
export default config
