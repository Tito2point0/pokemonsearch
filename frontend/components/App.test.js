import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import App from './App';
import '@testing-library/jest-dom';

// Create a mock Redux store for testing
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

test('renders the App component wrapped in Provider', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  it('renders the App component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Pokemon Search/i)).toBeInTheDocument();
  }
    
});