// @flow
import contract from "truffle-contract";
import ParticipationJson from "@melonproject/protocol/build/contracts/ParticipationOpen.json";

import setup from "../../utils/setup";

/**
 * Get deployed participation contract instance
 */
const getParticipationContract = async () => {
  const Participation = contract(ParticipationJson);
  Participation.setProvider(setup.currentProvider);
  return Participation.deployed();
};

export default getParticipationContract;
