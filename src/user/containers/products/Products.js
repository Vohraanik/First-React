import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input } from 'reactstrap';

function Products(props) {
    const [products, setProducts] = useState([]);
    const [fliterdProducts, setFilteredProducts] = useState(' ');
    const [sortProducts, setSortProducts] = useState("");


    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const handleFilterData = () => {
        let fData = products.filter((v) =>
            v.title.toLowerCase().includes(fliterdProducts) ||
            v.description.toLowerCase().includes(fliterdProducts) ||
            v.price.toString().includes(fliterdProducts)

        );

        const sort = fData.sort((a, b) => {
            if (sortProducts === "hl") {
                return b.price - a.price
            } else if (sortProducts === "lh") {
                return a.price - b.price
            } else if (sortProducts === "az") {
                return a.title.localeCompare(b.title)
            } else if (sortProducts === "za") {
                return b.title.localeCompare(a.title)
            }
        })

        return fData;
    }

    const filteredData = handleFilterData();

    return (
        <div className='container mt-5'>
            <input type="text"
                placeholder='Search'
                name='search'
                onChange={(event) => setFilteredProducts(event.target.value)}
                className="form-control mb-4"
            />
            <select onChange={(event) => setSortProducts(event.target.value)}>
                <option value="0">--Select--</option>
                <option value="hl">High to Low</option>
                <option value="lh">Low to High</option>
                <option value="az">Products: A to Z</option>
                <option value="za">Products: Z to A</option>
            </select>

            <h1 className='text-center mb-4'>Products</h1>
            <div className="row">
                {
                    filteredData.map((v, index) => (
                        <div className='col-md-4 mb-3' key={v.id}>
                            <Card className="h-100">
                                <img
                                    style={{ height: '300px', width: '100%' }}
                                    alt="Sample"
                                    className="card-img-top"
                                    src={v.image}
                                />

                                <CardBody className="d-flex flex-column">
                                    <CardTitle tag="h5" className="mb-2">
                                        {v.title.length > 20 ? v.title.substring(0, 20) + '...' : v.title}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        ${v.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.description.length > 50 ? v.description.substring(0, 100) + '...' : v.description}

                                    </CardText>
                                    <Button color="primary" className="mt-auto">Add to Cart</Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;
