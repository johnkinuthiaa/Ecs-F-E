
const Services =({icon,title,content})=>{
    const service ={
        display:"flex",
        // width:"500px",
        alignItems:"center"
    }
    const descriptionCont ={
        display: "flex",
        flexDirection:"column",
        justifyContent:"flex start",
        marginLeft:"10px"
    }
    return(
        <div className={"services__offered"} style={service}>
            <div style={{color:"rgb(26, 77, 46)"}} className={"icon__wq"}>
                {icon}
            </div>
            <div className={"services__desc"} style={descriptionCont}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )

}
export default Services