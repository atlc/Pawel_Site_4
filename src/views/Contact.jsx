import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import GoogleFontLoader from 'react-google-font-loader';
import { FiMail, FiInstagram, FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';


function Contact() {
    return (
        <PageStyle>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Raleway',
                        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    },
                    {
                        font: 'Roboto',
                        weights: [100, '400i', 900],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <div className="container-fluid  bg-secondary contact">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="container content-box">
                    <div className="col text" style={{ cursor: "default" }}>
                        <div>OK, LET’S CREATE</div>
                        <div>SOMETHING GREAT</div>
                    </div>
                    <h5 style={{ cursor: "default" }} className="text-white pt-3 font-weight-lighter par-text">If you like my work and have a project in mind, just send me a direct message @
                        <span>
                            <a style={{ textDecoration: "none" }} className="text-orange" href="mailto:pjpavo@gmail.com?subject=I found your website and now..." rel="noreferrer" target="_blank"> pjpavo@gmail.com
                            </a>
                        </span> or contact me on social media listed below.</h5>
                    <div className="row ml-2 mt-3">
                        <a href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/" rel="noreferrer" target="_blank" className="icon text-orange ml-1"><AiOutlineLinkedin /></a>
                        <a href="https://www.instagram.com/pifpavchio/" rel="noreferrer" target="_blank" className="text-orange icon mx-5"><FiInstagram /></a>
                        <a href="https://github.com/PawelPavo" rel="noreferrer" target="_blank" className="icon text-orange"><FiGithub /></a>
                        <a href="mailto:pjpavo@gmail.com?subject=I found your website and now..." rel="noreferrer" target="_blank" className="icon text-orange mx-5"><FiMail /></a>
                    </div>
                </div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
.contact {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    animation: blink 2s linear 1;
}

.content-box {
    overflow: hidden;
    margin-top : 30%;
}

.text {
    color: white;
    font-size: 4.5vw;
    font-family: 'Raleway';
    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(248, 247, 247, 0.5));

}

.par-text {
    text-shadow: 1px 1px 4px  #E36C4E;
}

.par-text>span {
    font-weight: bold;
}

.icon {
    text-decoration: none;
    font-size: 3vw;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.icon:hover {
    color: white !important;
    transform: scale(1.1);
}

@media (max-width: 576px) { 
    .text {
        font-size: 6vw;
    }  
    .icon {
        font-size: 7vw;
    } 
}


@media screen and (orientation: landscape) {
    .content-box {
        margin-top:5%;      
    }
}

`

export default Contact;