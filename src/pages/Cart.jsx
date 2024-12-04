import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState} from "react";
import Button from "../components/Button.jsx";
const Cart =()=>{
    const[itemsInCart,setItemsInCart] =useState(0)
    const cartStyling ={
        margin:"10px auto",
        display:"flex",
        flexDirection:"column",
        width:"80%",
        height: "76vh",
        justifyContent:"flex-start",
        backgroundColor:"rgb(191, 207, 231,0.5)"
    }
    const modifyCart={
        display: "flex",
        alignItems:"center"
    }
    return(
        <div style={cartStyling}>
            <div className={"items__in__cart"} >
                <div>
                    <img />
                </div>
                <div>
                    <p>name</p>
                    <p>quantity</p>
                    <div className={"add__modify__cart"} style={modifyCart}>
                        <Button icon={<RemoveIcon/>} backgroundColor={"red"}/>
                        <button onClick={() => setItemsInCart(itemsInCart > 0 ? itemsInCart - 1 : 0)}>
                            <RemoveIcon/>
                        </button>
                        <p>{itemsInCart}</p>
                        <Button icon={<AddIcon/>} backgroundColor={"green"}/>
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
    )
}
export default Cart