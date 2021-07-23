import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from '../../pages/landing/LandingPage';
import LoginPage from '../../pages/login/LoginPage';
import ImageUploadPage from '../../pages/image/imageUpload/ImageUploadPage';
import SignupPage from '../../pages/signup/SignupPage';
import ImageDetailsPage from '../../pages/image/imageDetails/ImageDetailsPage';
import SearchPage from '../../pages/image/search/SearchPage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/explore" component={() => <div>explore</div>}/>
                <Route exact path="/search/:query" component={SearchPage}/>
                <Route exact path="/collection/:id" component={() => <div>collection</div>}/>
                <Route exact path="/image/:id" component={ImageDetailsPage} />
                <Route exact path="/user/:id" component={() => <div>user profile</div>}/>
                <Route exact path="/signup" component={SignupPage}/>
                <Route exact path="/login" component={LoginPage}/>

                {/* Routes that require auth, redirect to 404 if invalid */}
                <Route exact path="/edit/profile/:id" component={() => <div>edit profile</div>}/>
                <Route exact path="/upload/image" component={ImageUploadPage}/>
                <Route exact path="/edit/image/:id" component={() => <div>edit photo</div>}/>
                <Route path="/" component={() => <div>404</div>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;