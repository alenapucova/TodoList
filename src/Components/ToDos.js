import React from 'react';
import Item from './Item';

class Todos extends React.Component{

   
    render(){
        return this.props.todos.map((todo) => (
            <h3><Item key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}/></h3>
        ))
    }
}

export default Todos