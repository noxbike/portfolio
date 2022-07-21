import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import './contact.css'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function Contact() {
  const { register, handleSubmit, resetField,
          formState: { errors, isValid, isDirty }} = useForm({
    defaultValues:{
        name: "",
        email: "",
        message: ""
    }
  })

  const onSubmit = (data) => {
    let email = { email: data };
    if(isValid){
        axios.post('http://localhost:3001/api/contact',email)
        .then(res => reset())
    }
   
  }

  const reset = () =>{
    resetField("name")
    resetField("email")
    resetField("message")
  }

  return (
    <div id="contact">
        <div className="container">
            <div className='Form'>
                <ThemeProvider theme={darkTheme}>
                    <h3>Get in touch</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            className="simple-textField"
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="standard-basic" {...register("name",{required: true})} label="Name" variant="standard" />
                            <TextField 
                                error={errors.email?.message}
                                helperText={errors.email?.message}
                                id="standard-basic" 
                                {...register("email",{required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email invalid !"} })} 
                                label="Email" 
                                variant="standard" 
                            />
                            <TextField
                                {...register("message",{required: true})}
                                id="standard-multiline-static"
                                label="Message"
                                multiline
                                rows={7}
                                variant="standard"
                            />
                        </Box>
                        <div className="submitbutton">
                            <Button type="submit" variant="outlined" disabled={!isDirty}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </ThemeProvider>
            </div>
            <div className='Info'>
                <p>+262 693 92 22 09</p>
                <p>noxbike@gmail.com</p>
                <p>37 chemin isnard, Piton Sainte-Rose Réunion</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/morel.mickael.169" target={"blank"}><img src="./assets/images/facebook.png" alt="facebook-logo" height="40rem"/></a></li>
                    <li><a href="https://www.instagram.com/noxbike/" target={"blank"}><img src="./assets/images/instagram.png" alt="instagram-logo" height="40rem"/></a></li>
                    <li><a href='https://www.linkedin.com/in/mickael-morel-134879150/' target={"blank"}><img src="./assets/images/linkedin.png" alt="linkedin-logo" height="40rem"/></a></li>
                    <li><a href="https://twitter.com/noxbike" target="blank"><img src="./assets/images/bird.png" alt="twitter-logo" height="40rem"/></a></li>
                    <li><a href="https://github.com/noxbike" target={"blank"}><img src="./assets/images/Github2.png" alt="Github-logo" height="40rem"/></a></li>
                </ul>
            </div>
            <div className='footer'>
                <p>2022 © mitech.re</p>
            </div>
        </div>
    </div>
  )
}

export default Contact