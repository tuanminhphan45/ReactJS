import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { fetchListUser } from '../redux/user/user.slide';
// trong typescipts cần khởi tạo kiểu dữ liệu
interface IUser {
    id: number;
    name: string;
    email: string;
}

function UsersTable() {
    // <IUser[]> là khai báo kiểu tập dữ liệu của users là một arrays chứa IUser(id,name,email)
    // const [users,setUser] = useState<IUser[]>([]);
    // const fetchUser =  async () => {
    //  const res =  await fetch('http://localhost:8000/users');
    //  const data = await res.json();
    //  setUser(data);     
    // }
    // useEffect(()=>{
    //     fetchUser();
    // },[])
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchListUser());
    },[])
    return (
    
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {users?.map(user => {
                        return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                        )
                    })} */}
                    
                    
                    
                </tbody>
            </Table>
    );
}

export default UsersTable;