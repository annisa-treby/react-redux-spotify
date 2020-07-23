import React from "react";
import {NavLink} from "react-router-dom";
import {Button, Card, CardHeader, Col, Row, Table} from "reactstrap";
import FaIcon from "../../Icons/FaIcon";
import {connect} from "react-redux";

class TableOfArtist extends React.Component{
    generateTableRows =() => {
        const {artists, handleEditButton, handleDeleteButton} = this.props;
        let rows = (
            <tr>
                <td colSpan={9} className={"table-warning text-center"}>
                    <strong>
                        <em>No artist(s) yet.</em>
                    </strong>
                </td>
            </tr>
        );
        if (artists.length > 0) {
            rows = artists.map((artist, index) => {
                return (
                    <tr key={{ index }}>
                        <th scope="row">{index + 1}</th>
                        <td>{artist.name}</td>
                        <td>{artist.originPlace}</td>
                        <td>{artist.gender}</td>
                        <td>{artist.debutYear}</td>

                        <td>
                            <NavLink to={`/artist/${artist.id}`}>
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
                                onClick={() => handleEditButton(artist.id)}
                            >Edit
                            </Button>
                        </td>
                        <td>
                            <Button
                                type={"button"}
                                color={"danger"}
                                size={"sm"}
                                className={"shadow"}
                                onClick={() => handleDeleteButton(artist.id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                );
            });
        }
        return rows;
    };


    render() {
        const {artists}= this.props
        return(
            <Card className="shadow-lg">
                <CardHeader tag="strong">
                    <Row>
                        <Col sm="2">
                            <NavLink to="/home" text-content="flex-start">
                                <FaIcon icon="fas home" size="2x" />
                            </NavLink>
                        </Col>
                        <Col sm="8" text-content="center"> List Artists ({artists.length})</Col>
                        <Col sm="2">
                            <NavLink to="/artists/formArtist" text-content="flex-end">
                                <FaIcon icon="fas plus" /> Artist
                            </NavLink>
                        </Col>
                    </Row>
                </CardHeader>
                <Table hover responsive>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Origin Place</th>
                        <th>Gender</th>
                        <th>debut</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>{this.generateTableRows()}</tbody>
                </Table>
            </Card>
        )
    }
}

function mapStateToProps(state) {
return {...state}
}

function mapDispatchToProps(dispatch) {
return{
    handleEditButton : (payload)=>dispatch({type:'HANDLE_EDIT_BUTTON', payload}),
    handleDeleteButton : (payload)=>dispatch({type:'HANDLE_DELETE_BUTTON', payload})
}
}
export default connect(mapStateToProps, mapDispatchToProps) (TableOfArtist);