import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Redirect from '../pages/Redirect'
import Stats from '../pages/Stats'
import NotFound from '../pages/NotFound'


// pitu -> Home
// pitu/:code -> Redirect
// pitu/:code/stats -> Stats

function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:code" component={Redirect} />
            <Route exact path="/:code/stats" component={Stats} />
            <Route exact path="/*" component={NotFound} />
         </Switch>
      </BrowserRouter>
   )
}

export default Routes