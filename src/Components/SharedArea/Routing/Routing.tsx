import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import Home from "../../LayoutArea/Home/Home";
import Main from "../../LayoutArea/Main/Main";
import About from "../../PagesArea/About/About";
import TodoList from "../../TodoArea/TodoList/TodoList";
import Login from "../../UsersArea/Login/Login";
import Logout from "../../UsersArea/Logout/Logout";
import Page404 from "../Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="tasks" element={<TodoList />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
