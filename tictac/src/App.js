/* eslint-disable no-unused-vars */
import "./App.css";
import Couter from "./couter/Couter";
import Blog from "./customHooks/Blog";
import useClickOutSide from "./customHooks/hooks/useClickOutSide";
import SidebarMenu from "./customHooks/SidebarMenu";
import Hackernews from "./news/Hackernews";
import Game from "./tictac/Game";
import Photo from "./useEffect/Photo";
import AutoResize from "./useRef/AutoResize";
import Clock from "./useRef/Clock";
import DropDown from "./useRef/DropDown";
import Input from "./useRef/Input";

function App() {
    const { show, setShow, nodeRef } = useClickOutSide();
    return (
        <div className="App">
            {/* <Game /> */}
            {/* <Photo /> */}
            {/* <Couter /> */}
            {/* <Hackernews></Hackernews> */}
            {/* <Clock></Clock> */}
            {/* <Input></Input>
             */}
            {/* <AutoResize></AutoResize> */}
            {/* <div className="p-5">
                <DropDown></DropDown>
            </div> */}
            {/* <Blog></Blog> */}
            <div className="">
                <button onClick={setShow(true)}>Clickme</button>
                <SidebarMenu ref={nodeRef} show={show}></SidebarMenu>
            </div>
        </div>
    );
}

export default App;
