import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card, Row, Col, CardHeader } from 'reactstrap';


class Home extends React.Component {
    render(){
        return (
          <div>
            <Card>
              <CardHeader>New Release Album</CardHeader>
              <Row>
                <Col sm="8" xs="10">
                  <Carousel class="card mb-2 box-shadow">
                    <div>
                      <img
                      width="100%"
                        src="https://www.seekpng.com/png/detail/216-2160951_shawn-mendes-album-shawn-mendes-capa-do-novo.png"
                        alt="New Album"
                      />
                      <p class="legend" BackgroundColor="trans">Shawn Mendes</p>
                    </div>
                    <div>
                      <img
                      width="100%"
                        src="https://www.pngkit.com/png/detail/119-1190817_dua-lipa-album-cd.png"
                        alt="New Album"
                      />
                      <p class="legend">Dua Lipa</p>
                    </div>
                    <div>
                      <img
                      width="100%"
                      alt="New Album"
                        src="https://images.f2fcdn.net/files/dwinta/2019/kpop/baseball/lengan.png"/>
                    </div>
                  </Carousel>
                </Col>
              </Row>
            </Card>
          </div>
        );
    }
}
export default Home;