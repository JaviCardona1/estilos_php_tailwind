import { Row, Col, Image } from 'react-bootstrap';
import avatar from '../assets/avatar.png';

export default function Introduction() {
  return (
    <section id="about" className="text-center my-5">
      <Row className="align-items-center">
        <Col md={4}>
          <Image src={avatar} alt="avatar" fluid />
        </Col>
        <Col md={8}>
          <h1 className="fw-bold text-purple">Hi, I'm Jane Doe! 👋</h1>
          <p>
            I am a full stack developer with 2 years of experience in both application
            and presentation layers. I have worked on applications and microservices
            deployed on IBM Cloud. I am an avid user of IBM Watson Services and have worked
            on Watson Assistant, NLU, Sentiment analyzer to name a few.
          </p>
        </Col>
      </Row>
    </section>
  );
}
