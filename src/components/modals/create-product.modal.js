import react, { useState } from 'react';
import { Checkbox, Form, Header, Modal, Button } from 'semantic-ui-react';

const CreateProductModal = ({
    open,
    setOpen,
    saveProduct
}) => {

    const [ newProduct, setNewProduct ] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const onChangeInput = e => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Modal
            open={open}
        >
            <Modal.Header>
                Crea un producto
            </Modal.Header>
            <Modal.Content>
                <Form>
                    <h3> Nuevo producto </h3>
                    <Form.Group
                        widths="equal"
                    >
                        <Form.Input
                            label="Nombre del producto"
                            name="name"
                            value={newProduct.name}
                            onChange={onChangeInput}
                        />
                        <Form.Input
                            label="Precio del producto"
                            name="price"
                            value={newProduct.price}
                            onChange={onChangeInput}
                        />
                        <Form.Input
                            label="Descripción del producto"
                            name="description"
                            value={newProduct.description}
                            onChange={onChangeInput}
                        />
                        <Form.Input
                            label="Imagen del producto"
                            name="image"
                            value={newProduct.image}
                            onChange={onChangeInput}
                        />
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cerrrar
                </Button>
                <Button
                    onClick={() => saveProduct(newProduct)}
                >Guardar</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CreateProductModal;