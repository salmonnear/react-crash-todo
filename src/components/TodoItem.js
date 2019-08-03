import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // cursor: 'pointer',
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
                <p>
                    <Checkbox value="test" inputProps={{ 'aria-label': 'Checkbox 1' }} onChange={this.props.markComplete.bind(this, id)}></Checkbox>{ title }
                    <IconButton onClick={this.props.delTodo.bind(this, id)} aria-label="delete" style={btnStyle} size="small" color="secondary"><DeleteIcon fontSize="small" /></IconButton>
                </p>
            </div>
        )
    }
}


// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    float: 'right'
}

export default TodoItem
