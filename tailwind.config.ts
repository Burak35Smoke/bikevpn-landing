// tailwind.config.ts (veya tailwind.config.js)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { // Önceki renk tanımlamaların burada olabilir
        brand: {
          orange: '#FF6600', // Örnek turuncu
        },
      },
      animation: { // YENİ EKLENEN BÖLÜM
        'spin-slow': 'spin 20s linear infinite', // 20 saniyede bir tam tur
        'custom-spin': 'spin 30s linear infinite', // 'spin-slow' yerine farklı bir isimle dene
        'bike-spin': 'spin 20s linear infinite', // 'spin-slow' yerine 'bike-spin'

      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};