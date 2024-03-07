import React, { useState, useEffect } from 'react';
import { Button,Card,CardBody,CardSubtitle,CardText,CardTitle,Input,Nav,NavItem,NavLink} from 'reactstrap';
import './products.module.css'


function Products(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState('');
  const [sortProducts, setSortProducts] = useState('');
  const [category, setCategory] = useState('');

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilterData = () => {
    let filteredData = products.filter(
      (v) =>
        v.title.toLowerCase().includes(filteredProducts) ||
        v.description.toLowerCase().includes(filteredProducts) ||
        v.price.toString().includes(filteredProducts)
    );

    const sortedData = filteredData.sort((a, b) => {
      if (sortProducts === 'hl') {
        return b.price - a.price;
      } else if (sortProducts === 'lh') {
        return a.price - b.price;
      } else if (sortProducts === 'az') {
        return a.title.localeCompare(b.title);
      } else if (sortProducts === 'za') {
        return b.title.localeCompare(a.title);
      }
    });

    if (category) {
      filteredData = sortedData.filter((v) => v.category === category);
      console.log(filteredData);
    }

    return filteredData;
  };

  const filteredData = handleFilterData();

  return (
    <div className='container mt-5'>
      <Input
        type='text'
        placeholder='Search'
        name='search'
        onChange={(event) => setFilteredProducts(event.target.value)}
        className='form-control mb-4'
      />
      <select onChange={(event) => setSortProducts(event.target.value)}>
        <option value='0'>--Select--</option>
        <option value='hl'>High to Low</option>
        <option value='lh'>Low to High</option>
        <option value='az'>Products: A to Z</option>
        <option value='za'>Products: Z to A</option>
      </select>
      <Nav>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory('electronics')}>Electronics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory('jewelery')}>Jewelry</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory("men's clothing")}>Men's clothing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory("women's clothing")}>Women's clothing</NavLink>
        </NavItem>
      </Nav>

      <h1 className='text-center mb-4'>Products</h1>
      <div className='row'>
        {filteredData.map((v, index) => (
          <div className='col-md-4 mb-3' key={v.id}>
            <Card className='h-100 product-card'>
              <img
                style={{ height: '300px', width: '100%' }}
                alt='Sample'
                className='card-img-top'
                src={v.image}
              />

              <CardBody className='d-flex flex-column'>
                <CardTitle tag='h5' className='mb-2'>
                  {v.title.length > 20 ? v.title.substring(0, 20) + '...' : v.title}
                </CardTitle>
                <CardSubtitle className='mb-2 text-muted' tag='h6'>
                  ${v.price}
                </CardSubtitle>
                <CardText>
                  {v.description.length > 50 ? v.description.substring(0, 100) + '...' : v.description}
                </CardText>
                <Button color='primary' className='mt-auto'>
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
