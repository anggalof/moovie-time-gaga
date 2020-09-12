import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

const AppRoutes = (
  <Switch>
  	<Route exact path="/" component={Home} />
    <Route path="/movie/view/:id-:title" component={MovieDetail} />
  </Switch>
);

export default AppRoutes;
