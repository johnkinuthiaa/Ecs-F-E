import "./styles/StripAnimation.css"
const Adverts =()=>{
    const stripStyles ={
        display:"inline-flex",
        color:"#fff",
        backgroundColor:"rgb(26, 77, 46)",
        padding:"5px",
        justifyContent:"space-evenly",
        margin:"0 auto",
        width:"80%",
        whiteSpace:"nowrap"

    }
    return(
        <div className={"strip__holder"} style={{backgroundColor:"rgb(26, 77, 46)"}}>
            <div className={"advert__strip"} style={stripStyles}>
                <p>Get upto 70% off today</p>
                <p>Winter is coming</p>
                <p>Cold days Hot deals</p>
                <p>Warm looks Cold prices</p>
                <p>winter sale</p>
                <p></p>
            </div>

        </div>
    )
}
export default Adverts