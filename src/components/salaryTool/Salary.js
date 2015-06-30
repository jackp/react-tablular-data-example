/**
 * Salary
 * Edit and save player salary
 */
import React from "react";
import Reflux from "reflux";

import salaryActions from "actions/salaryActions";
import salaryStore from "stores/salaryStore";
import salaryHistoryStore from "stores/salaryHistoryStore";

const Salary = React.createClass({
  mixins: [Reflux.listenTo(salaryHistoryStore, "onUndoSalary")],
  propTypes: {
    pid: React.PropTypes.number.isRequired,
    salary: React.PropTypes.number.isRequired,
  },
  getInitialState() {
    return {
      editable: false,
      unsavedChanges: false,
      value: this.props.salary
    };
  },
  _setEditable() {
    this.setState({ editable: true });
  },
  _removeEditable() {
    this.setState({ editable :false });
  },
  _handleChange(event) {
    let value = event.target.value;

    this.setState({ unsavedChanges: true, value: value });

    salaryActions.addChange({
      pid: this.props.pid,
      s: value
    });
  },
  onUndoSalary(salary) {
    this.setState({ value: salary});
  },
  render() {
    let component;

    if (this.state.editable) {
      component = <input onBlur={this._removeEditable} onChange={this._handleChange} type="text" value={this.state.value} defaultValue={this.props.salary} />;
    } else {
      component = <span className="salary" onClick={this._setEditable}>${this.state.value}</span>;
    }

    return component;
  }
});

export default Salary;
