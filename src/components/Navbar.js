import React, { useState } from 'react'
import { RiDashboardFill, RiLayout5Fill, RiLayoutBottom2Fill, RiMapPinAddFill, RiCloseLine,  } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoMdBrush } from "react-icons/io";
import { RxDragHandleDots2, RxSwitch } from "react-icons/rx";
import { MdOutlineViewCarousel, MdViewList } from "react-icons/md";
import { ImTable2 } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";

import '../style/style.css'

const SideBar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <div>
        <div>
                <button className='toggle button-st mt-2 mx-2 p-1' onClick={() => handleToggle()}>
                    {toggle ? (
                        <RiCloseLine size={20} />
                    ) : (
                        <RxHamburgerMenu size={20} />
                    )} Menu
                </button>
            </div>
        <div className='sidebar px-2 pt-3'>
            <div className='header-box'>
            </div>
            <div>
                <div className='menu pt-5'>
                    <div className='menu-title mb-3'><span className='icon'><RiDashboardFill size={28} /></span>Dashboard</div>
                    <div className='menu-title mb-3'><span className='icon'><RiLayout5Fill size={28} /></span>Forms</div>
                    <div className='menu-title mb-3'><span className='icon'><IoMdMail size={28} /></span>Inbox</div>
                    <div className='menu-title mb-3'><span className='icon'><MdOutlineViewCarousel size={28} /></span>Stepper</div>
                    <div className='menu-title mb-3'><span className='icon'><IoMdBrush size={28} /></span>Ui Elements</div>
                    <div className='menu-title mb-3'><span className='icon'><RiLayout5Fill size={28} /></span>Layout</div>
                    <div className='menu-title mb-3'><span className='icon'><RxDragHandleDots2 size={28} /></span>Icons</div>
                    <div className='mb-3'>Layout</div>
                    <div className='menu-title mb-3'><span className='icon'><RiLayoutBottom2Fill size={28} /></span>Subheaders</div>
                    <div className='menu-title mb-3'><span className='icon'><MdViewList size={28} /></span>Builder</div>
                    <div className='menu-title mb-3'><span className='icon'><RxSwitch size={28} /></span>General</div>
                    <div className='mb-3'>Components</div>
                    <div className='menu-title mb-3'><span className='icon'><ImTable2 size={28} /></span>Tables</div>
                    <div className='menu-title mb-3'><span className='icon'><RiMapPinAddFill size={28} /></span>Maps</div>
                </div>
            </div>
        </div>
        {toggle ? (
            <div className='sidebar2 px-2 pt-3 container'>
            <div className='header-box2'>
            </div>
            <div>
                <div className='menu pt-5'>
                    <div className='menu-title mb-3'><span className='icon'><RiDashboardFill size={28} /></span>Dashboard</div>
                    <div className='menu-title mb-3'><span className='icon'><RiLayout5Fill size={28} /></span>Forms</div>
                    <div className='menu-title mb-3'><span className='icon'><IoMdMail size={28} /></span>Inbox</div>
                    <div className='menu-title mb-3'><span className='icon'><MdOutlineViewCarousel size={28} /></span>Stepper</div>
                    <div className='menu-title mb-3'><span className='icon'><IoMdBrush size={28} /></span>Ui Elements</div>
                    <div className='menu-title mb-3'><span className='icon'><RiLayout5Fill size={28} /></span>Layout</div>
                    <div className='menu-title mb-3'><span className='icon'><RxDragHandleDots2 size={28} /></span>Icons</div>
                    <div className='mb-3'>Layout</div>
                    <div className='menu-title mb-3'><span className='icon'><RiLayoutBottom2Fill size={28} /></span>Subheaders</div>
                    <div className='menu-title mb-3'><span className='icon'><MdViewList size={28} /></span>Builder</div>
                    <div className='menu-title mb-3'><span className='icon'><RxSwitch size={28} /></span>General</div>
                    <div className='mb-3'>Components</div>
                    <div className='menu-title mb-3'><span className='icon'><ImTable2 size={28} /></span>Tables</div>
                    <div className='menu-title mb-3'><span className='icon'><RiMapPinAddFill size={28} /></span>Maps</div>
                </div>
            </div>
        </div>
        ) : null}
        {/* <div className='content'>

        </div> */}
    </div>
  )
}

export default SideBar