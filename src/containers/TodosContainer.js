// Creating a container component that works with the re-deux
import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { TodoActions } from 'store/actionCreators';

class TodosContainer extends Component {
  handleChange = (e) => {
    // Change input value
    TodoActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    //Add Item
    const { input } = this.props;
    TodoActions.insert(input); // Add and
    TodoActions.changeInput(''); // Empty existing input values
  }

  handleToggle = (id) => {
    // Toggle id
    TodoActions.toggle(id);
  }

  handleRemove = (id) => {
    // Remove item
    TodoActions.remove(id);
  }

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  // state unstructured
  ({ todo }) => ({
    input: todo.input,
    todos: todo.todos
  })
)(TodosContainer);
