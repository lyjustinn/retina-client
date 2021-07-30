import React, { useState, useEffect } from 'react';
import { match, RouteComponentProps } from 'react-router';
import Layout from '../../components/layout/Layout';
import ProfileDetails from '../../components/user/ProfileDetails';
import { User } from '../../types/userTypes';
import { getUser } from '../../util/user/userService';

interface MatchParams {
    id: string
}

interface UserProfilePageProps extends RouteComponentProps<MatchParams> {
    match : match<MatchParams>
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({match}) => {

    return <Layout param="" user={null}>
        <>
        <ProfileDetails id={+match.params.id}/>
        </>
    </Layout>;
}
export default UserProfilePage;