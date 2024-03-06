import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Products(props) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const search = () => {
        const searchValue = document.getElementById('search').value.toLowerCase();

        const filteredData = products.filter(v => v.title.toLowerCase().includes(searchValue));

        setFilteredProducts(filteredData);
    }

    const toggleDescription = (index) => {
        console.log(index);
      const desc = index;

      if (desc.length < 50) {
        return desc;
      } else {
        return desc + '...';
      }
    }

    const tittleMore = (title) => {
        const word = title;
        if (word.length < 20) {
            return title;
        } else {
            return word + '...';
        }


    }
    return (
        <div className='container mt-5'>
            <input type="text" placeholder='Search' id='search' onChange={search} className="form-control mb-4" />
            <h1 className='text-center mb-4'>Products</h1>
            <div className="row">
                {filteredProducts.map((v, index) => (
                    <div className='col-md-4 mb-3' key={v.id}>
                        <Card className="h-100">
                            <img
                                style={{ height: '300px', width: '100%' }}
                                alt="Sample"
                                className="card-img-top"
                                src={v.image}
                            />
                            <CardBody className="d-flex flex-column">
                                <CardTitle tag="h5" className="mb-2">{tittleMore(v.title)}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">${v.price}</CardSubtitle>
                                <CardText>
                                   {toggleDescription(v.description)}
                                
                                </CardText>
                                <Button color="primary" className="mt-auto">Add to Cart</Button>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
