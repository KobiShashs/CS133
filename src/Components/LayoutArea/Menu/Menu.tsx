import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			{/* <Link to="moshe">Admin Management</Link>
			<Link to="moshe">Compnay Management</Link>
			<Link to="moshe">Customer Management</Link> */}

            <a href="#">Admin</a>
            <a href="#">Customer</a>
            <a href="#">Company</a>
        </div>
    );
}

export default Menu;
