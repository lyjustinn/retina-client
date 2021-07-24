import React, { useState, useEffect } from 'react';
import Layout from '../../../components/layout/Layout';
import UserEditForm from '../../../components/user/edit/UserEditForm';
import { User } from '../../../types/userTypes';
import { getCurrentUser } from '../../../util/user/userService';

interface UserEditPageProps {

}

const UserEditPage: React.FC<UserEditPageProps> = ({}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getCurrentUser()
        .then( res => setUser(res))
        .catch( e => console.error(e));
    },[])
    
    return <Layout param="asd" user={null}>
        { user ? <UserEditForm user={user}/> : <>wu oh</>}
    </Layout>;
}
export default UserEditPage;