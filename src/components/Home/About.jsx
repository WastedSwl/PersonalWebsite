import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import styles from "./About.module.css";

const About = () => {
    return (
        <Container fluid className={styles.homeAboutSection} id="about">
          <Container>
            <Row>
              <Col md={8} className={styles.homeAboutDescription}>
                <h1>
                  LET ME INTRODUCE MYSELF
                </h1>
                <p className={styles.homeAboutBody}>
                 Hi, my name is <span className={styles.yellow}>Uladzislau Siry</span>
                 <br />
                 <br />
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className={styles.yellow}> Javascript, </b>
                    as well as have knowledge in programming languages such as Python and MySql
                  <br />
                  <br />
                  I have a passion for working
                  with <b className={styles.yellow}>React.js, MySql,</b> and
                  <i>
                    <b className={styles.yellow}>
                      {" "}modern libraries and frameworks
                    </b>
                  </i>
                  <br />
                  <br />
                  I am interested in building new
                  <i>
                    <b className={styles.yellow}> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className={styles.yellow}> AI.</b>
                  </i>
                  <br />
                </p>
              </Col>
              <Col md={4} className={styles.myAvatar}>
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className={styles.homeAboutSocial}>
                <h1>Contact me ON</h1>
                <ul className={styles.homeAboutSocialLinks}>
                  <li className={styles.socialIcons}>
                    <a
                      href="https://github.com/WastedSwl"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.homeSocialIcons}
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className={styles.socialIcons}>
                    <a
                      href="https://www.linkedin.com/in/uladzislau-siry-69096b262/"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.homeSocialIcons}
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className={styles.socialIcons}>
                    <a
                      href="https://leetcode.com/u/siryvlad/"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.homeSocialIcons}
                      aria-label="leetcode"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
    );
}

export default About;
