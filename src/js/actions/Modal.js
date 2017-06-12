/*
https://mae.chab.in/archives/2885
Actionは、アプリケーションからStoreにデータを送る情報のペイロード。
Storeにおける唯一の情報源。storeのdispatch()メソッドを使って、Storeに送られる。
*/

import * as ActionTypes from '../constants/ActionTypes';

export function modalOpen(dec) {
    return {
        type: ActionTypes.MODAL_OPEN,
        show: dec
    }
}

/*
▼ Actionの実装
Actionは、アクション名（Reducerで処理を判断するため）と状態の値を持った単なるオブジェクト。
作成したActionは、Action Creatorと呼ばれる関数の戻り値にセット。
今回は、SENDという名前（type属性)と、Viewから受け取ったvalueという値を持ったActionを作り、
さらにsend()関数を作って、その戻り値としてActionを返すようにする。
*/
// Action名の定義
const SEND = 'SEND';
// Action Creators
function send(value) {
    // Action
    return {
        type: SEND,
        value
    };
}
