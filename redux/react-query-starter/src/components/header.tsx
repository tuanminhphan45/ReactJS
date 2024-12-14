
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

function Header() {
    
    const [mode, setMode] = useState("light")
    // cách lấy data sharing nó sẽ ko fetch lại bởi vì nó sẽ biết data nào đã fetch
    // và đang lưu trong cache rồi
    const queryClient = useQueryClient();
    const data = queryClient?.getQueryData(['fetchUser',1]) as any[] ?? []


    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.setAttribute('data-bs-theme', mode);
    }, [mode])


    return (
        <Navbar className="bg-body-tertiary" data-bs-theme={mode}>
            <Container>
                <Navbar.Brand href="#home">Hỏi Dân IT React {data?.length}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Form.Check
                        defaultChecked={mode === "light" ? false : true}
                        onChange={(e) => {
                            setMode(e.target.checked === true ? "dark" : "light")
                        }}
                        type="switch"
                        id="custom-switch"
                        label={mode === "light" ?
                            <Navbar.Text>Light mode</Navbar.Text>
                            :
                            <Navbar.Text>Dark mode</Navbar.Text>
                        }
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;