import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../Form.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

function AddProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleSubtmit = async (e) => {
    e.preventDefault();

    const API_URL = process.env.REACT_APP_API_URL;

    
    const res = await fetch(`${API_URL}/product`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();

    Swal.fire(
      'Good job!',
      'Successfully added!',
      'success'
    )
    navigate("/home")
 }



  const [product, setProduct] = useState({
    name: " ",
    description: " ",
    state: " ",
  });

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <a onClick={handleShow}>
          Add Product
        </a>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form needs-validation>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                required
              >
                <div className="invalid-feedback">
                Es necesario poner el nombre
                </div>
                <div className="valid-feedback">
                es necesario poner el nombre
                </div>
                <Form.Label>Product</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  autoFocus
                  name="name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button  variant="primary" onClick={handleSubtmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AddProduct;
