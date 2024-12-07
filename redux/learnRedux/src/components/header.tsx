import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Form from 'react-bootstrap/Form';
import { changeMode } from '../redux/app/app.slide';
import { useEffect } from 'react';

function Header() {
  // thành công sử dụng redux lấy dữ liệu chung từ store
  const users = useAppSelector(state => state.user.listUsers);
  // lấy dữ liệu mode từ store 
  const mode = useAppSelector(state => state.app.mode);

  // dùng useEffect theo dõi mode thay đổi can thiệp tag body add thuộc tính data-bs-theme của bootstrap để đỏi theme
  // lưu ý nó chỉ thay đổi khi dùng những tag của bootstrap
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.setAttribute('data-bs-theme', mode);
    }, [mode])
  const dispatch = useAppDispatch();
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme={mode}>
      <Container>
        <Navbar.Brand href="#home">Phan Minh learning Redux {users.length}</Navbar.Brand>
        <Navbar.Toggle />
          <Form>
            <Form.Check // prettier-ignore
              value={mode}
              onChange={(e) => dispatch(changeMode(e.target.value ==='light'? 'dark':'light'))}
              type="switch"
              id="custom-switch"
              // tại sao phải dùng thẻ <Navbar.Text> bởi vì dùng light/dark mode của bootstrap thì phải dùng thì khi nó chuyển nó sẽ đổi css phần đó luôn 
              label={mode === 'light'? <Navbar.Text>Light Mode</Navbar.Text>:<Navbar.Text>Dark Mode</Navbar.Text>}
            />
          </Form>
      </Container>
    </Navbar>
  );
}

export default Header;