/* eslint-disable react/jsx-indent-props */
import img1 from '../../public/img/IMG_7572.jpg';
import Item from './Item/item';
import photos from '../../meta/photos';

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='viewer'>
                <div className='black'>
                    <div className='viewerImgContainer'>
                        <img
                            src={img1}
                            alt='eror'
                            className='viewerImg'
                        />
                    </div>
                </div>
            </div>
            <div className='itemsWindow'>
                {
                    _.map(photos, (photo, i) => (
                        <Item
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
