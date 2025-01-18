module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        extra: '0.15em', 
      },
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        slideFadeIn: 'slideFadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        cardFadeIn: 'cardFadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#2061AD',
        'primary-light': '#4A8BC2',
        'primary-dark': '#004B87',
        'primary-darker': '#003B6A',
        'primary-lighter': '#A4C8E1',
        'primary-darker-light': '#002D5B',
        'primary-darkest': '#001F3F',
        'primary-32': 'rgba(32, 97, 173, 0.32)',

        secondary:'#E1AD01',
        'secondary-32': 'rgba(225, 173, 1, 0.32)',

        background:'#1E1E1E',
        'background-55':'rgba(30,30,30,0.55)',
        pagebg:'#D0D0D0',
        grey: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#C0C0C0',
          400: '#cbd5e0',
          500: '#5B5B5B',
          600: '#718096',
          700: '#4a5568',
          800: '#1E1E1E',
          900: '#1a202c',
        },
        blue: {
          100: '#F8F8F8',
          200: '#EFF1F4',
          300:'#467BBA',
         
        },
      
      },
      fontSize: {
        
        'title': ['2rem', { lineHeight: '2.5rem' }],
        'subtitle': ['2.3rem', { lineHeight: '3rem' }],
        'heading': ['2.2rem', { lineHeight: '3rem' }],
        'moto': ['1.5rem', { lineHeight: '2rem' }],
        'moto-sm': ['1.3rem', { lineHeight: '3rem' }],
        'title-sm': ['2.9rem', { lineHeight: '3rem' }],
        'subtitle-sm': ['4.5rem', { lineHeight: '7rem' }],
        'button-text':['1rem',{ lineHeight: '2rem' }],
        'button-text-sm':['1rem',{ lineHeight: '3rem' }],
        'normal': ['1.5rem', { lineHeight: '1.75rem' }],
       'big': ['4rem', { lineHeight: '5rem' }],
       'nav':['1.17rem',{ lineHeight: '2rem' }],


// updated
        // hero
        'subheader': ['4.50rem', { lineHeight: '6.75rem' }],
        'header': ['5.25rem', { lineHeight: '1.75rem' }],

          // 
          'sectionTitle': ['2.50rem', { lineHeight: '1.75rem' }],

      },
    },
  },
  plugins: [],
};
