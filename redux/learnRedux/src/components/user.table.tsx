import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Button from 'react-bootstrap/Button';
import UserCreateModal from './modal/user.create.modal';
import UserEditModal from './modal/user.edit.modal';
import UserDeleteModal from './modal/user.delete.modal';


import { fetchListUsers } from '../redux/user/user.slide';

function UsersTable() {

    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.user.listUsers);

    const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);

    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
    const [dataUser, setDataUser] = useState({});

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchListUsers())
    }, [])

    const handleEditUser = (user: any) => {
        setDataUser(user);
        setIsOpenUpdateModal(true);
    }

    const handleDelete = (user: any) => {
        setDataUser(user);
        setIsOpenDeleteModal(true);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
                <h4>Table Users</h4>
                <Button variant="primary"
                    onClick={() => setIsOpenCreateModal(true)}
                >Add New</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        onClick={() => handleEditUser(user)}
                                    >
                                        Edit
                                    </Button>&nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(user)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <UserCreateModal
                isOpenCreateModal={isOpenCreateModal}
                setIsOpenCreateModal={setIsOpenCreateModal}
            />

            <UserEditModal
                isOpenUpdateModal={isOpenUpdateModal}
                setIsOpenUpdateModal={setIsOpenUpdateModal}
                dataUser={dataUser}
            />

            <UserDeleteModal
                dataUser={dataUser}
                isOpenDeleteModal={isOpenDeleteModal}
                setIsOpenDeleteModal={setIsOpenDeleteModal}
            />
        </>
    );
}

export default UsersTable;