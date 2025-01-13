import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Header from "./components/Header";
import BEDTab from "./components/BEDTab";
import TreatGapTab from "./components/TreatGapTab";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Container className="mt-3">
        <Tab.Container defaultActiveKey={"treat-gap"}>
          <Nav className="justify-content-center" variant="pills">
            <Nav.Item>
              <Nav.Link eventKey={"bed-1"}>BED 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bed-2">BED 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bed-3">BED 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="treat-gap">
                Treatment Gap Compensation
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <hr />

          <Tab.Content>
            <Tab.Pane eventKey={"bed-1"}>
              <Row>
                <Col lg={6}>
                  <BEDTab index={1} />
                </Col>
                <Col lg={6}></Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey={"bed-2"}>
              <Row>
                <Col lg={6}>
                  <BEDTab index={2} />
                </Col>
                <Col lg={6}></Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey={"bed-3"}>
              <Row>
                <Col lg={6}>
                  <BEDTab index={3} />
                </Col>
                <Col lg={6}></Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey={"treat-gap"}>
              <TreatGapTab />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      <Footer />
    </>
  );
}

export default App;
