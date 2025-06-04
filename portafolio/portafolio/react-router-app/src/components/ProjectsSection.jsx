import { Row, Col } from 'react-bootstrap';
import ProjectItem from './ProjectItem';

const projects = [
  {
    title: 'Chatbot',
    description: 'Developed a secure website integrated with chatbot using HTML, CSS, JavaScript and IBM Watson Assistant.'
  },
  {
    title: 'Sentiment Analyzer',
    description: 'Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU.'
  },
  {
    title: 'Fashion Website',
    description: 'Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using Stripe for payment gateway.'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="my-5">
      <h2 className="text-purple">Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col key={idx} md={12} className="mb-3">
            <ProjectItem {...proj} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
