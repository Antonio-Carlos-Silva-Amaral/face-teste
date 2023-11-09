import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'max': '500px'}, // Altere aqui para o tamanho desejado
      'md': {'max': '900px'},
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'custom': ['SFProDisplay-Regular', 'Helvetica', 'Arial', 'sans-serif'],
        'footer': ['Helvetica', 'Arial', 'sans-serif'],
        'senha': ['-apple-system', 'sans-serif']
      },
    },
  },
  plugins: [],
}
export default config
