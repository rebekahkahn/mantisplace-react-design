import React, { Component } from 'react';
import { Col, Row} from 'reactstrap';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Mantises from './MantisesComponent';
import Sidebar from './SidebarComponent';
import Home from './HomeComponent';
import Videos from './VideosComponent';
import NewArrivals from './NewArrivalsComponent';
import Accessories from './AccessoriesComponent';
import MantisInfo from './MantisInfoComponent';

import { MANTISES } from '../shared/mantises';
import { HEADERS } from '../shared/sidebarnav';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mantises: MANTISES,
            headers: HEADERS,
        };
    }

    render () {
        const HomePage = () => { return ( <Home /> ); };
        const VideosPage = () => { return ( <Videos /> ); };
        const NewArrivalsPage = () => { return ( <NewArrivals /> ); };
        const AccessoriesPage = () => { return ( <Accessories /> ); };
        const MantisWithId = ( {match} ) => {
            return (
                <MantisInfo 
                    mantis={this.state.mantises.filter(mantis => mantis.id === +match.params.mantisId)[0]}
                />
            );
        };

        return (
            <React.Fragment>
                <Header />

                <Row>
                    <Col xs={4} className="d-none d-lg-block">
                        <Sidebar headers={this.state.headers}/>
                    </Col>
                    <Col>
                        <Switch>
                            <Route path='/home' component={HomePage}/>
                            <Route exact path='/mantises' render={() => <Mantises mantises={this.state.mantises} />} />

                            <Route path='/mantises/:mantisId' component={MantisWithId} />

                            <Route path='/videos' component={VideosPage}/>
                            <Route path='/newarrivals' component={NewArrivalsPage}/>
                            <Route path='/accessories' component={AccessoriesPage}/>

                            <Redirect to='/home' />
                        </Switch>
                    </Col>
                </Row>
            
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;

//NOTE: use end of week 3 pages for current task