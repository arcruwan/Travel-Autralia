import "./App.css";
import Footer from "./Componets/webSite/Footer/Footer";
import "./Assets/icon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Componets/webSite/header/Navbar";

import {
  Home,
  GalleryReact,
  TopDestination,
  OurServices,
  Descovery,
  SimpleSlider,
} from "./Componets/webSite/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Home />

        {/* <header className="App-header">
          
        </header> */}
      </div>

      <OurServices />
      <Descovery />
      <GalleryReact />
      {/* <Services /> */}
      <SimpleSlider />
      <TopDestination />
      <Footer />
    </>
  );
}

export default App;
