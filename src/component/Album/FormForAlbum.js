import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import FaIcon from "../../Icons/FaIcon";
import {connect} from "react-redux";

class FormForAlbum extends React.Component{

    handleSave=(event)=>{
        event.preventDefault();

        const { form, albums, resetForm, createAlbum, updateAlbum } = { ...this.props };
        if (form.id > 0) {
            updateAlbum(form)
        } else {
            form.id = albums.length + 1;
            createAlbum(form)
        }
        resetForm();
    };

    isValidForm=()=> {
        const {form} = {...this.props}

        return form.name.trim().length >0 && form.releaseYear.trim().length >0
    }

    render() {
        const {form, handleInputChange}=this.props
        return(
            <Card>
                <CardHeader>Insert New Album</CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleSave}>
                        <FormGroup row>
                            <Label sm={3} for="name">
                                Name
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    id="name"
                                    for="name"
                                    value={form.name}
                                    onChange={(event) =>
                                        handleInputChange("name", event.target.value)
                                    }
                                    placeholder="Enter album name"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3} for="name">
                                Release Year
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    id="releaseYear"
                                    for="releaseYear"
                                    value={form.releaseYear}
                                    onChange={(event) =>
                                        handleInputChange("releaseYear", event.target.value)
                                    }
                                    placeholder="Enter releaseYear"
                                />
                            </Col>
                        </FormGroup>

                        <Button type="submit" disabled={!this.isValidForm}>
                            Save
                        </Button>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col sm="2">
                            <NavLink to="/home" text-content="flex-start">
                                <FaIcon icon="fas home" size="2x" />
                            </NavLink>
                        </Col>
                        <Col sm="8"></Col>
                        <Col sm="2">
                            <NavLink to="/albums" text-content="flex-end">
                                <FaIcon icon="fas music" /> Album
                            </NavLink>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        )
    }
}

function mapStateToProps(state) {
return{...state}
}

function mapDispatchToProps(dispatch) {
return{
    handleInputChange : (inputName, inputValue)=> dispatch({type:'HANDLE_INPUT_CHANGES', payload:{inputName, inputValue}}),
    createAlbum : (payload) => dispatch({type:'CREATE_ALBUM', payload}),
    updateAlbum : (payload) => dispatch({type:'UPDATE_ALBUM', payload}),
    resetForm : () => dispatch({type : 'RESET_FORM'})
}
}
export default connect(mapStateToProps, mapDispatchToProps)(FormForAlbum)