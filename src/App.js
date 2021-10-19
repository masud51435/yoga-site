import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import Header from './pages/shared/header/Header';
import Services from './pages/services/Services';
import Trainer from './pages/trainer/Trainer';
import Pack from './pages/pack/Pack';
import Footer from './pages/footer/Footer';
import Gallery from './pages/gallery/Gallery';
import AboutUs from './pages/aboutUs/AboutUs';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signUp/SignUp';
import ServiceItem from './pages/service-item/ServiceItem';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/privateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceitem/:serviceId">
              <ServiceItem></ServiceItem>
            </PrivateRoute>
            <Route path="/trainer">
              <Trainer></Trainer>
            </Route>
            <Route path="/pack">
              <Pack></Pack>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
