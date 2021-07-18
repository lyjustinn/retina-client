import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <div>main page</div>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;