import React from "react";
import {Col, Container, Row} from "reactstrap";
import {Route, Switch, withRouter} from "react-router-dom";
import SongInfo from "../song/SongInfo";
import TableOfArtist from "./TableOfArtist"
import FormForArtist from "./FormForArtist"
import {createStore} from "redux";
import ArtistReducer from "../../reducers/ArtistReducer";
import {Provider} from "react-redux";

const artistStore = createStore(ArtistReducer)

class Artist extends React.Component{

    render() {
        return (
            <Container fluid>
                <Provider store={artistStore}>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/artists" exact strict component={TableOfArtist}></Route>
                            <Route path="/artists/formArtist" component={FormForArtist}></Route>
                            <Route path="/artist/:id"><SongInfo/></Route>
                        </Switch>
                    </Col>
                </Row>
                </Provider>
            </Container>
        )
    }

}
export default withRouter(Artist);