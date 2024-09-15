
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer'
import Headers from './components/Header'
import SideNav from './components/LandingPage/sideNav';
import AddingServer from './components/LandingPage/addingServer';
import MyServer from './components/MyServer';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
       <div className="bg-[url('./assets/background_home.avif')] bg-cover bg-opacity-25 backdrop-blur-sm w-full h-full">
       {/* <Headers /> */}
       {/* <MyServer/> */}
       {/* <Sidebar/> */}
      
        <SideNav/> 
   {/* <AddingServer/> */}
       {/* <Footer /> */}
       </div>
      </>

    
  );
}

export default App;
