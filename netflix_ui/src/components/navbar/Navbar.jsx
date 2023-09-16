import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import "./navbar.scss"
import { useState } from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolloed] = useState(false);
    window.onscroll=() =>{
        setIsScrolloed(window.pageYOffse === 0 ? false:true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=" " />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Poular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" alt="" />
                <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
