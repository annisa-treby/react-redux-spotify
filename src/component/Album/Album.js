import React from "react";
import {Col, Container, Row} from "reactstrap";
import {Route, Switch, withRouter} from "react-router-dom";
import FormForAlbum from "./FormForAlbum"
import TableOfAlbum from "./TableOfAlbum"
import {createStore} from "redux";
import {Provider} from "react-redux";
import AlbumReducer from "../../reducers/AlbumReducer";


const storeAlbum = createStore(AlbumReducer)
class Album extends React.Component{

    render() {
        return(
            <Container fluid>
                <Provider store={storeAlbum}>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/albums" exact strict component={TableOfAlbum}></Route>
                            <Route path="/albums/formAlbum" component={FormForAlbum}></Route>
                            <Route path="/album/:id"></Route>
                        </Switch>
                    </Col>
                </Row>
                </Provider>
            </Container>
        )
    }
}
export default withRouter(Album)