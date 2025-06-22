import { getCurrentUser } from '@/lib/appwrite/api';
import { IContextType, IUser } from '@/types'; // Make sure IUser and IContextType are correctly defined
import {createContext,useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';


export const INITIAL_USER: IUser = { // Add type assertion for better safety
    $id: '', // Changed 'id' to '$id' to match IUser interface
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
};

const INITIAL_STATE: IContextType = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { /* no-op */ },
    setIsAuthenticated: () => { /* no-op */ },
    checkAuthUser: async () => false as boolean,
};


const AuthContext = createContext<IContextType>(INITIAL_STATE);


const AuthProvider = ({children}:{children:React.ReactNode}) => {
    
    const [user,setUser] =useState<IUser>(INITIAL_USER);
    const [isLoading,setIsLoading]=useState(false);
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    const navigate=useNavigate();
        
    const checkAuthUser= async ()=>{
        try{
            setIsLoading(true); // Start loading when checking auth
            const currentAccount=await getCurrentUser();

            if(currentAccount) {
                setUser({
                    $id: currentAccount.$id, // Ensure this is also $id from Appwrite
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    imageUrl: currentAccount.imageUrl,
                    bio: currentAccount.bio
                });
                setIsAuthenticated(true);
                return true;
            }
            
            return false;
        }catch(error){
            console.log(error);
            return false;
        }finally{
            setIsLoading(false); // End loading regardless of success/failure
        }
    };

    useEffect(()=>{
        // More robust check for localStorage item
        const cookieFallback = localStorage.getItem('cookieFallback');
        if (cookieFallback === '[]' || cookieFallback === null || cookieFallback === undefined) {
            navigate('/sign-in');
        }

        checkAuthUser();
    },[]);

    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser
    }; 


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useUserContext=()=>useContext(AuthContext);