/**
 * SalaryTool
 * Displays player information and allows editing of salaries
 */

import React from "react";
import Reflux from "reflux";
import classNames from "classnames";
import { Table, Tr, Td } from "reactable";
import { CircularProgress, FloatingActionButton } from "material-ui";

import Salary from "./Salary";
import UndoButton from "./UndoButton";
import playerActions from "actions/playerActions";
import playerStore from "stores/playerStore";
import salaryStore from "stores/salaryStore";
import salaryActions from "actions/salaryActions";

require("./salaryTool.scss");

const SalaryTool = React.createClass({
  mixins: [
    Reflux.connect(playerStore, "players"),
    Reflux.connect(salaryStore, "salaryChanges")
  ],
  componentWillMount() {
    playerActions.getPlayers();
  },
  getInitialState() {
    return {
      players: [],
      salaryChanges: {}
    };
  },
  _rowGetter(index) {
    return this.state.players[index];
  },
  render() {
    let component;

    if (this.state.players.length) {
      component = (
        <Table defaultSort={{column: "Name"}}>
          { this.state.players.map( (player) => {
              let rowClasses = classNames(
                { "injured": player.i },
                { "unsaved-changes": this.state.salaryChanges.hasOwnProperty(player.pid) }
              );

              return (
                <Tr key={player.pid} className={rowClasses}>
                  <Td column="Name" data={ `${player.ln}, ${player.fn}` } />
                  <Td column="Position" data={ player.pn } />
                  <Td column="Upcoming Game" data={ `${player.atabbr}@${player.htabbr}`} />
                  <Td column="Salary">
                    <Salary pid={ player.pid } salary={ player.s }/>
                  </Td>
                  <Td column="Undo"><UndoButton pid={ player.pid }/></Td>
                </Tr>
              );
            })
          }
        </Table>
      );
    } else {
      component = <CircularProgress className="loading-icon" mode="indeterminate" size={2} />;
    }

    return (
      <section id="salary-tool">
        <FloatingActionButton
          style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
          secondary={true}
          onClick={salaryActions.saveChanges}
        >
          Save
        </FloatingActionButton>
        { component }
      </section>
    );
  }
});

export default SalaryTool;
