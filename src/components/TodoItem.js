import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            cursor: 'pointer',
            background: this.props.todo.completed ?
            'green' : '#f4f4f4',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;  //destructuring...
        return (
            <div style={this.getStyle()}>
                {/*<p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>  
                {' '}
                { title }
                </p>*/}
                <p><Checkbox value="test" inputProps={{ 'aria-label': 'Checkbox 1' }} onChange={this.props.markComplete.bind(this, id)}></Checkbox>{ this.props.todo.title }</p>
            </div>
        )
    }
}


// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default TodoItem
