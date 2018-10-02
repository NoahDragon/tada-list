import React from "react";
import Footer from "../components/footer";
import AddTodo from "../components/addTodo";
import VisibleTodoList from "./visibleTodoList";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

/**
 * App entry point.
 */
export class App extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const {todos, todoActions} = this.props;

    return (
      <div className="col mx-auto">
        <AddTodo actions={todoActions} />
        <VisibleTodoList actions={todoActions} todos={todos}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  todoActions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
