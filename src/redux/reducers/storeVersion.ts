import { constants } from "../../utils/Constants";

const initialState: {
  storeStructureVersion: number;
} = {
  storeStructureVersion: constants.store.storeStructureVersion,
};

export default function (state = initialState, action: any) {
  return state;
}
