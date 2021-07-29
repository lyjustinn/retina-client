import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from '../../pages/landing/LandingPage';
import LoginPage from '../../pages/login/LoginPage';
import ImageUploadPage from '../../pages/image/ImageUploadPage';
import SignupPage from '../../pages/signup/SignupPage';
import ImageDetailsPage from '../../pages/image/ImageDetailsPage';
import SearchPage from '../../pages/image/SearchPage';
import ExplorePage from '../../pages/tag/explore/ExplorePage';
import TagDetailsPage from '../../pages/tag/tagDetails/TagDetailsPage';
import UserProfilePage from '../../pages/user/userProfile/UserProfilePage';
import UserEditPage from '../../pages/user/userEdit/UserEditPage';
import ImageEditPage from '../../pages/image/imageEdit/ImageEditPage';
import NoAuthRoute from './NoAuthRoute';
import AuthRoute from './AuthRoute';
import { getCurrentUser } from '../../util/user/userService';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/explore" component={ExplorePage}/>
                <Route exact path="/search/:query" component={SearchPage}/>
                <Route exact path="/tag/:id" component={TagDetailsPage}/>
                <Route exact path="/image/:id" component={ImageDetailsPage} />
                <Route exact path="/user/:id" component={UserProfilePage}/>
                <NoAuthRoute exact path="/signup" component={SignupPage}/>
                <NoAuthRoute exact path="/login" component={LoginPage}/>

                {/* Routes that require auth, redirect to 404 if invalid */}
                <Route exact path="/edit/user" component={UserEditPage}/>
                <AuthRoute exact path="/upload/image" component={ImageUploadPage} authorized={getCurrentUser}/>
                <Route exact path="/edit/image/:id" component={ImageEditPage}/>
                <Route path="/" component={() => <div>404</div>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;