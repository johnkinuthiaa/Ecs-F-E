import {useEffect, useState} from "react";

const Button =({backgroundColor,icon,text,disabled})=>{
    useEffect(() => {
        colorChange()
    }, []);
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
            <button style={disabled?disabledStyle:buttonStyles}>
                {text}{icon?icon:""}
            </button>
        </div>
    )
}
export default Button