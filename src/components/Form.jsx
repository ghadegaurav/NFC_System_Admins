import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
import '../styles/Form.css'
export default function Form1() {
  return (
    <div>
            <Container className="mt-5">
      <h2>Simple Textbox</h2>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Text:</Form.Label>
          <Form.Control type="text" placeholder="Type something..." />
        </Form.Group>
      </Form>
    </Container>
    </div>
  )
}
