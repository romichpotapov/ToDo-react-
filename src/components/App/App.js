import React, { Component } from 'react';

import './App.css';

import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import AppHeader from '../AppHeader';
import ItemstatusFilter from '../ItemstatusFilter';
import ItemAddForm from '../ItemAddForm';


export default class App extends Component {

    maxId = 50;

    state = {
        todoData: [
            {lable: 'Drink Coffee', important: false, id: 1},
            {lable: 'Learn React', important: true, id: 2},
            {lable: 'Make Awesome ReactApp', important: true, id: 3},
            {lable: 'Have a lunch', important: false, id: 4},
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id);
            

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArr = [...before, ...after];

            return {
                todoData: newArr
            };
        });
    };

    addItem = (text) => {
        const newItem = {
            lable: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({ todoData }) => {
            const newData = [...todoData, newItem];

            return {
                todoData: newData
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemstatusFilter />
                </div>
                <TodoList 
                    todos = { this.state.todoData } 
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm addItem={this.addItem}/>
            </div>
        );
    }

    
};