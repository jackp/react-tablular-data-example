/**
 * playerStore
 * Application state regarding player information and salaries
 */

import Reflux from "reflux";
import request from "superagent";

import playerActions from "actions/playerActions";
import salaryActions from "actions/salaryActions";

const playerStore = Reflux.createStore({
  // Listen to all playerActions
  listenables: playerActions,

  onGetPlayers() {
    let json = require("../data/players.json");

    this.trigger(json.playerList);

    let currentSalaries = {};

    json.playerList.forEach( (player) => {
      currentSalaries[player.pid] = player.s;
    });

    salaryActions.updatePastSalaries(currentSalaries);
    // BUG: Endpoint provided does not have correct CORS configuration, therefore
    // cannot access
    // request
    //   .get("https://www.draftkings.com/lineup/getavailableplayers?draftGroupId=6260")
    //   .end( (err, res) => {
    //     if (err) {
    //       // TODO: Better error handling
    //       console.log(err);
    //     } else {
    //       this.trigger(res.body.playerList);
    //     }
    //   });
  }
});

export default playerStore;
