// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import TheatersIcon from '@material-ui/icons/Theaters';
import useGlobal from '../../../hooks/store';

const Content = () => {
    const [, actions] = useGlobal();
    const handleClick = () => {
        actions.setSelectedMenuIndex(1);
    };
    return (
        <div className='Content'>
            <div className='recWhiteOne'>
                <div className='recBlackOne'>
                    <div className='recWhiteTwo'>
                        <div className='recBlackTwo'>
                            <div className='recWhiteThree'>
                                <div className='recBlackThree'>
                                    <div className='container'>
                                        <TheatersIcon
                                            // eslint-disable-next-line react/jsx-indent-props
                                            role='presentation'
                                            // eslint-disable-next-line react/jsx-indent-props
                                            onClick={handleClick}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
