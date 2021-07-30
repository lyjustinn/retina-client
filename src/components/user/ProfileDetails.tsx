import React, { useState, useEffect } from 'react';
import { UserProfile } from '../../types/userTypes';
import { getUserProfile } from '../../util/user/userService';
import Container from 'react-bootstrap/Container';
import ImageGrid from '../image/ImageGrid';
import ImageGridItem from '../image/ImageGridItem';

interface ProfileDetailsProps {
    id : number
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({id}) => {
    const [profile, setProfile] = useState<UserProfile | null>(null);

    const renderGrid = () => {
        // if (profile && profile.images.length > 0) 
        // return (
        //     <>
        //         <h5 className="retina-text-dark my-4">Photos posted by {profile.name}</h5>
        //         <ImageGrid GridItem={ImageGridItem} images={profile.images} num={4}/>
        //     </>
        // );

        return (
            <>
                <h5>This user has not posted any photos, come back again later!</h5>
            </>
        );
    }
    
    useEffect(()=> {
        getUserProfile(id)
        .then( res => setProfile(res))
        .catch(e => console.error(e));
    },[id])

    return <Container className="p-4">
        {
            profile ? 
            <div className="d-flex flex-column align-items-center p-4">
                <h3 className="my-4 retina-text-dark">{profile.name}</h3>
                <p className="retina-text-light-gray">{profile.bio}</p>
            </div>
            : <></>
        }
        <div>
            {renderGrid()}
        </div>
    </Container>;
}
export default ProfileDetails;