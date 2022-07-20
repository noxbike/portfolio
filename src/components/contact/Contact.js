import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './contact.css'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function Contact() {
  return (
    <div id="contact">
        <div className="container">
            <div  className='Form'>
                <ThemeProvider theme={darkTheme}>
                    <h3>Get in touch</h3>
                    <form>
                        <div className="simple-textField">
                            <TextField id="standard-basic" label="Name" variant="standard" />
                            <TextField id="standard-basic" label="Email" variant="standard" />
                            <TextField
                                id="standard-multiline-static"
                                label="Message"
                                multiline
                                rows={7}
                                variant="standard"
                            />
                        </div>
                        <div className="submitbutton">
                            <Button variant="outlined">Submit</Button>
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