import { FaFortAwesome } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Routing from "../../SharedArea/Routing/Routing";
import TodoList from "../../TodoArea/TodoList/TodoList";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			{/* <FaFortAwesome/> */}
            {/* <TodoList/> */}
            <Routing/>
            <Outlet/>
        </div>
    );
}

export default Main;
