// import { Avata } from "./Avatar";
// import Cart from "./Cart";
// import Log from "./Log";
import Navbar from "./Navbar";
import OurImage from "./OurImage";


export default function Nav(){

    return(
        <div className="flex justify-between lg:items-start gap-2 bg-bl ">
            <OurImage/>
            <div className="m-2">
            <Navbar/>
            </div>
            {/* <div className="m-4">
            <Cart/>
            </div>
            <div>
                <Log/>
            </div>
            <div className="m-2">
            <Avata/>
        </div> */}
        </div>
    )
}