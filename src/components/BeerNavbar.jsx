import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import LoginModal from './LoginModal';

function App() {

    const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App p-4">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Beers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Breweries</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button onClick={handleLogin}>Login</Button>
        </Nav.Item>
      </Nav>
      <LoginModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}
export default App;
