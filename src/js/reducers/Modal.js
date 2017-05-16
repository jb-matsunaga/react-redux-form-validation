import * as ActionTypes from '../constants/ActionTypes';

export default function modalReducer(state = {show: false}, action) {
    switch (action.type) {
        // action.showにactionで作成したshowが入っているのでstate.showに渡す
        case ActionTypes.MODAL_OPEN:
            return {show: action.show}
        default:
            return state
    }
}
