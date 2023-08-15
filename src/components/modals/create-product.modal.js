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

    return (
        <Modal
            open={open}
        >
            <Modal.Header>
                Crea un producto
            </Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Field>
                <label>Nombre del producto</label>
                <input placeholder='First Name'/>
                </Form.Field>
                <Form.Field>
                <label>Precio</label>
                <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
            </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Nope
                </Button>
                <Button
                    onClick={() => saveProduct(newProduct)}
                >Guardar</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CreateProductModal;