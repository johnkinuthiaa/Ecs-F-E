import "./styles/card.css"
const Card =({image,off,name,price,offPrice,description})=>{
    const cardStyles ={
        backgroundColor:"rgb(191, 207, 231,0.5)",
        display:"flex",
        flexDirection:"column",
        borderRadius: "5px",
        flexWrap: "wrap",
        gap:"10px",
        width: "300px",
        alignItems:"center"
    }
    const imageStyles ={
        borderRadius:"7px",
        // width:"236px",
        // height:"357px"
        margin:"5px",
        width:"280px",
        height:"400px"
    }
    return(
        <div className={"card"} style={cardStyles}>
            <img src={image} alt={name} style={imageStyles}/>
            <div className={"card__details"}>
                <h3>{name}</h3>
                <p>${price}</p>
                <p>{offPrice != 0 && `${offPrice}`}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Card