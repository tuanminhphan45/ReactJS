
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment } from './redux/count/count.slice';
import Header from './components/header';
import TabsContent from './components/table.content';
import UsersTable from './components/user.table';
function App() {
  return (
    <>
      <Header></Header>
      <TabsContent/>
      {/* <UsersTable/> */}

    </>
  )
}

export default App
