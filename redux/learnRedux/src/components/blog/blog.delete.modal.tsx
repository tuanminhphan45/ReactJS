import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteAUser, resetDelete } from '../../redux/user/user.slide';
import { useEffect, useState } from 'react';
import { deleteABlog } from '../../redux/blog/blog.slide';

const BlogDeleteModal = (props: any) => {
    const {isOpenDeleteModal, setIsOpenDeleteModal, dataBlog} = props;
    const dispatch = useAppDispatch();
    const isDeleteSuccess = useAppSelector(state => state.blog.isCreateSuccess);
    useEffect(()=>{
        dispatch(resetDelete());
    },[])
    const handleSubmit = (dataBlog:any) => {
        dispatch(deleteABlog(dataBlog));
        setIsOpenDeleteModal(false)
    }
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
                    Delete A Blog
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete the blog: {dataBlog?.title ?? ""}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='warning'
                    onClick={() => setIsOpenDeleteModal(false)} className='mr-2'>Cancel</Button>
                <Button onClick={() => handleSubmit(dataBlog)}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BlogDeleteModal;