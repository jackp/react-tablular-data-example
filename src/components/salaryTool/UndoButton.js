/**
 * Undo Button
 */
import React from "react";
import Reflux from "reflux";

import salaryActions from "actions/salaryActions";
import salaryHistoryStore from "stores/salaryHistoryStore";

const UndoButton = React.createClass({
  mixins: [Reflux.connect(salaryHistoryStore, "salaryHistory")],
  propTypes: {
    pid: React.PropTypes.number.isRequired
  },
  _undo() {
    salaryActions.undoSalaryChange(this.props.pid);
  },
  render() {
    return (
      <button onClick={this._undo}>Undo</button>
    );
  }
});

export default UndoButton;
