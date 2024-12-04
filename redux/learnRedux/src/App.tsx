
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment } from './redux/count/count.slice';
function App() {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() =>{

          debugger
          dispatch(increment())
        }}>
          count is {count.value}
        </Button>
        
      </div>
      
    </>
  )
}

export default App
