import "./styles/card.css"
import {useNavigate} from "react-router-dom";
const Card =({image,off,name,price,offPrice,description,id,imgWidth,imgHeight})=>{
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
        margin:"5px",
        width:imgWidth?`${imgWidth}`:"280px",
        height:imgHeight?`${imgHeight}`:"400px",
    }

    const priceCard={
        fontWeight:"800"
    }
    const pricesStyle ={
        fontSize:"16px",
        fontWeight: "300px",
        color:"rgb(57, 62, 70) "
    }
    const handleCLick =()=>{
        navigate(`/item/description/${id}`)
    }

    return(
        <div className={"card"} style={cardStyles} id={id} onClick={()=>handleCLick()}>
            <img src={image ?image:"https://i.pinimg.com/236x/a1/cd/44/a1cd44f6617beebb9794877ef59082a1.jpg"} alt={name} style={imageStyles}/>
            <div className={"card__details"}>
                <h3 style={{color:"rgb(0,0,0,0.6)"}}>{name}</h3>

                {off ===false? (
                    <p>Price <span style={pricesStyle}>:$ {price}</span></p>
                ):(
                    <div style={priceCard}>

                        <p className={"previous"} style={{
                            textDecorationLine:"line-through",
                            textDecorationColor: "red"
                        }}>
                            Was: <span style={pricesStyle}>${(price + offPrice).toFixed(2)}</span>
                        </p>
                        <p>{offPrice != 0 && `Discount: $${offPrice}`}</p>
                        <p className={"new__price"}>New Price: ${price}</p>
                    </div>
                )}

            </div>
        </div>
    )
}
export default Card