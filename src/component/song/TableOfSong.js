import React from 'react';
import {Button, Card, CardHeader, Table, Row, Col, Input} from 'reactstrap';
import {NavLink} from "react-router-dom";
import FaIcon from "../../Icons/FaIcon";
import {connect} from "react-redux";

class TableOfSong extends React.Component{
generateTableRows =() => {
    const {songs,handleEditButton, handleDeleteButton, keywords} = this.props;

    const filteredSong = keywords && keywords.length>0 ? songs.filter((song)=>{
        if(song.title.toLowerCase().includes(keywords)) return song;
        }) : songs;

    let rows = (
        <tr>
            <td colSpan={9} className={"table-warning text-center"}>
                <strong>
                    <em>No song(s) yet.</em>
                </strong>
            </td>
        </tr>
    );

        if(filteredSong.length===0){
            rows = (
                <tr>
                    <td colSpan={9} className={"table-warning text center"}>
                        <strong><em>No guest(s) found</em></strong>

                    </td>
                </tr>
            )
        }

    if (songs.length > 0) {
            rows = songs.map((song, index) => {
                return (
                    <tr key={{ index }}>
                        <th scope="row">{index + 1}</th>
                        <td>{song.title}</td>
                        <td>{song.genre}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.duration}</td>
                        <td>{song.releaseYear}</td>
                        <td>
                          <NavLink to={`/song/${song.id}`}>
                          <Button
                        type={"button"}
                        color={"info"}
                        size={"sm"}
                        className={"shadow"}> Detail
                          </Button>
                      </NavLink>
                      </td>
                      <td>
                            <Button
                                type={"button"}
                                color={"warning"}
                                size={"sm"}
                                className={"shadow"}
                                onClick={() => handleEditButton(song.id)}
                            >Edit
              </Button>
                        </td>
                        <td>
                            <Button
                                type={"button"}
                                color={"danger"}
                                size={"sm"}
                                className={"shadow"}
                                onClick={() => handleDeleteButton(song.id)}
                            >Delete</Button>
                        </td>
                    </tr>
                );
            });
        }
        return rows;
    }


    render(){
        const { keywords, handleSearch, songs}= this.props;
        return (
          <Card className="shadow-lg">
            <CardHeader tag="strong">
              <Row>
                <Col sm="1">
                  <NavLink to="/home" text-content="flex-start">
                    <FaIcon icon="fas home" size="2x" />
                  </NavLink>
                </Col>
                <Col sm="10" text-content="center"> Collection of song ({songs.length})</Col>
                <Col sm="1">
                  <NavLink to="/songs/formSong" text-content="flex-end">
                    <FaIcon icon="fas plus" /> Song
                  </NavLink>
                </Col>
              </Row>
                <Row>
                    <Col xs={3} sm={2}>
                        <FaIcon icon={"fas search"} size={"2x"} text-content="flex-end"/>
                    </Col>
                    <Col >
                        <Input type={"text"} value={keywords} onChange={handleSearch} placeholder={"Search..."}/>
                    </Col>
                </Row>
            </CardHeader>
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>Duration</th>
                  <th>ReleaseYear</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>{this.generateTableRows()}</tbody>
            </Table>
          </Card>
        );}
}

function mapStateToProps(state) {
return {...state}
}

function mapDispatchToProps(dispatch) {
return{
    handleEditButton : (payload) => dispatch({type:'HANDLE_EDIT_BUTTON', payload}),
    handleDeleteButton : (payload) => dispatch({type:'HANDLE_DELETE_BUTTON', payload}),
    handleSearch : (payload) => dispatch({type:'HANDLE_SEARCH', payload})
}
}
export default connect(mapStateToProps, mapDispatchToProps)(TableOfSong);