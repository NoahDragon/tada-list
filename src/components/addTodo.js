import React from "react";

/**
 * Add todo item componnent
 */
export default class AddTodo extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  /**
   * Call addTodo action.
   * @param {Object} e event
   * @param {Text} input
   */
  addTodo(e, input) {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }

    this.props.actions.addTodo(input.value.trim());
    input.value = "";
  }

  /**
   * @return {JSX}
   */
  render() {
    let input;
    return (
      <div>
        <form onSubmit={(e) => this.addTodo(e, input)}>
          <input ref={(node) => input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
