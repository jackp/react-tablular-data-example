/**
 * playerStore
 * Application state regarding player information and salaries
 */

import Reflux from "reflux";
import request from "superagent";

import playerActions from "actions/playerActions";

const playerStore = Reflux.createStore({
  // Listen to all playerActions
  listenables: playerActions,

  onGetPlayers() {
    // TODO: Api call
    let testData = [
      {
        pid: 1,
        fn: "Jack",
        ln: "Parker",
        s: 4000
      },
      {
        pid: 2,
        fn: "Bob",
        ln: "Barker",
        s: 2000
      }
    ];

    setTimeout( () => {
      this.trigger(testData);
    }, 1000);
  }
});

export default playerStore;
