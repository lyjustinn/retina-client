import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <div>main page</div>}/>
                <Route exact path="/explore" component={() => <div>explore</div>}/>
                <Route exact path="/search/:query" component={() => <div>search</div>}/>
                <Route exact path="/collection/:id" component={() => <div>collection</div>}/>
                <Route exact path="/photo/:id" component={() => <div>photo</div>} />
                <Route exact path="/user/:id" component={() => <div>user profile</div>}/>

                {/* Routes that require auth, redirect to 404 if invalid */}
                <Route exact path="/edit/profile/:id" component={() => <div>edit profile</div>}/>
                <Route exact path="/upload/photo" component={() => <div>upload photo</div>}/>
                <Route exact path="/edit/photo/:id" component={() => <div>edit photo</div>}/>
                <Route path="/" component={() => <div>404</div>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;