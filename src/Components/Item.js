import React from 'react';

class Item extends React.Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    

    render(){
        const{ id,title} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
const btnStyle ={
    color:'white',
    backgroundColor:'red',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer',
    margin: '0px 15px',

}

export default Item