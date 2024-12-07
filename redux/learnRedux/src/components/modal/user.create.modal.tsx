import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createNewUser, resetCreate } from '../../redux/user/user.slide';

const UserCreateModal = (props: any) => {
    const { isOpenCreateModal, setIsOpenCreateModal } = props;

    const isCreateSuccess = useAppSelector(state => state.user.isCreateSuccess)
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if(isCreateSuccess === true){
            setIsOpenCreateModal(false),
            setEmail(''),
            setName(''),
            dispatch(resetCreate())
        }
    },[isCreateSuccess])
    const handleSubmit = () => {
        if (!email) {
            alert("email empty");
            return;
        }
        if (!name) {
            alert("name empty");
            return;
        }
        console.log(">>> check create: ", { email, name })
        dispatch(createNewUser({ email, name }))
    }

    return (
        <>
            <Modal
                show={isOpenCreateModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop={false}
                onHide={() => setIsOpenCreateModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add A New User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Name">
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='warning'
                        onClick={() => setIsOpenCreateModal(false)} className='mr-2'>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserCreateModal;