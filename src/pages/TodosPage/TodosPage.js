import {useEffect, useState} from "react";

import css from '../../layout/MainLayout/MainLayout.module.css'

import {todoService} from "../../services";
import {Todo} from "../../components";

const TodosPage = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function todoFetch() {
            try {
                const {data} = await todoService.getAll();
                setTodos(data);
            } catch (e) {
                alert("Не вдалося загрузити todos :(");
            }
        }

        todoFetch();
    }, []);

    return (
        <div className={css.wrapper}>
            {todos.map(todo => <Todo key={todo.key} todo={todo}/>)}
        </div>
    );
};

export {TodosPage};