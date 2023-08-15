import React, { Fragment, useState } from "react";
import { 
    Button,
    Container,
    Grid,
    Header,
} from "semantic-ui-react";
import ProductsComponent from "../components/products/products.component";
import CreateProductModal from "../components/modals/create-product.modal";

const Catalogue = () => {


    const products = [
        {
            name: 'Arroz con pollo',
            price: '12000',
            description: 'Arroz con pollo no tan muñequeburro',
            image: 'https://mui.kitchen/__export/1603182970151/sites/muikitchen/img/2020/10/20/pollos.jpg_1997779314.jpg'
        },
        {
            name: 'Mojarra frita con patacón',
            price: '30000',
            description: 'Mojarra frita mamonua',
            image: 'https://pbs.twimg.com/media/CyJXu2JWEAAb-Zi.jpg'
        },
        {
            name: 'Ajíaco',
            price: '5500',
            description: 'Ajíaco sin pollo ni papa, ni ajíaco',
            image: 'https://th.bing.com/th/id/OIP.ARPM8Du42T8ShEY7hCJMcwHaEo?pid=ImgDet&rs=1'
        }
    ]

    const [ open, setOpen ] = useState(false);

    const saveProduct = (newProduct) => {
        products.push(newProduct)
    }

    return (
    <Fragment>
        <Grid
            style={{
                marginTop: 40,
                marginBotton: 50,
                marginLeft: 50,
                marginRight: 50,
                minHeight: '70vh'
            }}
            >
            <Container fluid>
                <Header
                    size="huge"
                    as="h1"
                    style={{
                        fontSize: 50,
                        spacing: '-0.04em',
                        fontWeight: '400',
                        marginBotton: 20,
                        marginTop: 30
                    }}
                >
                    Our products
                    <span>
                        <Button
                            onClick={() => setOpen(true)}
                            size="mini"
                            style={{
                                padding: 20,
                                borderRadius: 0,
                                backgroundColor: "#862AE3",
                                borderColor: '#F0EC1A',
                                borderWidth: '1px',
                                fontWeight: 'bold',
                                color: "#FFFFFF"
                            }}
                            floated="right"
                        >
                            Agregar producto
                        </Button>
                    </span>
                </Header>
                {
                    products.map((i) => {
                        return (
                            <ProductsComponent
                                name={i.name}
                                price={i.price}
                                image={i.image}
                                description={i.description}
                            />
                        )
                    })
                }
            </Container>
        </Grid>
        <CreateProductModal
            open={open}
            setOpen={(value) => setOpen(value)}
            saveProduct={(newProduct) => saveProduct(newProduct)}
        />
    </Fragment>
    );

}

export default Catalogue;