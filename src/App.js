import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import ToDo from './components/ToDoPage/ToDo';
import Swapi from './components/Swapi/Swapi';
import ErrorPage from './components/ErrorPage/ErrorPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/todo" component={ToDo} />
            <Route path="/swapi" component={Swapi} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
