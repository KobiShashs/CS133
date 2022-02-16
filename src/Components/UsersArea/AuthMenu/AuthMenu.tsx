import { Link } from "react-router-dom";
import authService from "../../../Services/AuthService";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    return (
        <div className="AuthMenu">
			{ (authService.isLoggedIn)?
            <>
                <span>Welcome Kobi Shasha</span><Link to="logout">Logout</Link>
            </> 
             : 
             <>
             <span>Hello Guest</span><Link to="login">Login</Link>
             </>
             }
        </div>
    );
}

export default AuthMenu;
