import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../../../Models/Task";
import authService from "../../../Services/AuthService";
import globals from "../../../Services/Globals";
import notify, { SccMsg } from "../../../Services/Notification";
import ILTime from "../../SharedArea/ILTime/ILTime";
import "./TodoList.css";

function TodoList(): JSX.Element {
    // const init: Task[] = [];
    const [tasks, setTasks] = useState<Task[]>([]);

    // const getTasks = async () =>{
    //     await axios.get<Task[]>('http://localhost:8080/api/moshe');
    // }

    useEffect(() => {
        //ComponentDidMount
        const headers = {'Authorization': authService.token};
        axios.get<Task[]>(globals.urls.tasks,{headers: headers})
            .then((res) => {
                setTasks(res.data);
                notify.success(SccMsg.GOT_TASKS);
            })
            .catch((err) => { notify.error(err) });
    }, []);


    const listItems = tasks.map((task: any, i) =>
        <li key={i}>
            {task.name}  {task.description} {task.group}  <ILTime date={task.when}></ILTime> 
        </li>
    );

    return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <ol>{listItems}</ol>
        </div>
    );


}



export default TodoList;
