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
      <div style={{
        marginBottom: "10px",
        marginTop: "10px",
      }}>
        <div className="input-group col-md-4">
          <input ref={(node) => input = node}
            className="form-control"
            type="text"
            placeholder="Input todo item..."
            onKeyPress={(e)=>{
              if (e.key === "Enter") {
                this.addTodo(e, input);
              }
            }}/>
          <span className="input-group-btn">
            <button type="button"
              className="btn btn-default"
              onClick={(e)=> this.addTodo(e, input)}>
              Ta Da!
            </button>
          </span>
        </div>
      </div>
    );
  }
}
