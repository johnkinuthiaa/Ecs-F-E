import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";

import "./Cart.css"
import Button from "../components/Button.jsx";
const Cart =()=>{

    const[itemsInCart,setItemsInCart] =useState(1)
    const [cartItems,setCartItems] =useState([])

    let totalAmount =0

    const BASE_URL ="http://localhost:8080/api/v1/cart/get/cart?id=1"

    useEffect(()=>{
        fetchItemsInCart()
    },[])

    const cartStyling ={
        margin:"10px auto",
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        flexWrap:"wrap",
        width:"50%",
        height:"98vh",
        // backgroundColor: "whiteSmoke"
    }
    const cartStyles ={
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-evenly",
        flexWrap: "wrap",
        gap:2,
        padding:"10px",
        width: "80%",
        margin: "0 auto",
        backgroundColor:"rgb(191, 207, 231,0.5)"

    }
    const modifyCart={
        display: "flex",
        alignItems:"center"
    }

    const fetchItemsInCart =(async ()=>{
        const response =await fetch(BASE_URL)
        const data = await response.json()
        if(data.cart.items !==null){
            setCartItems(data?.cart.items)
        }else{
            setCartItems(["cart is empty at the moment"])
        }
    })
    const clearCart =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/cart/clear/cart?id=1",{
            method:"DELETE"
        })
        if(response.ok){
            const data =await response.json()
            alert(data.message)
        }
    })

    return(
        <div style={cartStyling}>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div style={cartStyles} className={"cart__item__holder"}>
                        <p style={{display: "none"}}>{totalAmount = totalAmount + item.price}</p>
                        <div className={"cart"}>
                            <img src={item.image} alt={item.name}/>
                            <div className={"text"}>
                                <h3>{item.name}</h3>
                                <p>price :${item.price}</p>
                                <div className={"add__modify__cart"} style={modifyCart}>
                                    <button onClick={() => setItemsInCart(itemsInCart > 1 ? itemsInCart - 1 : 1)}>
                                        <RemoveIcon/>
                                    </button>
                                    <p>Qty: {itemsInCart} </p>
                                    <button
                                        onClick={() =>
                                            setItemsInCart(itemsInCart + 1)}
                                    >
                                        <AddIcon/>
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>

                ))

            ) : (
                <div style={{width:"100%",alignItems:"center"}}>
                    <img src={"https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"} alt={"empty cart"}/>
                </div>
            )}
            <div className={"clear__cart"} style={{display:cartItems.length===0&&"none"}}>
                <p>Total Price: ${totalAmount}</p>
                <div onClick={() => {
                    cancelAnimationFrame(2)
                    clearCart()
                }}>
                    <Button
                        backgroundColor={"rgb(220, 95, 0)"}
                        icon={<DeleteIcon/>}
                        text={"clear cart"}
                    />

                </div>

            </div>
        </div>
    )
}
export default Cart