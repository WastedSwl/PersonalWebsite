import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiHtml5
} from "react-icons/si";
import {
  FaCss3,
  FaSass,
  FaBootstrap
} from "react-icons/fa";
import styles from "./Techstack.module.css"; // Импортируем CSS модули

const Techstack = () => {
  return (
    <Row className={styles.rowStyle}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <FaSass />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <SiMaterialui />
      </Col>
    </Row>
  );
}

export default Techstack;
