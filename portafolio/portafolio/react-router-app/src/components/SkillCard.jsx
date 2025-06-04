import { Card } from 'react-bootstrap';

export default function SkillCard({ name, experience, logo }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={logo} style={{ height: '80px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{experience} experience</Card.Text>
      </Card.Body>
    </Card>
  );
}
