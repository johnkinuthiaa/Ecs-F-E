
import './App.css'
import Body from "./pages/Body.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Body/>}/>
            </Routes>
        </>
  )
}

export default App
