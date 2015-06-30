/**
 * salaryActions
 * Actions for storing changes
 */

import Reflux from "reflux";

const salaryActions = Reflux.createActions([
  "addChange",
  "saveChanges",
  "updatePastSalaries",
  "undoSalaryChange"
]);

export default salaryActions;
