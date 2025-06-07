import animations from '@midudev/tailwind-animations'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animations
  ],
}
