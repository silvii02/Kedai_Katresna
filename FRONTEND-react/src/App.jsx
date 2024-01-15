import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/AboutPage";

// header dan footer
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App(){
  return(
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/menu" Component={MenuPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App