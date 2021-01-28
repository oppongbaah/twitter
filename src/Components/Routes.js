import {Component, Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../styles/App.css';

// import components using the lazy method from the react library
const Dashboard = lazy(() => import('./Dashboard'));
const TweetView = lazy(() => import('./TweetView'));
const NewTweet = lazy(() => import('./NewTweet'));

class AppRoutes extends Component {

  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/tweet" component={TweetView}/>
            <Route exact path="/new-tweet" component={NewTweet}/>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default AppRoutes;
