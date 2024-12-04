
import Body from "./pages/Body.jsx";
import {Route, Routes} from "react-router-dom";
import ItemDesc from "./pages/ItemDesc.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Body/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/item/description/:id"} element={<ItemDesc/>}/>
            </Routes>
        </>
  )
}

export default App
