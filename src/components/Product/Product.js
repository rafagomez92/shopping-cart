import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './Product.scss';

function Product(props) {
    const { name, image, extraInfo, price } = props.product;    
    return(
        <Col xs={3} md={4} sm={8} className="product">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{extraInfo}</Card.Text>
                    <Card.Text>{price} $ / Unidad</Card.Text>
                    <Button>Añandir al carrito</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default Product;

