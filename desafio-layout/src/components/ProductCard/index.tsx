import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { ReactComponent as ImageProductCar } from '../../assets/images/car-card1.svg';

const ProductCard = () => {
    return (
        <div className='card-product'>
            <div className='card-image'>
                <ImageProductCar></ImageProductCar>
            </div>
            <div className='card-product-name'>
                <h5>Audi Supra TT</h5>
            </div>
            <div className='card-description'>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h6>
            </div>
            <div className='card-button'>
                <button>
                    <h6>comprar</h6>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
