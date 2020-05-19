import { actionTypes } from "./actions";
export const exampleInitialState = {
  shipment: {},
  shipments: [],
  bays: 0,
  error: "",
  success: "",
};
import update from "react-addons-update";

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHIPMENTS_ALL_SUCCESS:
      return {
        ...state,
        ...{ shipments: action.data },
      };

    case actionTypes.LOAD_SHIPMENT_RECORD_SUCCESS: {
      return update(state, {
        shipment: {
          $set: action.data,
        },
      });
    }

    case actionTypes.UPDATE_SHIPMENT: {
      return update(state, {
        shipment: {
          boxes: {
            $set: action.payload.value,
          },
        },
      });
    }

    case actionTypes.FAIL: {
      return update(state, {
        error: {
          $set: action.message,
        },
      });
    }

    case actionTypes.SUCCESS: {
      return update(state, {
        message: {
          $set: action.message,
        },
      });
    }

    // case actionTypes.UPDATE_SHIPMENT: {
    //   const newData = update(shipment, {
    //     [action.payload.field]: {
    //       $merge: action.payload.value,
    //     },
    //   });

    //   return {
    //     ...state,
    //     ...{
    //       shipment: newData,
    //     },
    //   };
    // }

    default:
      return state;
  }
}

export default reducer;
