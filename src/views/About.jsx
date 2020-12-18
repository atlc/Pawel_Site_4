import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import GoogleFontLoader from 'react-google-font-loader';
import Right from '../components/Right';
import { FaFilePdf } from 'react-icons/fa';


function About() {
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
            <div className="container-fluid about">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="container">
                    <div className="row mt-5 justify-content-center ">
                        <div className="col-md-6">
                            <img className="image" src="https://news-api.s3.us-east-2.amazonaws.com/profile.jpg" alt="Pawel_Jaskolski_image" />
                        </div>
                        <div className="col-md-6 mt-5">
                            <h1 className="hello-text">
                                I'm Pawel, a full-stack web developer working as a <span>"Coder-For-Hire"</span>  in sunny Fort Lauderdale, Florida.
                            </h1>
                            <div className="about-text mt-3">
                                <h3>
                                    I am an avid problem solver. I believe this quality is what makes me an excellent web developer.
                                </h3>
                                <h3 className="mt-3">
                                    I am a hardworking individual who brings passion and insight into everything I do.
                                </h3>
                                <h3 className="mt-3">
                                    In my free time, I enjoy researching and investing in the stock market, while maybe sipping on a Jai Alai (my favorite beer). I also enjoy going out to different restaurants trying to find the best fried calamari with my favorite human!
                                </h3>
                                <h3 className="mt-3">
                                    For a full scoop of my work experiance please check out
                                    <a href="https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August+20+AWS.pdf"
                                        rel="noreferrer" target="_blank" className="icon text-orange"> my resume <FaFilePdf /></a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center py-5">
                        <div className="col-auto text-white">
                            <div type="button" className="border text-white">
                                <Right />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
img {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.hello-text {
    font-family: 'Raleway';
    font-weight: bold;
    color: white;
}

.hello-text>span {
    color: #E36C4E;
}

.about-text {
    color: white;
    font-family: 'Raleway';
}

.icon {
    font-weight: bold;
    text-decoration: none;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

/* @media screen and (orientation: portrait) { 
    .hello-text {
        font-size: 5vh;
    }  
    .about-text {
        font-size: 4vh;
    }

    .icon {
        font-size: 4vh;
    }
} */

`

export default About;