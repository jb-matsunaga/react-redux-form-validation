/*構文
import * as name from "module-name";
name
インポートされた値を受け取るオブジェクト名
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import
*/
import * as ActionTypes from '../constants/ActionTypes';
export function modalOpen(dec) {
    return {
        type: ActionTypes.MODAL_OPEN,
        show: dec
    }
}
