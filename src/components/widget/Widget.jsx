import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutLinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
//import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./widget.scss"

const Widget = ({type}) => {

    let data;

    // temp var
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data ={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className="icon" style={{color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}}/>
            };
            break;
        
        case "order":
            data ={
                title: "ORDER",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutLinedIcon className="icon" style={{color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}}/>
            };
            break;
        case "earnings":
            data ={
                title: "EARNINGS",
                isMoney: true,
                link: "View all earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)"}}/>
            };
            break;
        case "balance":
            data ={
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}}/>
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"} {amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="left">
                <div className="percentage positive">
                    <i className="fas fa-angle-up fa-lg"></i>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
} 

export default Widget