import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer, { hasSeed } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setSeed } from './store/actions';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

// See: https://news.ycombinator.com/item?id=20522307

const store = createStore(rootReducer, composeWithDevTools());

if (!hasSeed(store.getState())) {
  store.dispatch(setSeed())
}

const rootElement = document.getElementById('root');
render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  rootElement
);
