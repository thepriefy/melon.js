import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Materialize } from 'meteor/poetic:materialize-scss';
import { FlowRouter } from 'meteor/kadira:flow-router';
// Collections
import { CoreContracts } from '/imports/api/coreContracts';
// Smart contracts
import Core from '/imports/lib/assets/contracts/Core.sol.js';
// Corresponding html file
import './portfolio_overview.html';


Template.portfolio_overview.onCreated(() => {
  Meteor.subscribe('coreContracts');
  // TODO send command to server to update current coreContract
});


Template.portfolio_overview.helpers({
  getPortfolioDoc() {
    const address = FlowRouter.getParam('address');
    const doc = CoreContracts.findOne({ address });
    return (doc === undefined || address === undefined) ? '' : doc;
  },
});


Template.portfolio_overview.onRendered(() => {});


Template.portfolio_overview.events({
  'click .delete': () => {
    const address = FlowRouter.getParam('address');
    const doc = CoreContracts.findOne({ address });
    if ((doc === undefined || address === undefined)) {
      return false;
    }
    Meteor.call('coreContracts.remove', doc._id);
    Materialize.toast('Portfolio deleted!', 4000, 'blue');
    return true;
  },
});
