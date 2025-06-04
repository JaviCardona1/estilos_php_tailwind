import { Card } from 'react-bootstrap';

export default function RecommendationCard({ text }) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Text><i>“ {text} ”</i></Card.Text>
      </Card.Body>
    </Card>
  );
}
