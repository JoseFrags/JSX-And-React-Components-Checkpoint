import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstname = "there"

function App() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Name/>
        <Description/>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
    {firstname? <h1>Hello {firstname}!</h1>:<h1>Hello there!</h1>}
    {firstname? <img style={{borderRadius:20}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYWi-nekpQE0KVJfAhvJyt1I3X3OJNWo8Qw&usqp=CAU'/>:<></>}
    </>
  );
}

export default App;
