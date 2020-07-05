import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';

function Products(props) {    
    const { products: { 
            result, 
            loading, 
            error 
        }
    } = props;    
        


    return(
        <Container>
            <Row>
                {loading || !result 
                    ? <Loading />
                    : result.map((product, idx) => (                        
                        <Product product={product} key={idx}/>                        
                    ))
                }
            </Row>    
        </Container>
    )
}

export default Products;