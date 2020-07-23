import React from "react";
import {Col,Container,Row} from "reactstrap";
import TableOfSong from './TableOfSong.js'
import FormForSong from './FormForSong.js'
import { Switch, Route, withRouter} from 'react-router-dom'
import SongInfo from './SongInfo.js'
import {createStore} from "redux";
import {Provider} from "react-redux";
import SongReducer from "../../reducers/SongReducer";

const songStore = createStore(SongReducer)

class Song extends React.Component {

  render() {

    return (
      <Container fluid>
        <Provider store={songStore}>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/songs" exact strict component={TableOfSong}/>
                <Route path="/songs/formSong" component={FormForSong}/>
                <Route path="/song/:id" component={SongInfo}/>
              </Switch>
            </Col>
          </Row>
        </Provider>
      </Container>
    );
  }
}


export default withRouter(Song);
