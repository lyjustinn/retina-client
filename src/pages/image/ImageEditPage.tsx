import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { match, RouteComponentProps, useHistory } from 'react-router';
import ImageEditForm from '../../components/image/ImageEditForm';
import { CurrentUserContext } from '../../components/layout/CurrentUser';
import Layout from '../../components/layout/Layout';
import { Image } from '../../types/imageTypes';
import { getImage } from '../../util/image/imageService';

interface MatchParam {
    id : string
}

interface ImageEditPageProps extends RouteComponentProps<MatchParam>{
    match : match<MatchParam>
}

const ImageEditPage: React.FC<ImageEditPageProps> = ({match}) => {
    const [image, setImage] = useState<Image | null>(null);

    const {currentUser} = useContext(CurrentUserContext);
    const history = useHistory();

    useEffect(() => {
        async function check() {
            try {
                const image = await getImage(+match.params.id);

                if (currentUser && currentUser.id !== image.owner.id) history.push("/404")
                else setImage(image);
            } catch (e) {
                history.push("/404")
            }
        }  

        check();
    },[currentUser, match.params.id, history])

    return <Layout param="" user={null}>
        { image ? 
        <div>
            <div className="retina-bg-dark-gray d-flex justify-content-center p-4">
                {
                    image ? 
                    <img className="image-detail-img-small" alt={"retina-image-"+image.id} src={`${process.env.REACT_APP_CDN_URL ?? ""}/${image.resourceName}`}></img>
                    : <div>skeleton</div>
                }
            </div>
            <ImageEditForm image={image}/>
        </div> : <></>}
    </Layout>;
}
export default ImageEditPage;