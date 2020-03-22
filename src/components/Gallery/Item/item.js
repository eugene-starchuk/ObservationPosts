// import classnames from 'classnames';
import PropTypes from 'prop-types';
// import useGlobal from '../../../hooks/store';

const Item = (props) => {
    const { source, index } = props;
    return (
        <div
            className='itemContainer'
        >
            <div
                className='imageContainer'
            >
                <img
                    index={index}
                    src={source}
                    alt='eror'
                    className='Img'
                />
            </div>
        </div>
    );
};

Item.propTypes = {
    source: PropTypes.string,
    index: PropTypes.number,
};

Item.defaultProps = {
    source: '',
    index: 1,
};


export default Item;
