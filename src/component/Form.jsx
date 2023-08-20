import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import Api from './API/Api';


const Form = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const[error,setError] = useState({})

  const validateName = (name) => {
    return /^[A-Za-z\s]+$/.test(name);
  };


  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validateMobile = (mobile) =>{
    const mobilePattern = /^\d{10}$/
    return mobilePattern.test(mobile)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    
    const newErrors = {}
    
    if(!validateName(formData.name)){
      newErrors.name= 'Invalid name'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    
    if(!validateMobile(formData.mobile)){
      newErrors.mobile = 'Invalid mobile number'
    }

    if(Object.keys(newErrors).length>0){
      setError(newErrors)
      return
    }
   
    console.log(formData);
  };

  const handleClick = () => navigate('/api');

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              helperText={error.mobile}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick={handleClick}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
