import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/Sidebar';
import Topnav from '../components/Topnav';
import '../style/style.css';

const Layout = ({children}) => {

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const toInbox = () => {
        navigate('/inbox');
    }
    const toDashboard = () => {
        navigate('/');
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <div className='main-container'>
        <div className='d-flex main-container'>
            <div className='style-sidebar'>
                <SideBar 
                    toInbox={toInbox}
                    toDashboard={toDashboard}
                    toggle={toggle}
                    handleToggle={handleToggle}
                />
            </div>
            <div className='body'>
                <Topnav />
                <main>{children}</main>
            </div>
        </div>
    </div>
  )
}

export default Layout