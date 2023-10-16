import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate=useNavigate()
  const schema=yup.object().shape({
    userName:yup.string().required(),
    password:yup.string().required()
  })
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })
  const formData=(data)=>{
     if(data.userName=='shanaka' && data.password=='sms1998github'){
      navigate('/garage/openclose')
     }else{
      alert('User Name or Password incorrect')
     }
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open/Close Setting
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Open/Close Setting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{width:'100%',height:'200px'}}
          onSubmit={handleSubmit(formData)}
          className='d-flex flex-column align-items-center justify-content-around '>
            <input type="text" {...register('userName')}className='form-control' placeholder ='User Name'/>
            <p>{errors.userName?.message}</p>
            <input type="Password" {...register('password')}className='form-control' placeholder ='Password'/>
            <p>{errors.password?.message}</p>
            <button className='btn btn-secondary col-8'>Login</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;