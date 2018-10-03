import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";

/**
 * The todo list component.
 */
export default class TodoList extends React.Component {
  /**
   * Class constructor.
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }
  /**
   * Override the method after component mount.
   */
  componentDidMount() {
    this.props.actions.retrieve();
  }
  /**
   * Action toggle item completed or not.
   * @param {int} id
   */
  toggleCompleted(id) {
    this.props.actions.toggleTodo(id);
  }
  /**
   * Override the render method.
   * @return {JSX} To-Do list.
   */
  render() {
    let maxId = this.props.maxId;
    const todoItems = this.props.todos.map((item) =>
      <Todo maxId={maxId} key={item.id}
        {...item}
        toggle={this.toggleCompleted.bind(this, item.id)}/>
    );

    return (
      <div>
        <ul className="todoList col-md-6 list-group">
          {todoItems}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

