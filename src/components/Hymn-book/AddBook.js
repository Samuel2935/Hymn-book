import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AddBook.css';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal">
      <Button className="addBtn" variant="primary" onClick={handleShow}>
        Add book
      </Button>

      <Modal className="modal-body" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Choose your Hymn book</Modal.Title> */}
          <h3>Add hymn book</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className='modal-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label'>book name</Form.Label>
                <br/>
              <Form.Control
                className="input"
                as="textarea"
                placeholder="book name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className='label'> Choose Language</Form.Label>
              <br/>
              <Form.Control className="input" as="select" placeholder='Language' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            className="secondary"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button> */}
          <Button className="primary" variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Example;
