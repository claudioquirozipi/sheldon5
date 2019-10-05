import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

//Redux
import store from './redux/store';
import { Provider } from 'react-redux';

//Components
import MyRoutes from './routes';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <MyRoutes />
      </div>
    </Provider>   
  );
}

export default App;
