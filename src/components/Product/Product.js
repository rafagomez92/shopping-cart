import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './Product.scss';

function Product(props) {
    const { id, name, image, extraInfo, price } = props.product;    
    const { addProductCart } = props;
    return(
        <Col xs={3} md={4} sm={8} className="product">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{extraInfo}</Card.Text>
                    <Card.Text>{price} $ / Unidad</Card.Text>
                    <Button onClick={() => addProductCart(id, name)}>Añandir al carrito</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Product;

