import React, { useState } from "react";
import { 
    Button,
    Checkbox,
    Container,
    Grid,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar
} from "semantic-ui-react";

const Catalogue = () => {

    return (
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
        </Container>
       </Grid>
    );

}

export default Catalogue;