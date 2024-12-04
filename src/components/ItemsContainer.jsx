import "./styles/itemsContainer.css"
import Card from "./Card.jsx";

import {useEffect, useState} from "react";

const ItemsContainer=()=>{
    useEffect(()=>{
        get()
    },[])
    const [allItems,setAllItems] =useState([])
    const itemsContainer ={
        marginTop:"40px",
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        width: "100%"
    }
    const items ={
        display: "flex",
        flexWrap:"wrap",
        gap:"10px",
        borderRadius:"10px",
        width:"97%",
        margin:"30px",

    }
    const get =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/shop/get/all",{
            method:"GET"
        })
        if(response.ok){
            const data =await response.json()
            setAllItems(data.shopItemList)
        }
    })

    return(
        <div>
            <div className={"items__container"} style={itemsContainer}>
                <h1>Discover Our Most Loved Items</h1>
                <div className={"btns__container"}>
                    <div>Men</div>
                    <div>women</div>
                    <div>Kids</div>
                </div>
            </div>
            <div className={"items"} style={items}>
                {allItems.map((item)=> (
                    <Card description={item.description} name={item.name} price={item.price} image={item.image} offPrice={item.offerAmount} id={item.id} off={item.offer}/>

                ))}
            </div>


        </div>

    )
}
export default ItemsContainer