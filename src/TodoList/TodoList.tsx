import React from 'react';
import './TodoList.scss';
import Todo from "../Todo/Todo";
import {faSquare, faCheckSquare} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TodoList extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {todos: this.props.children};
    }

    todos = [
        new Todo('🚗 Wash car'),
        new Todo('💸 Get paid'),
        new Todo('💻 Create todo app')
    ];

    changeTodo(id: string, done: boolean) {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos[index].done = done;
        this.setState(this.state);
    }

    getTodos(done: boolean) {
        const renderedTodos = this.todos.filter(todo => todo.done === done);
        if (renderedTodos.length !== 0) {
            return (
                <ul>
                    {renderedTodos.map((todo) => (
                        <li className="rounded-box" key={todo.id} onClick={() =>
                            this.changeTodo(todo.id, !done)}>
                            <FontAwesomeIcon icon={done ? faCheckSquare : faSquare}/>
                            <span>{todo.label}</span>
                        </li>
                    ))}
                </ul>
            )
        }

        if (!done) {
            return <p>You've completed all your tasks! <span role="img" aria-label="Congrats!">🙌</span></p>
        } else {
            return <p>Complete your first todo to become <span className="text-accent">awesome</span><span role="img"
                                                                                                           aria-label="Become awesome!">🔥</span>
            </p>
        }
    }

    render() {
        return (<div className="TodoList">
                <h1>Todo:</h1>
                {this.getTodos(false)}
                <h1>Done:</h1>
                {this.getTodos(true)}
            </div>
        );
    }
}

export default TodoList;
