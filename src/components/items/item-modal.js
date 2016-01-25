import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default ({show, close, title, body}) => {
	return (
		<Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      	<pre>
          {JSON.stringify(body)}
        </pre>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
	)
}