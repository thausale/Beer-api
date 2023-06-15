import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import LoginModal from './LoginModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState('');

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoginSubmit = (email) => {
    const emailParts = email.split('@');
    const username = emailParts[0];
    const capitalizedUsername =
      username.charAt(0).toUpperCase() + username.slice(1);
    setLoggedInEmail(capitalizedUsername);
    setShowModal(false);
  };

  return (
    <div className="App p-4">
      <Nav activeKey="/home" className="justify-content-between">
        <Nav.Item>
          <Nav.Link href="/">Untappd</Nav.Link>
        </Nav.Item>
        {loggedInEmail && (
          <Nav.Item className="ml-3 mt-2">
            <b>Welcome to beer world</b>{' '}
            <i style={{ fontSize: '20px' }}> {loggedInEmail} </i>
          </Nav.Item>
        )}
        <div className="d-flex">
          <Nav.Item>
            <Nav.Link href="/beers">Beers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/breweries">Breweries</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button onClick={handleLogin}>Login</Button>
          </Nav.Item>
        </div>
      </Nav>
      <LoginModal
        show={showModal}
        handleClose={handleCloseModal}
        handleLoginSubmit={handleLoginSubmit}
      />
    </div>
  );
}

export default App;
