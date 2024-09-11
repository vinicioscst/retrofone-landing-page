import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerimg: "url('/banner-img.jpg')",
        formimg: "url('/form-img.jpg')"
      },
      colors: {
        'vintage-wine': 'hsl(16, 100%, 30%)',
        'vintage-orange': 'hsl(13, 71%, 48%)',
        'vintage-yellow': 'hsl(41, 100%, 50%)',
        'vintage-green': 'hsl(168, 36%, 37%)'
      },
      screens: {
        xm: '459px'
      }
    }
  },
  plugins: []
}
export default config
