import { createContext, useContext,useEffect,useState} from "react";


export const  AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token,settoken] = useState(localStorage.getItem("token"));
    const [user,setuser]= useState("");

    console.log(token);
    const storetokenInLS = (serverToken) =>{
        settoken(serverToken)
        console.log("server",serverToken);
        return localStorage.setItem("token",serverToken);
        }

    let isLoggedIn = !!token;
    console.log("login",isLoggedIn)


    const LogoutUser = ()=>{
        settoken("")
        return localStorage.removeItem('token')
    }

    const userAuthentication = async ()=>{
        try {
             const response = await fetch("https://ecommerce-server-blue.vercel.app/api/auth/user",{
             method:"GET",
             headers:{Authorization:`Bearer ${token}`}})

            if (response.ok){
                const data= await response.json();
                console.log("userdata",data.userData);
                setuser(data.userData);
            }

        }catch (error) {
            console.log("unable to fetch data;");
        }
    }

    useEffect(()=>{
        userAuthentication();
    },[]);

    return <AuthContext.Provider value={{storetokenInLS, LogoutUser, isLoggedIn,user,setuser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = ()=>{

    const AuthContextValue = useContext(AuthContext)
    if(!AuthContextValue){
        throw new Error("useAuth used outside of provider") 
    }
    return AuthContextValue;
}