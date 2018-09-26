import React from "react";
import PropTypes from "prop-types";

/**
 * Todo item component.
 */
export default class Todo extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }
  /**
   * @return {JSX}
   */
  render() {
    return (
      <li
        onClick = {this.props.toggle}
        style = { {
          textDecoration: this.props.completed ? "line-through" : "none",
        }}
      >
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
