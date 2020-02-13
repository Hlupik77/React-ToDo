import React from 'react';
import TodoListItems from './todo-list-items';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ... itemProps } = item;

        return (
            <li key={id}>
                <TodoListItems {... itemProps } />
            </li>
        );
    });

    return (
        <ul>
            { elements }
        </ul>
    );
};
export default TodoList;