import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import UsersTable from './user.table';

function TabsContent() {
    return (
        <Container>
            <Tabs
                defaultActiveKey="user"
                id="uncontrolled-tab-example"
                className="mb-3 mt-3"
            >
                <Tab eventKey="user" title="User">
                    <UsersTable/>
                </Tab>
                <Tab eventKey="Blogs" title="Blogs">
                    Tab content for Blogs
                </Tab>
                
            </Tabs>
        </Container>
    );
}

export default TabsContent;