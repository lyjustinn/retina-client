import React from 'react';
import { match, Redirect, RouteComponentProps } from 'react-router';
import Layout from '../../components/layout/Layout';
import ProfileDetails from '../../components/user/ProfileDetails';

interface MatchParams {
    id: string
}

interface UserProfilePageProps extends RouteComponentProps<MatchParams> {
    match : match<MatchParams>
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({match}) => {

    return <Layout param="" user={null}>
        {
            isNaN(+match.params.id) ? <Redirect to="/404"/> : <ProfileDetails id={+match.params.id}/> 
        }
    </Layout>;
}
export default UserProfilePage;