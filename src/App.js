// import './App.css';
// import React from "react"
// import { useMediaQuery } from "react-responsive"

// function App() {

//   const isMobile = useMediaQuery({
//     query : "(max-width:767px)"
//   });

//   const isPc = useMediaQuery({
//     query : "(min-width:1024px)"
//   });

//   return (
//   <div>
//     {isMobile &&
//       <div>
//         <h2>모바일버전</h2>
//         <nav>
//           <a href="#">menu1</a>
//           <a href="#">menu2</a>
//           <a href="#">menu3</a>
//           <a href="#">menu4</a>
//         </nav>
//       </div>
//     }
//     {isPc &&
//       <div>
//         <h2>PC버전</h2>
     
//       </div>
//     }
//   </div>
//   );
// }

// export default App;

import './App.css';
import React from "react"

const App = () => {

  return (
  <div class="row">
    <div class="menu">
      <a class="column" href="#">Menu1</a>
      <a class="column" href="#">Menu2</a>
      <a class="column" href="#">Menu3</a>
      <a class="column" href="#">Menu4</a>
    </div>

    <div class="content">
      <p>Aside Section</p>
    </div>
    
    {/* <div class="column">
      <h2>Menu1</h2>
    </div>
    <div class="column">
      <h2>Menu2</h2>
    </div>
    <div class="column">
      <h2>Menu3</h2>
    </div>
    <div class="column">
      <h2>Menu4</h2>
    </div> */}
  </div>
  )
}

// MenuBar Table Test
// const App = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-device-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isTabletOrMobileDevice = useMediaQuery({
//     query: '(max-device-width: 1224px)'
//   })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
 
//   return (
//     <div>
//       <h1>Device Test!</h1>
//       {isDesktopOrLaptop && <>
//         <p>You are a desktop or laptop</p>
//         {isBigScreen && <p>You also have a huge screen</p>}
//         {isTabletOrMobile && <p>You are sized like a tablet or mobile phone though</p>}
//       </>}
//       {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
//       <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
//       {isRetina && <p>You are retina</p>}
//     </div>
//   )
// }

export default App;