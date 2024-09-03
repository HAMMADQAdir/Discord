/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // function ({addUtilities}){
    //   const newUtilities ={
    //     ".scrollbar-thin":{
    //       scrollbarWidth:"thin",
    //       scrollbarColor:"#1A1B1E"
    //     },
    //     ".scrollbar-webkit": {
    //       "&:: -webkit-scrollbar":{
    //         width:"8px"
    //       },
    //       "&::-webkit -scrollbar-thumb":{
    //         backgroundColor:""
    //       }
    //     }
    //   }
    // }
    ],
}

