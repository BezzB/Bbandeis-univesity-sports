import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiOutlineLogin } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';


function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = () => {
    // Add your login logic here
    // For demo purposes, just closing the modal after clicking "Login"
    handleClose();
  };

  return (
    <>
      <Button variant="outline-light mx-1" onClick={handleShow}>
        <AiOutlineLogin /> Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="primary w-100 mb-2">
        <FcGoogle style={{ marginRight: '8px' }} />
      Sign in with Google
    </Button>
          <Form>          
           
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
