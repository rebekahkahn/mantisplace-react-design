import React from 'react';
import { Card, CardImg, CardText, CardBody, Col, Row,
         Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMantis( {mantis} ) {
    return (
            <React.Fragment>
            <div>
            <Row className="mt-3">
                <Col xs={5} sm={4}>
                    <Card>
                        <CardImg top src={mantis.image} alt={mantis.name} />
                    </Card>
                </Col>

                <Col>
                    <h1>{mantis.name}</h1>
                    <Card>
                        <CardText>
                            <CardBody>
                                {mantis.description}
                            </CardBody>
                        </CardText>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3 title-container">
                <h1>Recommended Accessories</h1>
                <Card className="mb-4">
                    <CardBody>
                        <CardText>
                            Eventually this will be mapped over an accessories js data file.
                            Also, I am going to change the styling of this page. It's ugly right now.
                        </CardText>
                    </CardBody>
                </Card>
            </Row>
            </div>
            </React.Fragment>
    );
}


function MantisInfo(props) {
    if(props.mantis){
        return (
            <div className="mr-3">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/mantises">Mantises</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.mantis.name}</BreadcrumbItem>
            </Breadcrumb>

            <Col>
                <RenderMantis mantis={props.mantis} />
            </Col>
            </div>

        );
    }
    return <div />;
}

export default MantisInfo;