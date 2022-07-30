import React from "react"
import PublicIcon from '@mui/icons-material/Public';
import "../style/Navbar.css"

const Navbar=()=>{
    return(
       <nav className="navbar">
        <PublicIcon style={{position: "absolute",width: "24px",height: "24px", left: "218px", top: "20px",color: "#DADADA"}} />
        <h1 className="navbar-title">My Travel Journal.</h1>
       </nav>
    )
}


export default Navbar;