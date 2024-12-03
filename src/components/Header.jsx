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
    const searchVisibility =()=>{
        setIsSearchVisible(!isSearchVisible)
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
                <h3>Men</h3>
                <h3>Women</h3>
                <h3>Kids</h3>
                <h3>All items</h3>
            </div>
            <div className={"profile__section"} style={{
                display:"flex",
                alignItems:"center",
                color:"rgb(0,0,0)",
                width:"256px",


            }}>
                {isSearchVisible && <input type={"search"} placeholder={"search for item"}/>}
                <div className={"profile__section__search"} onClick={()=>searchVisibility()}>
                    <SearchIcon />
                </div>
                <ShoppingCartIcon/>
                <AccountCircleIcon/>
            </div>

        </div>
    )
}
export default Header;