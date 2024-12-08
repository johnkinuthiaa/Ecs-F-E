import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import Adverts from "./components/Adverts.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Adverts/>
          <Header />
          <App />
          <Footer/>
      </BrowserRouter>
  </StrictMode>,
)
