import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useCallback, useEffect, useState} from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import "./Cart.css"
const Cart =()=>{

    const[itemsInCart,setItemsInCart] =useState(1)
    const [cartItems,setCartItems] =useState([])
    const BASE_URL ="http://localhost:8080/api/v1/cart/get/cart?id=1"

    useEffect(()=>{
        fetchItemsInCart()
    },[])

    const cartStyling ={
        margin:"10px auto",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        width:"50%",
        // height: "76vh",
        justifyContent:"flex-start",
    }
    const cartStyles ={
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"space-between",
        flexWrap: "wrap",
        gap:5,
        backgroundColor:"rgb(191, 207, 231,0.5)",
        padding:"10px",
        width: "80%",
        margin: "0 auto"

    }
    const modifyCart={
        display: "flex",
        alignItems:"center"
    }

    const cartItemsHolder ={
        display:"flex",
        alignItems: "flex-end",
        justifyContent: "space-evenly"
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
            <div className={"items__in__cart"} >
                <div style={cartItemsHolder} className={"cart__items__holder"}>
                    <div style={cartStyles} className={"card__holder"}>
                        {cartItems.length>0?(
                            cartItems.map((item)=>(
                                <div style={cartStyles}>
                                    <Card
                                        off={item.offer}
                                        description={item.description}
                                        image={item.image}
                                        id={item.id}
                                        offPrice={item.offerAmount}
                                        price={item.price}
                                        name={item.name} imgHeight={"60px"}
                                        imgWidth={"60px"}

                                    />
                                    <div className={"add__modify__cart"} style={modifyCart}>
                                        <button onClick={() => setItemsInCart(itemsInCart > 1 ? itemsInCart - 1 : 1)}>
                                            <RemoveIcon/>
                                        </button>
                                        <p>Quantity: {itemsInCart} </p>
                                        <button
                                            onClick={() =>
                                                setItemsInCart(itemsInCart + 1)}
                                        >
                                            <AddIcon/>
                                        </button>

                                    </div>
                                    <div>Total :</div>
                                    <div className={"clear__cart"}>
                                        <button onClick={()=>clearCart()}>
                                            Clear cart
                                        </button>
                                    </div>
                                </div>
                            ))
                            ):(
                            <div>empty cart</div>
                        )}
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Cart