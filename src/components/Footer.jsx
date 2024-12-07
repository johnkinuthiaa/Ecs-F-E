import "./styles/footer.css"
import {Link} from "react-router-dom";
const Footer =()=>{
    const footerStyles ={
        display:"flex",
        justifyContent:"space-between",
        margin:"0 auto",
        alignItems:"center",
        width:"80%",
        position:"absolute",
        // bottom:"0",
        padding:"10px"
    }
    return(
        <div className={"footer"} style={footerStyles}>
            <div>
                <h3>Store Address:</h3>
                <Link to={""}>Ginjaa kingkaid location</Link>
                <p></p>
            </div>
            <div>
                <h3>Store Hours:</h3>
                <p>Opening: 9am Mon-Sun</p>
                <p>Closing:9pm Mon-Sun </p>
            </div>
            <div>
                <h3>Contact Us:</h3>
                <p>Insta: @ECS_ke</p>
                <p>Gmail: @ecs1official.gmail.com</p>
            </div>

        </div>
    )
}
export default Footer