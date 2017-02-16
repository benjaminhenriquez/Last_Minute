import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import ReduxPromise from 'redux-promise';
export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(ReduxPromise),
    // maybe use promises here?
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
      module.hot.accept('../reducers/index', () => {
        const nextReducer = require('../reducers/index');
      // might just be reducers instead of rootReducer?
        store.replaceReducer(nextReducer);
      })
    }

    return store
}
