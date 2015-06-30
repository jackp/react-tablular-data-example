/**
 * salaryStore
 * Application state regarding salaries
 */

import Reflux from "reflux";
import assign from "object-assign";

import salaryActions from "actions/salaryActions";

const salaryStore = Reflux.createStore({
  // Listen to all salaryActions
  listenables: salaryActions,

  changes: {},
  currentSalaries: {},
  onAddChange(change) {
    this.changes[change.pid] = change.s;
    this.trigger(this.changes);
  },
  onSaveChanges() {
    let parsedChanges = [];
    for (var id in this.changes) {
      parsedChanges.push({
        pid: id,
        s: this.changes[id]
      });
    }

    console.log(parsedChanges);
    this.changes = {};
    this.trigger(this.changes);
  },
  onUpdateCurrentSalaries(changes) {
    this.currentSalaries = assign(this.currentSalaries, changes);
  }
});

export default salaryStore;
