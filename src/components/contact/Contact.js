import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import './contact.css'
const apiUrl = process.env.REACT_APP_API_URL;
const appUrl = process.env.REACT_APP_URL;

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function Contact({dbLang}) {
    const [loading, setLoading] = useState(false)
    const [buttonEn, setButtonEn] = useState(true);
    const { register, getValues, handleSubmit, reset,
        formState: { errors, isValid }} = useForm({
            mode: 'onChange',
            defaultValues:{
                name: "",
                email: "",
                message: ""
            }
        })

  const onSubmit = (data) => {
    setLoading(!loading)
    let email = { email: data };
    axios.post(`${apiUrl}/api/contact`,email,{
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': `${appUrl}`,
            'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
    })
    .then(res => { 
        reset();
        setLoading(false)
        alert('Votre message a bien été envoyée!')
    })
  }

  useEffect(() => {
    const name = getValues("name");
    const email = getValues("email");
    const message = getValues("message");
    if(name.length > 0 && email.length > 0 && message.length > 0 && isValid)
    {
        setButtonEn(false);
    }
  },[getValues, isValid])


  return (
    <div id="contact">
        <div className="container">
            <div className='Form'>
                <ThemeProvider theme={darkTheme}>
                    <h3>{dbLang.title}</h3>
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
                            <TextField id="standard-basic" {...register('name',{required: true})} label={dbLang.name} variant="standard" />
                            <TextField 
                                error={errors.email?.message}
                                id="standard-basic" 
                                {...register("email",{required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "email invalid !"} })} 
                                label="Email" 
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">{errors.email?.message && 'invalid'}</InputAdornment>,
                                    }}
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
                            <Button type="submit" variant="outlined" sx={ { borderRadius: 28 } } disabled={buttonEn}>
                                {dbLang.submit}{loading && <CircularProgress style={{marginLeft: '10px'}} size={14}/>}
                            </Button>
                        </div>
                    </form>
                </ThemeProvider>
            </div>
            <div className='Info'>
                <p>+262 693 92 22 09</p>
                <p>noxbike@gmail.com</p>
                <p>Sainte-Rose, Réunion</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/morel.mickael.169" target={"blank"}><img loading="lazy" src="./assets/images/facebook.png" alt="facebook-logo" height="40rem"/></a></li>
                    <li><a href="https://www.instagram.com/noxbike/" target={"blank"}><img loading="lazy" src="./assets/images/instagram.png" alt="instagram-logo" height="40rem"/></a></li>
                    <li><a href='https://www.linkedin.com/in/mickael-morel-134879150/' target={"blank"}><img loading="lazy" src="./assets/images/linkedin.png" alt="linkedin-logo" height="40rem"/></a></li>
                    <li><a href="https://twitter.com/noxbike" target="blank"><img loading="lazy" src="./assets/images/bird.png" alt="twitter-logo" height="40rem"/></a></li>
                    <li><a href="https://github.com/noxbike" target={"blank"}><img loading="lazy" src="./assets/images/github2.png" alt="Github-logo" height="40rem"/></a></li>
                </ul>
            </div>
            <div className='footer'>
                <p>2024 © mickadev.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact