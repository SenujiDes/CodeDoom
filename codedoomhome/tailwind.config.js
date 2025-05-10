module.exports = {
  // ...existing config
  //Taiwand has default themes , if we write extend it means dont remove the default themes just add new values to it 
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      }
    }
  }
}
