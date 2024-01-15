import {Container, Row, Col, Button} from "react-bootstrap"
import nasgorimage from "../assets/img/nasgor.png"
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
          <h1>
          <div className="mb-4">
          <span className="split-text">Selamat</span>
          <span className="split-text-highlight"> Datang</span>
          </div>
          </h1>
          <span>Di Kedai Katresna rasakan sensasi</span> <br />makanan
          <p className="mb-4"></p>
          <Button href='LoginPage' variant="danger rounded-2 me-2 mb-xs-0 mb-2">Masuk</Button>
          </Col>
          <Col lg="6" className="pt-lg-0-5">
            <img src={nasgorimage} alt="nasgor-img" />
          </Col>
        </Row>
      </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  )
}

export default HomePage