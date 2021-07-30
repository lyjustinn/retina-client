import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import UserEditForm from '../../components/user/UserEditForm';
import { UserProfile } from '../../types/userTypes';
import { getCurrentUserProfile } from '../../util/user/userService';
import Container from 'react-bootstrap/Container';
import ImageGrid from '../../components/image/ImageGrid';
import ImageGridItem from '../../components/image/ImageGridItem';
import { Image } from '../../types/imageTypes';

interface UserEditPageProps {

}

const UserEditPage: React.FC<UserEditPageProps> = ({}) => {
    const [user, setUser] = useState<UserProfile | null>(null);

    useEffect(() => {
        getCurrentUserProfile()
        .then( res => setUser(res))
        .catch( e => console.error(e));
    },[])

    const GridItem = ({src, id, image}:{ src : string, id : string, image : Image}) => 
                    <ImageGridItem src={src} id={id} image={image} edit={true}/>
    
    return <Layout param="asd" user={null}>
        <Container>
            <div className="d-flex w-100 justify-content-center py-4 align-items-center">
                { user ? <UserEditForm user={user}/> : <></>}
            </div>
            <h5 className="my-2 mb-5">Edit your Images:</h5>
            { user ? <ImageGrid GridItem={GridItem} images={user.images} num={4}/> : <></>}
        </Container>
    </Layout>;
}
export default UserEditPage;