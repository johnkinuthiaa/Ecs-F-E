import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import PaymentIcon from '@mui/icons-material/Payment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PaidIcon from '@mui/icons-material/Paid';
import Services from "../components/Services.jsx";
const AboutUs =()=>{
    const aboutUsStyle ={
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
        margin:"30px auto",
        width:"36%",
        lineBreak:"auto",
        lineHeight:"1.5",
        height:"200px",
        fontSize:"20px"
    }
    const serviceContainer ={
        display: "flex",
        justifyContent:"space-between",
        padding:"10px"
    }
    const aboutContainer={
        margin:"20px"
    }
    return(
        <div className={"about__container"} style={aboutContainer}>
            <div className={"about__us"} style={aboutUsStyle}>
                <h2>About us</h2>
                <p>Stay warm without compromising on style at EcsShop.Our winter collection for men,
                    women and children blends premium materials with the latest trends to keep you
                    looking great and feeling cozy
                </p>
            </div>
            <div className={"service__container"} style={serviceContainer}>
                <Services
                    icon={<AirportShuttleIcon/>}
                    title={"Free Delivery"}
                    content={"We offer free delivery all over the country!"}
                />
                <Services
                    icon={<VerifiedUserIcon/>}
                    title={"Online support"}
                    content={"24hr free online support"}
                />
                <Services
                    icon={<PaidIcon/>}
                    title={"Money Return"}
                    content={"30 day money return guarantee"}
                />
                <Services
                    icon={<PaymentIcon/>}
                    title={"Secure Payment"}
                    content={"Secure online payments with no loss of personal information"}
                />
            </div>

        </div>
    )
}
export default AboutUs