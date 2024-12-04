import "./styles/card.css"
import {useNavigate} from "react-router-dom";
const Card =({image,off,name,price,offPrice,description,id})=>{
    const navigate =useNavigate()
    const cardStyles ={
        backgroundColor:"rgb(191, 207, 231,0.5)",
        display:"flex",
        flexDirection:"column",
        borderRadius: "5px",
        flexWrap: "wrap",
        gap:"10px",
        width: "300px",
        alignItems:"center",
        cursor:"pointer"
    }
    const imageStyles ={
        borderRadius:"7px",
        // width:"236px",
        // height:"357px"
        margin:"5px",
        width:"280px",
        height:"400px"
    }

    const priceCard={
        fontWeight:"800"
    }

    const handleCLick =()=>{
        navigate(`/item/description/${id}`)
    }

    return(
        <div className={"card"} style={cardStyles} id={id} onClick={()=>handleCLick()}>
            <img src={image} alt={name} style={imageStyles}/>
            <div className={"card__details"}>
                <h3 style={{color:"rgb(0,0,0,0.6)"}}>{name}</h3>
                {off ===false? (
                    <p>Price :${price}</p>
                ):(
                    <div style={priceCard}>
                        <p className={"previous"} style={{
                            textDecorationLine:"line-through",
                            textDecorationColor: "red"
                        }}>
                            Was: ${(price + offPrice).toFixed(2)}
                        </p>
                        <p>{offPrice != 0 && `Discount: $${offPrice}`}</p>
                        <p className={"new__price"}>New Price:${price}</p>
                    </div>
                )}

            </div>
        </div>
    )
}
export default Card