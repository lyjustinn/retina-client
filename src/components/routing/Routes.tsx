import React, { useContext } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from '../../pages/landing/LandingPage';
import LoginPage from '../../pages/login/LoginPage';
import ImageUploadPage from '../../pages/image/ImageUploadPage';
import SignupPage from '../../pages/signup/SignupPage';
import ImageDetailsPage from '../../pages/image/ImageDetailsPage';
import SearchPage from '../../pages/image/SearchPage';
import ExplorePage from '../../pages/tag/ExplorePage';
import TagDetailsPage from '../../pages/tag/TagDetailsPage';
import UserProfilePage from '../../pages/user/UserProfilePage';
import UserEditPage from '../../pages/user/UserEditPage';
import ImageEditPage from '../../pages/image/ImageEditPage';
import NoAuthRoute from './NoAuthRoute';
import AuthRoute from './AuthRoute';
import CurrentUser from '../layout/CurrentUser';
import { CurrentUserContext } from '../layout/CurrentUser';

const Routes: React.FC = () => {

    const { updateUser } = useContext(CurrentUserContext);

    return (
        <CurrentUser>
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
                    {/* authorized is a function that throws an error if the user is not authorized */}
                    <AuthRoute exact path="/edit/user" component={UserEditPage} authorized={updateUser} />
                    <AuthRoute exact path="/upload/image" component={ImageUploadPage} authorized={updateUser}/>
                    <AuthRoute exact path="/edit/image/:id" component={ImageEditPage} authorized={updateUser}/>
                    <Route path="/" component={() => <div>404</div>}/>
                </Switch>
            </BrowserRouter>
        </CurrentUser>
    );
}

export default Routes;