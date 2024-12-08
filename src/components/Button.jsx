import {useEffect, useState} from "react";
import Modal from "./Modal.jsx";
import InfoIcon from "@mui/icons-material/Info";

const Button =({backgroundColor,icon,text,disabled,modalMessage,modalIcon})=>{
    const[clicked,setClicked] =useState(false)
    useEffect(() => {
        colorChange()
    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setClicked(false)
        },5000)
    },[clicked])
    const [color,setColor] =useState("")

    const colorChange=()=>{
        backgroundColor ==="#fff"?setColor("#000000"):setColor("#fff")
    }

    const buttonStyles ={
        backgroundColor:`${backgroundColor}`,
        borderRadius:"20px",
        border:"none",
        outline:"none",
        padding:"10px",
        cursor:"pointer",
        fontWeight:"600",
        display:"flex",
        alignItems:"center",
        fontSize:"16px",
        color:`${color}`,
        marginLeft:"15px"
    }
    const disabledStyle ={
        backgroundColor:"rgb(104, 109, 118)",
        cursor: "not-allowed",
        borderRadius:"20px",
        border:"none",
        outline:"none",
        padding:"10px",
        fontWeight:"600",
        display:"flex",
        alignItems:"center",
        fontSize:"16px",
    }


    return(
        <div className={"button"}>
            <button style={disabled?disabledStyle:buttonStyles} onClick={()=>{
                setClicked(true)
            }}>
                {text}{icon?icon:""}

            </button>
            {clicked && <Modal icon={modalIcon} message={modalMessage}/>}
        </div>
    )
}
export default Button