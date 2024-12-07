import {useEffect, useState} from "react";
import "./itemDesc.css"
import Button from "../components/Button.jsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemDesc =()=>{

    const [itemWithId,setItemWithId] =useState({})
    const [like,setLiked] =useState(false)
    let[disable,setDisabled] =useState(false)
    useEffect(() => {
        getById()
    }, []);

    const currentUrl =window.location.href
    const id =currentUrl.match(/[^/]+$/);

    const liking =()=>{
        setLiked(!like)
    }

    const getById =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/shop/find/id?id=${id}`)
        const data =await response.json()
        setItemWithId(data.item)
    })
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const addItemToCart =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/cart/add/items?itemId=${id}&UserId=1&cartId=1`, {
            method:"GET",
            headers:myHeaders,
            })
        const data = await response.json()
        setDisabled(true)
        alert(data.message)
    })

    const itemDescription = {
        margin:"10px auto",
        display:"flex",
        width:"80%",
        height: "76vh",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgb(191, 207, 231,0.5)"
    }

    const textStyle ={
        display: "flex",
        flexDirection:"column",
        padding:"10px"
    }
    const imageStyle ={
        borderRadius:"10px",
        height:"500px",
        objectFit:"contain",

    }
    const likeIcon ={
        color:"rgb(255, 41, 41)",
        cursor:"pointer"

    }
    const addToCartBtn={
        display:"flex"
    }

    return(
        <div className={"item__description"} style={itemDescription}>
            <div className={"image__like"}>
                <div onClick={()=>liking()} style={likeIcon}>
                    {like?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </div>
                <img src={itemWithId.image} style={imageStyle}/>
            </div>
            <div style={textStyle} className={"description__text__part"}>

                <h3>Name: </h3><span>{itemWithId.name}</span>
                <h3>Price: </h3><span>${itemWithId.price}</span>

                <h3>Quantity:</h3><span>Only {itemWithId.quantity} units remaining</span>

                <h3>Offer:</h3><span>{itemWithId.offer ===true?" item is on offer":"item is not on offer"}</span>

                {itemWithId.offerAmount !==null && <div><h3>Offer:</h3><span>$ {itemWithId.offerAmount} </span></div>}
                <h3>Description:</h3><span> {itemWithId.description}</span>
                <div className={"add__to__cart__btn__container"} style={addToCartBtn}>
                    <div
                        onClick={()=>{
                            disable?(alert("item is already in cart")):(
                                addItemToCart()
                            )
                        }}
                    >
                        <Button backgroundColor={"rgb(56, 229, 77)"} text={"Add To Cart"} icon={<ShoppingCartIcon/>} />
                    </div>
                    <Button backgroundColor={"rgb(61, 59, 243)"} text={"Add To WishList"} icon={<FavoriteIcon/>}/>
                </div>

            </div>

        </div>
    )
}
export default ItemDesc