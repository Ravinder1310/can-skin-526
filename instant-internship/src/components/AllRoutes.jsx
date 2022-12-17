import Home from "./home"
import {Routes,Route} from "react-router-dom"
import Login from "./login"
import Cart from "./Cart"
import SignUp from "./SignUp"

export default function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
        </>
    )
}