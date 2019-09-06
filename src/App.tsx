import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import {MyContext} from './context';

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
  const [hola, setHola] = React.useState("hola claudio");
  return (
    
    <MyContext.Provider value={{saludo:hola, setSaludo: ()=>setHola("chao Claudio")}}>

      <div className="App">
        <GlobalStyle />
        <MyRoutes />
      </div>
    </MyContext.Provider>  
    
  );
}

export default App;
