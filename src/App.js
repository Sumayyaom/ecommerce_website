import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetail";
import AddProduct from "./admin/AddProduct";
import SignUp from "./components/SignUp";
import Services from "./Pages/Services";

function App() {
  return (
      <Router>
         <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path='/signup' element={<SignUp />}/> 
        <Route path="/admin/product/add" element={<AddProduct />} />
      </Routes>
      <Footer/>
      </Router> 
  );
}

export default App;

