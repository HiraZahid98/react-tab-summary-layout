import React from 'react'
import { Container, Row, Col, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import SideCard from './SideCard'
import DataTable from './DataTable'
const Summary = () => {
  return (
    <>
      {/* top_row */}
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <h1 className='mt-5 mb-5'>Summary</h1>
          </Col>
          <Col className='mt-5 mb-5 ' xs={12} sm={6} md={6}>
            <ButtonGroup >
              <Button variant="secondary">Table View</Button>
              <Button variant="secondary">Horizontal View</Button>
              <Button variant="secondary">Vertical View</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>


      <Container>
        <Row>
          {/* card_column */}
          <Col xs={12} sm={12} md={12} lg={4} className='align-items-center '>
            <SideCard />
          </Col>

          {/* table_colmun */}
          <Col xs={12} sm={12} md={12} lg={8}>
            <Row className='mb-2'>
              <Col md={12}>
                <h5 className='mb-4'>Cases Assigned</h5>
              </Col>

              <Col md={4} className='ms-auto'>
                <InputGroup>
                  <InputGroup.Text id="btnGroupAddon">
                    <img src="https://img.icons8.com/ios-filled/24/000000/search--v1.png" />
                  </InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Search"
                  />
                </InputGroup>
              </Col>

              <Col md={4}>
                <FormControl type='date' />
              </Col>

              <Col className='ms-auto' md={4}>
                <Button variant="outline-light">
                  <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/24/000000/external-refresh-arrow-kmg-design-glyph-kmg-design-1.png" />
                </Button>
              </Col></Row>

            <Row>
              <Col sm={12}>
                <DataTable />
              </Col>
            </Row>
          </Col>


        </Row>
      </Container>
    </>
  )
}

export default Summary