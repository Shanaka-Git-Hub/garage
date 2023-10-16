import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '18rem' }} className='mt-5'>
      <Card.Img variant="top" src="https://assets.rebelmouse.io/media-library/image.jpg?id=30851116&width=1200&height=800&quality=90&coordinates=12%2C0%2C0%2C0" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;