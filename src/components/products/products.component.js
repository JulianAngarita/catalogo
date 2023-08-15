import react from 'react';
import { Card, Image } from 'semantic-ui-react';

const ProductsComponent = ({
    name,
    image,
    price,
    description
}) => {

    return (
        <Card>
            <Image src={image} wrapped ui={false}/>
            <Card.Header> {name} </Card.Header>
            <Card.Meta> $ {price}  </Card.Meta>
            <Card.Description> {description} </Card.Description>
        </Card>
    )
}

export default ProductsComponent;