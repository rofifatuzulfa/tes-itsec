import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'
import { RiBarChartHorizontalFill, RiContrastDropFill, RiArrowLeftRightFill, RiSignalTowerFill } from "react-icons/ri";
import { AiOutlineCloud, AiOutlineEye, AiFillFile } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { IoMdTennisball } from "react-icons/io";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { CiSun } from "react-icons/ci";
import { TfiCreditCard } from "react-icons/tfi";
import { HiDownload} from "react-icons/hi";
import { MdWaves } from "react-icons/md";
import { TbCircleDotted } from "react-icons/tb";
import '../style/style.css'
import LineChart from '../components/LineChart';
import axios from "axios";

const Homepage = () => {

    const [population, setPopulation] = useState();
    const amount = [];
    const year = [];

    const getPopulation = () => {
        axios
            .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then((res) => setPopulation(res.data.data))
            .catch(err => console.error(err))
    }
    useEffect(() => {
        getPopulation();
    })

    {population?.map((item) => {
        return (
            amount.push(item.Population)
        )
    })};

    {population?.map((item) => {
        return (
            year.push(item.Year)
        )
    })};

  return (
    <Container className=''>
        <Row className='sub-container'>
            <Col lg={4} className='sub-container1'>
                <div className='container1 p-4'>
                    <Row>
                        <Col sm={6} className='fs-5 text-white'>Weather</Col>
                        <Col sm={6} className='text-end'><RiBarChartHorizontalFill size={15} className='text-success' style = {{transform: 'rotate(180deg)' }}/></Col>
                    </Row>
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
                                <div className='bar2'></div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='title'>DETAILS</div>
                            <div className='box-detail container-fluid d-flex flex-wrap justify-content-center mt-3'>
                                <div className='details d-flex'>
                                    <div><RiContrastDropFill size={30} /></div>
                                    <div >Humidity</div>
                                    <div>14%</div>
                                </div>
                                <div className='details d-flex'>
                                    <div><MdWaves size={30} /></div>
                                    <div>Wind</div>
                                    <div>5 km/h</div>
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
                                    <div><RiSignalTowerFill size={30} /></div>
                                    <div >Pressure</div>
                                    <div>24.25 in</div>
                                </div>
                                <div className='details d-flex'>
                                    <div><TbCircleDotted size={30} /></div>
                                    <div >Dew Point</div>
                                    <div>11&deg;</div>
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
                                <LineChart
                                    amount={amount.reverse()}
                                    year={year.reverse()}
                                />
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
  )
}

export default Homepage