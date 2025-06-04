import { Form, Button } from "react-bootstrap";

export default function LeaveRecommendationForm() {
  return (
    <section className="my-5 text-center">
      <h2 className=" mb-4">Leave a Recommendation</h2>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group className="mb-3 w-75">
          <Form.Control type="text" placeholder="Name(opcional)" />
        </Form.Group>
        <Form.Group className="mb-3 w-75">
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>
        <Button
          className="bg-white text-purple border-purple"
          style={{ borderWidth: "1px" }}
        >
          Submit
        </Button>{" "}
      </Form>
    </section>
  );
}
