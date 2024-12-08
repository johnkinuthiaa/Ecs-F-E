import {useEffect, useState} from "react";
import Card from "./Card.jsx";

const Search =()=>{
    const[searchName,setSearchName] =useState("")
    const url =window.location.href
    const search =url.match(/[^/]+$/);

    useEffect(()=>{

        fetchDataWithName()

    },[...search])
    const fetchDataWithName =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/shop/find/name?name=${search}`)
        if(response.ok){
            const data =await response.json()
            console.log(data.shopItemList)

        }
    })

    /*
    * <Card description={item.description} name={item.name} price={item.price} image={item.image} offPrice={item.offerAmount} id={item.id} off={item.offer}/>
    * `http://localhost:8080/api/v1/shop/find/name?name=${searchName}
    * */


    return(
        <div>
            <p>{search}</p>
        </div>
    )
}
export default Search