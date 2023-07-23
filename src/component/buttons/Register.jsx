import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineLogin } from 'react-icons/ai';
import { Form } from 'react-bootstrap';


const Register = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
    <Button variant="outline-light dark mx-2" onClick={handleShow}>
        <AiOutlineLogin /> Register       
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Register </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name </Form.Label>
              <Form.Control
                type="First Name"
                placeholder="Enter First Name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Second Name </Form.Label>
              <Form.Control
                type="Second Name"
                placeholder="Enter Second Name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
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
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register
