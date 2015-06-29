/**
 * SalaryTool
 * Displays player information and allows editing of salaries
 */

import React from "react";
import Reflux from "reflux";
import { Table, Column } from "fixed-data-table";
import { CircularProgress } from "material-ui";

import playerActions from "actions/playerActions";
import playerStore from "stores/playerStore";

require("fixed-data-table/dist/fixed-data-table.css");
require("./salaryTool.scss");

const SalaryTool = React.createClass({
  mixins: [Reflux.connect(playerStore, "players")],
  componentWillMount() {
    playerActions.getPlayers();
  },
  getInitialState() {
    return {
      players: []
    };
  },
  _rowGetter(index) {
    return this.state.players[index];
  },
  render() {
    let component;

    if (this.state.players.length) {
      component = (
        <Table
          rowHeight={50}
          headerHeight={50}
          rowGetter={this._rowGetter}
          rowsCount={this.state.players.length}
          width={1000}
          height={600}
        >
          <Column
            dataKey="pid"
            label="Player ID"
            width={100}
          />
          <Column
            dataKey="ln"
            label="Last Name"
            width={200}
          />
          <Column
            dataKey="fn"
            label="First Name"
            width={200}
          />
          <Column
            dataKey="s"
            label="Salary"
            width={200}
          />
        </Table>
      );
    } else {
      component = <CircularProgress className="loading-icon" mode="indeterminate" size={2} />;
    }

    return (
      <section id="salary-tool">
        { component }
      </section>
    );
  }
});

export default SalaryTool;
