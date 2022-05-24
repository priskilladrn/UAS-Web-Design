import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import Info from './info';
import NewsList from './newsList';
import General from './navBar/general'
import Business from  './navBar/business';
import Entertainment from './navBar/entertainment';
import Sport from './navBar/sport';
import Health from './navBar/health';
import Science from './navBar/science';
import Technology from './navBar/technology';


ReactDOM.render(
    (<Router>
        <Route exact path="/" component={App} />
        <Route path="/search/:keyword" component={NewsList} />
        <Route path = "/Info" component={Info} />
        <Route path="/General" component={General} />
        <Route path="/Business" component={Business} />
        <Route path="/Entertainment" component={Entertainment} />
        <Route path="/Health" component={Health} />
        <Route path="/Sport" component={Sport} />
        <Route path="/Science" component={Science} />
        <Route path="/Technology" component={Technology} />
    </Router>),
  document.getElementById('app')
);