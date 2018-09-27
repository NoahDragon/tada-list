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

    this.state ={
      datetime: null,
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
  /**
   * Set datetime when mouse over the item.
   */
  mouseOver() {
    this.setState({
      datetime: this.props.amendDate || this.props.createDate,
    });
  }
  /**
   * Clear datetime when mouse out the item.
   */
  mouseOut() {
    this.setState({
      datetime: null,
    });
  }
  /**
   * @return {JSX}
   */
  render() {
    let dt;
    let stateDateTime = this.state.datetime;

    if (stateDateTime) {
      dt = <span
        style = {{
          color: "#C0C0C0",
        }}
      >{stateDateTime}</span>;
    } else {
      dt = "";
    }

    return (
      <li
        onClick = {this.props.toggle}
        style = { {
          textDecoration: this.props.completed ? "line-through" : "none",
        }}
        onMouseOver = {() => this.mouseOver()}
        onMouseOut = {() => this.mouseOut()}
      >
        {this.props.text} {dt}
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
