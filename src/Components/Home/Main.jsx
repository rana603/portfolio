import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Type } from "./Type";
// import homeLogo from "../Assets/profile.jpg";
// import Tilt from "react-parallax-tilt";
import "./Home.css";


const Main = () => {
    return (
        <>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row style={{ display: "flex",paddingTop:"40px" }}>
                        <Col md={9} className="home-header">
                            <h1 className="heading">
                                Hello !! <span className="wave">👋🏻</span>
                            </h1>
                            <h1 className="heading-name">
                                I am
                                <strong className="main-name"> &nbsp;Gautam Singh</strong>
                            </h1>
                            <div >
                                <Type />
                            </div>
                        </Col>
                        <Col md={9} className="homeLogo">
                            {/* <Tilt> */}
                            <img src="https://media.licdn.com/dms/image/C4D03AQGauwCyQcirHA/profile-displayphoto-shrink_800_800/0/1649357318858?e=2147483647&v=beta&t=9Hp97TwN9VLiLX8Z9_RlxJH5c7AkCtp6tBojlwsAa-M"
                                className="img-fluid myImage" alt="laptop" />

                            {/* </Tilt> */}
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <div className="about__contact center">
                                <a
                                    href="https://github.com/prajaktahadole"
                                    aria-label="github"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link link--icon"
                                >
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a href=""
        className='home_social_icon'
        target="_blank">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266
               5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 
               .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-
               .074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 
               3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 
               .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501
                2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-
                2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 
                1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
        </a>
                               
                            <a
                                href="tel:+91 9130805761"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="github"
                                className="link link--icon"
                            >
                                {/* <PhoneIcon /> */}
                            </a>
                            <a
                                href="https://www.linkedin.com/in/prajakta-hadole/"
                                aria-label="github"
                                className="link link--icon"
                                target="_blank"
                                rel="noreferrer"
                            >
                               <i class="fa-brands fa-github"></i>
                            </a>

                            <a
                                href="https://medium.com/@prajaktahadole"
                                aria-label="Medium"
                                className="link-medium link--icon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* <GrMedium /> */}
                            </a>


                            <a
                                href="https://drive.google.com/file/d/1wJh3YFPL6Fm2QCDwX_8kVZ-rX7l9cflG/view?usp=sharing"
                                aria-label="github"
                                className="link link--icon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* <DescriptionIcon /> */}
                            </a>

                            <a
                                href="https://goo.gl/maps/Cz1b24pQWbgenHVQ6"
                                aria-label="github"
                                className="link link--icon"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* <PublicIcon /> */}
                            </a>
                        </div>
                    </Row>
                </Container>
            </Container>
        </Container>

    </>
  );
};
export default Main;