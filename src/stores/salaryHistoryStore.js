/**
 * salaryHistoryStore
 * Application state regarding salaries
 */

import Reflux from "reflux";
import assign from "object-assign";

import salaryActions from "actions/salaryActions";

const salaryHistoryStore = Reflux.createStore({
  listenables: salaryActions,
  pastSalaries: {},
  onUndoSalaryChange(pid) {
    this.trigger(this.pastSalaries[pid]);
  },
  onUpdatePastSalaries(changes) {
    this.pastSalaries = assign(this.pastSalaries, changes);
  }
});

export default salaryHistoryStore;
