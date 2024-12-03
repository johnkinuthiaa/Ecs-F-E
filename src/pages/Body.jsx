import Hero from "../components/Hero.jsx";
import AboutUs from "./AboutUs.jsx";
import ItemsContainer from "../components/ItemsContainer.jsx";

const Body =()=>{
    return(
        <div className={"body"} style={{scrollBehavior:"smooth"}}>
            <Hero/>
            <AboutUs/>
            <ItemsContainer/>
        </div>
    )
}
export default Body