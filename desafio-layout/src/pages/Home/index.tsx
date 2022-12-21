import './styles.css';
import { ReactComponent as ImageCar } from '../../assets/images/car-header1.svg';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-card'>
                <div className='home-card-container'>
                    <h4>O carro perfeito para você</h4>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
                <div className='image-home-container'>
                    <ImageCar></ImageCar>
                </div>
            </div>
            <div className='home-button'>
                <NavLink to="/products" className='btn-catalog'>
                    VER CATÁLOGO
                </NavLink>
                <h5>
                    Comece agora a navegar
                </h5>
            </div>
        </div>
    );
};

export default Home;
