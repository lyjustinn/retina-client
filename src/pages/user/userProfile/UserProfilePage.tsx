import React, { useState, useEffect } from 'react';
import { match, RouteComponentProps } from 'react-router';
import Layout from '../../../components/layout/Layout';
import ProfileHeader from '../../../components/user/profile/ProfileHeader';
import { User } from '../../../types/userTypes';
import { getUser } from '../../../util/user/userService';

interface MatchParams {
    id: string
}

interface UserProfilePageProps extends RouteComponentProps<MatchParams> {
    match : match<MatchParams>
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({match}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUser(+match.params.id)
        .then( res => setUser(res))
        .catch( e => console.error(e));
    },[match.params.id])

    return <Layout param="" user={null}>
        <>
        <ProfileHeader/>
        <div>{user?.name}</div>
        </>
    </Layout>;
}
export default UserProfilePage;