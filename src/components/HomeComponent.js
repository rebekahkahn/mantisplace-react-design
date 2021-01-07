import React from 'react';
import { Col, Row, CardImg } from 'reactstrap';
import MantisGalore from '../shared/mantis_galore.png';

function Home(props) {
    return (
        <React.Fragment>
            <Row className="mr-0 ml-0 the-top">
                <Col className="mt-2 ml-0 pl-0 title-container">
                    <h1>Welcome!</h1>
                </Col>
            </Row>

            <Row>
                <Col sm={6} className="d-flex flex-fill h-100 title-container">
                    Since 2006, Mantis Place has had the longest online and largest selection
                    of Praying Mantis Pets available in the world!<br /><br />
                                
                    I supplied the original owner of the site, as he had another business this was a part time hobby for 
                    him. When it quickly caught on, he became too busy to continue and sold it to me. I have loved my business
                    at the onset and continue to today. Praying mantises are unique pets for people of all ages and walks of
                    life. I never heard of anyone getting them and not liking them or being afraid of them. People simply
                    love them and their attitudes! Try one, as the saying goes - you will like them.<br /><br />

                    Shortly after taking over the business, I had to trademark the "Mystery Mantis" as sometimes the little 
                    guys would get loose and it was hard to tell one from another. That's how the mystery mantis came about!
                </Col>
                <Col sm={6}>
                    <CardImg src={MantisGalore} class="card-img-top rounded-0" alt="Mantises on a log"/>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Home;