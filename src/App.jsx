import './App.css';

import { BrowserRouter, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';

import Routes from './routes/Routes';

function App() { 

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <ScrollContext>
          <Switch>
            <Routes/>
          </Switch>
        </ScrollContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
