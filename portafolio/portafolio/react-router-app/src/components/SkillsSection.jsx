import { Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';

const skills = [
  { name: 'HTML', experience: '2 years', logo: require('../assets/logos/html.png') },
  { name: 'JavaScript', experience: '1.5 years', logo: require('../assets/logos/javascript.png') },
  { name: 'Java', experience: '0.5 years', logo: require('../assets/logos/java.png') },
  { name: 'React', experience: '1 year', logo: require('../assets/logos/react.png') },
  { name: 'Node.js', experience: '1 year', logo: require('../assets/logos/nodejs.png') },
  { name: 'CSS', experience: '2 years', logo: require('../assets/logos/css.png') },
];


export default function SkillsSection() {
  return (
    <section id="skills" className="my-5 text-center">
      <h2>Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, idx) => (
          <Col key={idx} md={4} lg={2} className="mb-4">
            <SkillCard {...skill} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
