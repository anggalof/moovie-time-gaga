import React from 'react';
import { Row, Col } from 'react-bootstrap';

class PartnerStudios extends React.Component {
  render() {
		let partnerStudios = [
      {
        id: 'partner0001',
        image: 'img/xxi.png'
      },
      {
        id: 'partner0002',
        image: 'img/cgv-cinemas.png'
      },
      {
        id: 'partner0003',
        image: 'img/blitz-megaplex.png'
      },
      {
        id: 'partner0004',
        image: 'img/cinemaxx.png'
      }
    ];
    return (
      <React.Fragment>
        <Row className="row-wrapper">
          {partnerStudios.map((item) => {
            return (
              <Col md={3} xs={6} key={item.id}>
                <img className="img-partners" alt="partners" src={`${process.env.PUBLIC_URL}/${item.image}`} />
              </Col>
            );
          })}
        </Row>
   		</React.Fragment>
    );
  }
}

export default PartnerStudios;
