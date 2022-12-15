import Home from "./home"
import {Routes,Route} from "react-router-dom"

export default function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
        </>
    )
}