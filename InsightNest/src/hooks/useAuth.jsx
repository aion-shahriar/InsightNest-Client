import { use } from "react";
import authContext from "../contexts/AuthContext/AuthContext";


const useAuth = () => {
    const authInfo = use(authContext);

    return authInfo;
}

export default useAuth;