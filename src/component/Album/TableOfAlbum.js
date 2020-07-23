import React from "react";
import {Button, Card, CardHeader, Col, Row, Table} from "reactstrap";
import {NavLink} from "react-router-dom";
import FaIcon from "../../Icons/FaIcon";
import {connect} from "react-redux";

class TableOfAlbum extends React.Component{

    generateTableRows=()=>{
        const {albums, handleDeleteButton, handleEditButton} = this.props
        let rows = (
            <tr>
                <td colSpan={9} className={"table-warning text-center"}>
                    <strong>
                        <em>No album(s) yet.</em>
                    </strong>
                </td>
            </tr>
        );
        if(albums.length>0){
            rows= albums.map((album, index)=>{
                return(
                <tr key={{ index }}>
                    <th scope="row">{index + 1}</th>
                    <td>{album.name}</td>
                    <td>{album.releaseYear}</td>

                    <td>
                        <NavLink to={`/artist/${album.id}`}>
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
                            onClick={() => handleEditButton(album.id)}
                        >Edit
                        </Button>
                    </td>
                    <td>
                        <Button
                            type={"button"}
                            color={"danger"}
                            size={"sm"}
                            className={"shadow"}
                            onClick={() => handleDeleteButton(album.id)}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
                )
            })
        }
        return rows
    }

    render() {
        const {albums}= this.props
        return (
            <Card className="shadow-lg">
                <CardHeader tag="strong">
                    <Row>
                        <Col sm="2">
                            <NavLink to="/home" text-content="flex-start">
                                <FaIcon icon="fas home" size="2x" />
                            </NavLink>
                        </Col>
                        <Col sm="8" text-content="center"> List Albums</Col>
                        <Col sm="2">
                            <NavLink to="/albums/formAlbum" text-content="flex-end">
                                <FaIcon icon="fas plus" /> Album
                            </NavLink>
                        </Col>
                    </Row>
                </CardHeader>
                <Table hover responsive>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Release Year</th>
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
    handleEditButton : (payload) => dispatch({type:'HANDLE_EDIT_BUTTON', payload}),
    handleDeleteButton : (payload) => dispatch({type : 'HANDLE_DELETE_BUTTON', payload}),

}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableOfAlbum);