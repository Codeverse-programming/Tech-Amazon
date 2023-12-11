/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#F6F5F1',
        'box1': '#FF843F',
        'box2': '#5398FF',
        'bg1': '#EADFD8',
        'bg2': '#FECC17',
        'box3': '#31D4AD',
        'box4': '#F46F6F',
        'box5': '#D1A4FF',
        'selected-text': '#F46F6F',
      },
      fontFamily: {
        'head-text': ['MuseoModerno','sans-serif;'],
        'medium-text': ['MuseoModerno','sans-serif;'],
        'regular-text': ['MuseoModerno','sans-serif;'],
      },
      backgroundPosition:{
        'center-top': '0rem -35em',
        'center-tops': '0rem -40em',
      }
    },
  },
  plugins: [],
}

