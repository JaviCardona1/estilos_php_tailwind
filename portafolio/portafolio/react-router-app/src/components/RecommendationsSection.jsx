import { Row, Col } from 'react-bootstrap';
import RecommendationCard from './RecommendationCard';

const recs = [
  "Jane is a very quick learner and quickly grasps key concepts of Web development. She got a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team.",
  "Working with Jane has been an awesome experience. She is highly knowledgeable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again.",
  "I had worked along with Jane during the initial phase of our venture which needed Web development. She is a committed resource who has in depth knowledge about the domain. She will be an asset for any organisation!"
];


export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="my-5">
      <h2 className='text-purple'>Recommendations</h2>
      <Row>
        {recs.map((text, idx) => (
          <Col key={idx} md={4} className="mb-3">
            <RecommendationCard text={text} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
