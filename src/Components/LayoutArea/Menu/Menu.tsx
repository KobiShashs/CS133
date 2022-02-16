import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <Link to="tasks">Todo List</Link>
			<Link to="about">About</Link>
			<Link to="home">Home</Link>

            {/* <div className="links">
                <a href="#">Admin</a>
                <a href="#">Customer</a>
                <a href="#">Company</a>
            </div> */}
        </div>
    );
}

export default Menu;
