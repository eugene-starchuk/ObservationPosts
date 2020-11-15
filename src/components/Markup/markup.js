import '../../sass/main.sass';
import Content from './Content/content';
import useGlobal from '../../hooks/store';
import Gallery from '../Gallery/gallery';


const Markup = () => {
    const [store] = useGlobal();
    return (
        <div className='markup'>
            {store.selectedMenuIndex === 0 && <Content />}
            {store.selectedMenuIndex === 1 && <Gallery />}
            {/* <Gallery /> */}
        </div>
    );
};

Markup.propTypes = {
    // index: PropTypes.number.isRequired,
};

Markup.defaultProps = {
};


export default Markup;
