import React from 'react';
import logo from '../logo.svg';
import TodoList from "../TodoList/TodoList";
import './App.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import superplaceholder from 'superplaceholder';
import Todo from "../Todo/Todo";

class App extends React.Component {
    state = {
        newTask: '', todos: [
            new Todo('🚗 Wash car'),
            new Todo('💸 Get paid'),
            new Todo('💻 Create todo app')
        ]
    };

    render() {
        const setState = (state: any) => this.setState(state);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Tasky</p>
                </header>
                <section>
                    <h2>Add a new task</h2>
                    <div className="newTaskInput">
                        <input className="rounded-box primary" type="text" placeholder="" value={this.state.newTask}
                               onChange={e => setState({newTask: e.target.value})}/>
                        <FontAwesomeIcon onClick={()=> this.setState({todos: [...this.state.todos, this.state.newTask]})}
                                         className="rounded-box primary" icon={faPlusCircle}/>
                    </div>
                    <div className="mainPadding">
                        <TodoList {...this.state.todos}/>
                    </div>
                </section>
            </div>
        );
    }

    componentDidMount(): void {
        superplaceholder({
            el: document.querySelector('input'),
            sentences: ['...Fix that leak', '...Hug my cat', '...Cover my mouth when coughing 😷', '...Go to the store', '...Update my resume'],
            options: {
                letterDelay: 80,
                sentenceDelay: 850,
                shuffle: true,
                loop: true
            }
        }).start();
    }
}

export default App;
