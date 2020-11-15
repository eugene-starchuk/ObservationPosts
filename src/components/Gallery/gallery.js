/* eslint-disable react/jsx-indent-props */
// import img1 from '../../public/img/IMG_7572.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Item from './Item/item';
import photos from '../../meta/photos';
import useGlobal from '../../hooks/store';

const Gallery = () => {
    const [store, actions] = useGlobal();
    // const [curImg, setCurImg] = useState();
    const backClick = () => {
        if (store.selectedImage >= 1) {
            actions.setSelectedImage(store.selectedImage - 1);
        }
    };
    const forwardClick = () => {
        if (store.selectedImage < photos.length - 1) {
            actions.setSelectedImage(store.selectedImage + 1);
        }
    };
    return (
        <div className='gallery'>
            <div className='viewer'>
                <div
                    role='presentation'
                    onClick={backClick}
                >
                    <ArrowBackIosIcon />
                </div>
                <div className='black'>
                    <div className='viewerImgContainer'>
                        <img
                            selectedimage={store.selectedImage}
                            src={photos[store.selectedImage]}
                            alt='eror'
                            className='viewerImg'
                        />
                    </div>
                </div>
                <div
                    role='presentation'
                    onClick={forwardClick}
                >
                    <ArrowForwardIosIcon />
                </div>
            </div>
            <div className='itemsWindow'>
                {
                    _.map(photos, (photo, i) => (
                        <Item
                            // id={i}
                            index={i}
                            key={i}
                            source={photo}
                        />
                    ))
                }
            </div>
        </div>
    );
};

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
