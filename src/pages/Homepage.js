import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import SideBar from '../components/Navbar'
import { RiListCheck, RiBarChartHorizontalFill, RiContrastDropFill, RiArrowLeftRightFill, RiCloseLine } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineCloud, AiOutlineEye, AiFillFile } from "react-icons/ai";
import { BsBell, BsSunFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoMdTennisball } from "react-icons/io";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { CiSun } from "react-icons/ci";
import { TfiCreditCard } from "react-icons/tfi";
import { HiDownload } from "react-icons/hi";

import '../style/style.css'
import LineChart from '../components/LineChart';
import profil from '../public/profil.jpg'
import Form from 'react-bootstrap/Form';

const Homepage = () => {

  return (
    <div className='main-container'>
        <div className='d-flex main-container'>
            <div className='style-sidebar'>
                <SideBar />
            </div>
            <div className='body'>
                <Container className='mb-5'>
                    <Row>
                        <Col lg={4}>
                            <Row>
                                <Col xs={2} md={2}>
                                    <RiListCheck size={25} />
                                </Col>
                                <Col xs={9} md={9}><input className='input' type="text" placeholder='Search' /></Col>
                                <Col xs={1} md={1}><AiOutlineSearch size={25} /></Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={8} className='top-nav d-flex gap-4'>
                            <div><BsBell size={20} /></div>
                            <div><CiMail size={23} /></div>
                            <div className='dropdown'>
                                <Form.Select size="sm" style={{background: 'rgba(33,25,93,255)', border:'none', color:'white'}}>
                                    <option>English</option>
                                    <option>Tagalog</option>
                                    <option>Indonesia</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Image 
                                    alt=''
                                    src={profil}
                                    width={30}
                                    height={30}
                                    className='profil'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className=''>
                    <Row className='sub-container'>
                        <Col lg={4} className='sub-container1'>
                            <div className='container1 p-4'>
                                <div>
                                    <Row>
                                        <Col sm={6} className='fs-5 text-white'>Weather</Col>
                                        <Col sm={6} className='text-end'><RiBarChartHorizontalFill size={15} className='text-success' style = {{transform: 'rotate(180deg)' }}/></Col>
                                    </Row>
                                </div>
                                <div className='day mt-1'>WED 23.07</div>
                                <div className='mt-3'>
                                    <Row>
                                        <Col sm={6} className='d-flex align-items-end'>
                                            <div className='d-flex gap-2'>
                                                <div><IoMdTennisball size={15} style = {{transform: 'rotate(90deg)' }} /></div>
                                                <div><BsSunFill size={15} /></div>
                                                <div><AiOutlineCloud size={15} /></div>
                                                <div><WiMoonWaxingCrescent3 size={15} /></div>
                                            </div>
                                        </Col>
                                        <Col sm={6} className='fs-2 d-flex align-items-start justify-content-end'>52<span className='fs-6'>&deg;C</span></Col>
                                    </Row>
                                </div>
                                <div className='mt-5'>
                                    <div className='temp mb-4'>
                                        <div>17&deg;C</div>
                                        <div>23&deg;C</div>
                                        <div>27&deg;C</div>
                                        <div>32&deg;C</div>
                                        <div>36&deg;C</div>
                                    </div>
                                    <div className='bar'>
                                        <Row>
                                            <Col sm={8} className='bar2'></Col>
                                            <Col sm={4} className='bar3'></Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className='title'>DETAILS</div>
                                    <div className='box-detail container d-grid mt-3'>
                                        <div className='details d-flex'>
                                            <div><RiContrastDropFill size={30} /></div>
                                            <div >Humidity</div>
                                            <div>14%</div>
                                        </div>
                                        <div className='details d-flex'>
                                            <div><RiContrastDropFill size={30} /></div>
                                            <div >Humidity</div>
                                            <div>14%</div>
                                        </div>
                                        <div className='details d-flex'>
                                            <div><CiSun size={30} /></div>
                                            <div >Feels like</div>
                                            <div>23&deg;</div>
                                        </div>
                                        <div className='details d-flex'>
                                            <div><AiOutlineEye size={30} /></div>
                                            <div >Visibility</div>
                                            <div>N/A</div>
                                        </div>
                                        <div className='details d-flex'>
                                            <div><RiContrastDropFill size={30} /></div>
                                            <div >Humidity</div>
                                            <div>14%</div>
                                        </div>
                                        <div className='details d-flex'>
                                            <div><RiContrastDropFill size={30} /></div>
                                            <div >Humidity</div>
                                            <div>14%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} className=''>
                            <div className='container2 d-flex gap-3'>
                                <div className='container21 p-4'>
                                    <div className='fs-5 text-white'>Earnings</div>
                                    <div className='sub-title'>EARNINGS</div>
                                    <div className='d-flex flex-wrap'>
                                        <div className='chart mt-5'>
                                            <LineChart />
                                        </div>
                                        <div className='container h-100 earnings-det'>
                                            <div className='text-end fs-2 text-white'><span className='dollar'>$</span>123.34</div>
                                            <div className='text-end text-white mt-4 mb-3'><span className='text-success'>+ 42%</span> since last week</div>
                                            <div className='d-flex flex-column text-end gap-2'>
                                                <div>
                                                    <button className='py-3 w-100 button-st'>11800 ETH</button>
                                                </div>
                                                <div>
                                                    <button className='py-3 w-100 button-st'>16800 SNT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container22 d-flex gap-4 flex-wrap'>
                                    <Col className='container221 p-4 d-flex gap-4'>
                                        <div className='d-flex flex-column w-100 gap-4'>
                                            <div className='h-30'>
                                                <div className='fs-5 text-white'>Current Balance</div>
                                                <div className='sub-title'>TODAY</div>
                                            </div>
                                            <div className='h-100 fs-2 text-white d-flex justify-content-center align-items-center'>$2438,55</div>
                                        </div>
                                        <div className='w-100 d-flex flex-column py-2 gap-4'>
                                            <div className='h-30'>
                                                <button className='w-100 py-2 button-sm'><span className='mx-2'><RiArrowLeftRightFill size={15} /></span>Send Money</button>
                                            </div>
                                            <div className='h-100 d-flex flex-column py-3'>
                                                <div className='h-100 d-flex justify-content-center align-items-center'>
                                                    <div className='w-100 text-center'>Income</div>
                                                    <div className='w-100 text-center fs-5 text-success'>+ $3657</div>
                                                </div>
                                                <div className='h-100 d-flex justify-content-center align-items-center'>
                                                    <div className='w-100 text-center'>Expenses</div>
                                                    <div className='w-100 text-center fs-5 text-danger'>- $3657</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='container221 p-4 d-flex flex-column'>
                                        <div className='h-20 d-flex gap-4'>
                                            <div className='w-100'>
                                                <div className='fs-5 text-white'>Withdraw Funds</div>
                                                <div className='sub-title'>TODAY</div>
                                            </div>
                                            <div className='w-100 d-flex align-item-end py-2'>
                                                <button className='w-100 button-sm py-2'><span className='mx-2'><HiDownload size={15} /></span>Withdraw</button>
                                            </div>
                                        </div>
                                        <div className='py-4 d-flex border-bottom'>
                                            <div className='w-100 d-flex'>
                                                <div><TfiCreditCard size={18} style={{marginRight: '10px'}}/></div>
                                                <div>Amount:</div>
                                            </div>
                                            <div className='w-100 text-end text-white'>$1,000,000</div>
                                        </div>
                                        <div className='py-4 d-flex border-bottom'>
                                            <div className='w-100 d-flex'>
                                                <div><AiFillFile size={18} style={{marginRight: '10px'}}/></div>
                                                <div>Confirmation N:</div>
                                            </div>
                                            <div className='w-100 text-end text-white'>394849304832456</div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default Homepage