import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo=> 
                        <TodoItem
                            key={todo.id} 
                            todo={todo} 
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.delTodoProps}
                            setUpdate={this.props.setUpdate}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoList;