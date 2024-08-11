import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Navbar = (props)=>{
    return (
        <div className=" bg-opacity-20    p-2 w-full flex flex-row h-20 justify-between items-center">
            <div id="platform-logo" className="ml-5  text-xl">
                <div className=" font-extrabold roboto-mono">Shopping</div>
                <div className=" caveat  text-3xl  custom-underline" >Shot</div>
            </div>
            <div id="utility-menu" className="flex flex-row">
                <div className="navIcon px-5">Home</div>
                <div className="navIcon px-5">Shop by Category</div>
                <div className="navIcon px-5">Special Offers</div>
                <div className="navIcon px-5">About</div>
                <div className="navIcon px-5">Contact</div>
            </div>

            <div id="notification menu" className="flex flex-row justify-end   ">
                <div className="text-2xl  mr-2 navIcon"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                <div className="text-2xl navIcon ">$0.00</div>
                <div className="text-2xl navIcon"><FontAwesomeIcon icon={faCartShopping} /></div>
                <div className="text-2xl navIcon"><FontAwesomeIcon icon={faUser} /></div>
            </div>
        </div>
    )
}