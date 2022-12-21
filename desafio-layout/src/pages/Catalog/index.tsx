import ProductCard from '../../components/ProductCard';
import './styles.css';


const Catalog = () => {
    return (
        <div className='catalog-container'>
            <div className='search-container'>
                <form action="newSearch" className='form-container'>
                    <div className='input-container'>
                        <label htmlFor="search"></label>
                        <input type="text" id='search' name='search' placeholder='Digite sua busca' />
                    </div>
                
                    <div className='btn-search'>
                        <button type='submit'><h6>BUSCAR</h6></button>
                    </div>
                </form>
            </div>

            <div className='container my-4'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3'>
                        <ProductCard></ProductCard>
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3'>
                        <ProductCard></ProductCard>
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3'>
                        <ProductCard></ProductCard>
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3'>
                        <ProductCard></ProductCard>
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3'>
                        <ProductCard></ProductCard>
                    </div>
                </div>


                
            </div>
        </div>
    );
};

export default Catalog;