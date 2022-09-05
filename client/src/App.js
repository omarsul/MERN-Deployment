import { Route, Switch , BrowserRouter, useHistory} from 'react-router-dom';
import './App.css';
import ListPets from './components/listPets';
import CreatePet from './components/createPet';
import Update from './components/editPet';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ListPets/>
              <hr/>
            </Route>
            <Route exact path="/pet/new">
              <CreatePet/>
            </Route>
            <Route exact path="/pet/edit/:id">
              <Update/>
            </Route>
            <Route exact path="/pet/detail/:id">
              <Details/>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
