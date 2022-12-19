import Home from "./home"
import {Routes,Route} from "react-router-dom"
import Login from "./login"
import Cart from "./Cart"
import SignUp from "./SignUp"
import Marketing from "./marketing"
import Business from "./business"
import Writing from "./writing"
import Graphic from "./graphic"
import Internship from "./internship"

export default function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/marketing" element={<Marketing/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/writing" element={<Writing/>}/>
            <Route path="/graphic" element={<Graphic/>}/>
            <Route path="/internship" element={<Internship/>}/>
        </Routes>
        </>
    )
}