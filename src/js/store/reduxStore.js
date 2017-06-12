/*
createStore(reducer, [preloadedState], [enhancer])
ReduxのcreateStore()メソッドを使ってstoreを作成。
ActionとReducerをまとめるオブジェクト。
・アプリケーションの状態(state)を保持
・getState()メソッドを通して状態(state)へのアクセスを許可
・dispatch(action)メソッドを通して状態(state)の更新を許可
・subscribe(listener)メソッドを通してリスナーを登録
・subscribe(listerner)メソッドによって返された関数を通してリスナーの登録解除をハンドリング
*/
import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/RootReducer';

console.log('RootReducer = ' + RootReducer);

// export default function configureStore() {
//     const createStoreWithMiddleware = applyMiddleware()(createStore);
//     const store = createStoreWithMiddleware(RootReducer);
//     return store;
// }

/*
▼ Storeの実装
createStore()メソッドの引数として、作成したReducerと初期stateを渡すようにする。
*/
// 初期state変数(initialState)の作成
const initialState = {
    value: null
};
// createStore()メソッドを使ってStoreの作成
const store = createStore(RootReducer, initialState);
console.log('store = ' + store);
console.dir(store);
export default store;
