import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteAUser, resetDelete } from '../../redux/user/user.slide';
import { useEffect, useState } from 'react';

const UserDeleteModal = (props: any) => {
    const { dataUser, isOpenDeleteModal, setIsOpenDeleteModal } = props;
    const isDeleteSuccess = useAppSelector(state => state.user.isDeleteSuccess)
    const dispatch = useAppDispatch();
    const [id, setId] = useState();
    const handleSubmit = () => {
        dispatch(deleteAUser(id))
        console.log(">>> check delete: ", { id: dataUser?.id ?? "" })
    }
    useEffect(() => {
        if (dataUser?.id) {
            setId(dataUser?.id);
        }
    }, [dataUser])
    useEffect(() => {
        if (isDeleteSuccess === true) {
            setIsOpenDeleteModal(false);
            //reset redux
            dispatch(resetDelete())
        }
    }, [isDeleteSuccess])

    return (
        <Modal
            show={isOpenDeleteModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop={false}
            onHide={() => setIsOpenDeleteModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Delete A User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete the user: {dataUser?.email ?? ""}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='warning'
                    onClick={() => setIsOpenDeleteModal(false)} className='mr-2'>Cancel</Button>
                <Button onClick={() => handleSubmit()}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserDeleteModal;