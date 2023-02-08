import React from 'react';
import Image from 'react-bootstrap/Image';
import profil from '../public/profil.jpg'
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import { RiListCheck } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell, BsSunFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Topnav = () => {
  return (
    <div>
        <Container className='mb-5'>
            <Row>
                <Col lg={4}>
                    <Row>
                        <Col xs={2} md={2}><RiListCheck size={25} /></Col>
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
    </div>
  )
}

export default Topnav