
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


function PrivateRoute({children}) {
    const token=JSON.parse(localStorage.getItem("token")) || ""
    if(token.length===0){
        return  <Navigate to="/login"/>
    }
    else{
        const decode=jwt_decode(token)
        if(decode.user_detail.user_type==="dealer" ){
            return children
        }
    
            return  <Navigate to="/login"/>
    }
    
}

export default PrivateRoute;
