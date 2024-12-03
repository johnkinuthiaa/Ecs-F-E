import Button from "./Button.jsx";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";


const Hero =()=>{
    const heroStyle ={
        backgroundColor:"rgb(191, 207, 231,0.5)",
        padding:"80px",
        display:"flex"
    }
    const aboutStyle ={
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        marginLeft:"40px",
        width:"900px",
        color:"rgb(26, 77, 46)",
        lineHeight:"1.5",
        fontSize:"30px",
    }
    const buttonContainer={
        display:"flex",
        justifyContent:"space-evenly",
        margin:"10px"
    }
    return(
        <div className={"hero"} style={heroStyle}>
            <div className={"hero__image"}>
                <img src={"/src/assets/hero.png"} alt={"hero image"} style={{height:"700px",width:"500px"}}/>
            </div>
            <div className={"hero__about"} style={aboutStyle}>
                <h1>Style You Love,Quality you Trust -Built for Comfort</h1>
                <div className={"button__container"} style={buttonContainer}>
                    <Button backgroundColor={"rgb(26, 77, 46)"} text={"Shop Now"} icon={<ArrowOutwardIcon/>}/>
                    <Button backgroundColor={"#fff"} text={"Discover styles"} icon={<ArrowOutwardIcon/>}/>
                </div>
            </div>

        </div>
    )
}
export default Hero