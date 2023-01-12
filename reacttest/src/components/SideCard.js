import React from 'react'
import {Card} from 'react-bootstrap'
const SideCard = () => {
  return (
    <>
        <Card style={{ width: '18rem' }} className="mb-2">
    <Card.Header className='text-center'>Contact Assigned</Card.Header>
    <Card.Body>
      <Card.Title className='text-center'> 10 </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }} className="mb-2">
    <Card.Header className='text-center'>Tasks</Card.Header>
    <Card.Body>
      <Card.Title className='text-center'> 0 </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }} className="mb-2">
    <Card.Header className='text-center'>Appointments</Card.Header>
    <Card.Body>
      <Card.Title className='text-center'> 1 </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }} className="mb-2">
    <Card.Header className='text-center'>Documents</Card.Header>
    <Card.Body>
      <Card.Title className='text-center'> 8 </Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }} className="mb-2">
    <Card.Header className='text-center'>Action Items</Card.Header>
    <Card.Body>
      <Card.Title className='text-center'> 0 </Card.Title>
    </Card.Body>
  </Card>
    </>
  )
}

export default SideCard