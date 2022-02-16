import { useEffect } from "react";
import "./Login.css";

function Login(): JSX.Element {
    return (

        useEffect(()=>{
            //axios post request .... 
            // dont forget you ts model
            // save token into AutService
        },[]);
        <div className="Login">

            <form>
                <input type="email" placeholder="email" />
                <br />
                <input type="password" placeholder="password" />
                <br />
                <select>
                    <option value="Administrator">Admin</option>
                    <option value="Company">Company</option>
                    <option value="Customer">Customer</option>
                </select>
                <br />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
