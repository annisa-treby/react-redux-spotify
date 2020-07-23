import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import FaIcon from "../../Icons/FaIcon";
import {connect} from "react-redux";

class FormForArtist extends React.Component{

    handleSave = (event) => {
        event.preventDefault();
        const { form, artists, updateArtist, resetForm, createArtist } = { ...this.props };
        if (form.id > 0) {
            updateArtist(form);
            }
         else {
            form.id = artists.length + 1;
            createArtist(form);
        }
        resetForm();
    };

    isValidForm = () => {
        const { form } = this.props;

        return (
            form.name.trim().length > 0 &&
            form.gender.trim().length > 0 &&
            form.originPlace.trim().length > 0 &&
            form.debutYear.trim().length > 0
        );
    };

    render() {
        const {form, handleInputChange}=this.props;

        return(
            <Card>
                <CardHeader>Insert New Artist</CardHeader>
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
                                    placeholder="Enter full name"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3} for="name">
                                Origin Place
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    id="originPlace"
                                    for="originPlace"
                                    value={form.originPlace}
                                    onChange={(event) =>
                                        handleInputChange("originPlace", event.target.value)
                                    }
                                    placeholder="Enter originPlace"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3} for="name">
                                Gender
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    id="gender"
                                    for="gender"
                                    value={form.gender}
                                    onChange={(event) =>
                                        handleInputChange("gender", event.target.value)
                                    }
                                    placeholder="Enter gender"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3} for="name">
                                Debut
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    id="debutYear"
                                    for="debutYear"
                                    value={form.debutYear}
                                    onChange={(event) =>
                                        handleInputChange("debutYear", event.target.value)
                                    }
                                    placeholder="Enter debutYear"
                                />
                            </Col>
                        </FormGroup>
                        <Button type="submit" disabled={!this.isValidForm()}>
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
                            <NavLink to="/artists" text-content="flex-end">
                                <FaIcon icon="fas music" /> Artist
                            </NavLink>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {...state}
}

function mapDispatchToProps(dispatch) {
    return{
        handleInputChange : (inputName, inputValue) => dispatch({type:'HANDLE_INPUT_CHANGES', payload:{inputName, inputValue}}),
        createArtist : (payload) => dispatch({type:'CREATE_ARTIST', payload}),
        updateArtist : (payload) => dispatch({type:'UPDATE_ARTIST', payload}),
        resetForm : () => dispatch({type:'RESET_FORM'})
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(FormForArtist)