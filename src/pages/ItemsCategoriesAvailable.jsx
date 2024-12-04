import {useEffect, useState} from "react";
import Card from "../components/Card.jsx";

const ItemsCategoriesAvailable =()=>{
    const url =window.location.href
    const category =url.match(/[^/]+$/);

    const [cat,setCategory] =useState([])

    useEffect(()=>{
        fetchDataByCategory()
    })
    console.log(typeof (cat))
    const fetchDataByCategory =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/shop/find/category?category=${category}`)
        if(response.ok){
            const data =await response.json()
            setCategory(data.shopItemList)
        }else{
            console.log("network error when fetching data by category")
        }

    })
    const itemsDesc={
        display: "flex",
        flexWrap:"wrap",
        gap:"10px",
        borderRadius:"10px",
        width:"97%",
        margin:"30px",
    }

    return(
        <div style={itemsDesc}>
            {cat.map((item)=>(
                <Card image={item.image} off={item.offer} name={item.name} price={item.price} offPrice={item.offerAmount} description={item.description} id={item.id} />

            ))}
        </div>
    )
}
export default ItemsCategoriesAvailable