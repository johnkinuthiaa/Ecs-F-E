
const Modal =({message,icon})=>{
    const modalStyles ={
        display:"flex",
        padding:"10px",
        position:"absolute",
        alignItems:"center",
        backgroundColor:"white",
        boxShadow:"0 0 4px rgb(0,0,0)",
        top:"30px",
        right:"0",
        margin:"20px"
    }
    return(
        <div style={modalStyles}>
            {icon}
            <p>{message}</p>
        </div>
    )
}
export default Modal