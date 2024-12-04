import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./styles/header.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Header =()=>{
    const navigate =useNavigate()
    const[isSearchVisible,setIsSearchVisible] =useState(false)
    const[searchValue,setSearchValue] =useState("")
    const searchVisibility =()=>{
        setIsSearchVisible(!isSearchVisible)
    }
    const getCart =()=>{
        navigate("/cart")
    }
    return(
        <div className={"header"} style={{
            display:"flex",
            justifyContent:"space-evenly",
            color:"rgb(26, 77, 46)",
            padding:"20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
        }}>
            <div style={{
                color:"rgb(26, 77, 46)",
                display:"flex"
            }}
                 onClick={
                ()=>navigate("/")
            }
            >
                <Grid4x4Icon/>
                <h2>Ecs shop</h2>
            </div>
            <div className={"categories"} style={{
                display:"flex",
                justifyContent:"space-between",
                margin:"0 auto"}}>

                <div onClick={()=>{

                    navigate("/items/male")
                }}>
                    Men
                </div>
                <div onClick={()=>{

                    navigate("/items/female")
                }}>
                    Women
                </div>
                <div onClick={()=>{

                    navigate("/items/children")
                }}>
                    Kids
                </div>
                <div onClick={()=>{

                    navigate("/items/all")
                }}>
                    All items
                </div>
            </div>
            <div className={"profile__section"} style={{
                display:"flex",
                alignItems:"center",
                color:"rgb(0,0,0)",
                width:"256px",


            }}>
                {isSearchVisible &&
                    <input type={"search"} placeholder={"search for item"} onChange={(e)=>setSearchValue(e.target.value)}/>

                }
                <button type={"submit"} onClick={()=>{

                }}></button>
                <div className={"profile__section__search"} onClick={()=>searchVisibility()}>
                    <SearchIcon />
                </div>
                <div className={"cart"} onClick={()=>getCart()}>
                    <ShoppingCartIcon/>
                </div>

                <AccountCircleIcon/>
            </div>

        </div>
    )
}
export default Header;