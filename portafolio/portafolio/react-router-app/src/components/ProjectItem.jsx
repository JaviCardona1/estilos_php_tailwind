import { Card } from 'react-bootstrap';

export default function ProjectItem({ title, description }) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
