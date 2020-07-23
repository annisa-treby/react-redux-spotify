import React from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Col, Input, Button, Row, CardFooter } from 'reactstrap';
import { NavLink } from "react-router-dom";
import FaIcon from "../../Icons/FaIcon";
import {connect} from "react-redux";


class FormForSong extends React.Component{

  handleSave = (event) => {
    event.preventDefault();
    const { form, songs, handleCreate, handleUpdate, resetForm } = { ...this.props };
    if (form.id > 0) {
      handleUpdate(form)

    } else {
      form.id = songs.length + 1;
      handleCreate(form)
    }
    resetForm();
  };

  isValidForm = () => {
    const { form } = this.props;

    return (
        form.title.trim().length > 0 &&
        form.genre.trim().length > 0 &&
        form.album.trim().length > 0 &&
        form.artist.trim().length > 0 &&
        form.duration.trim().length > 0 &&
        form.releaseYear.trim().length > 0
    );
  };

    render (){
        const {form, handleInputChanges}=this.props;
        return (
          <Card className="shadow">
            <CardHeader>Insert New Song</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSave}>
                <FormGroup row>
                  <Label sm={3} for="name">
                    Title 
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      id="title"
                      for="title"
                      value={form.title}
                      onChange={(event) =>
                        handleInputChanges("title", event.target.value)
                      }
                      placeholder="Enter song title"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} for="name">
                    Genre 
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      id="genre"
                      for="genre"
                      value={form.genre}
                      onChange={(event) =>
                        handleInputChanges("genre", event.target.value)
                      }
                      placeholder="Enter song genre"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} for="name">
                    Artist 
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      id="artist"
                      for="artist"
                      value={form.artist}
                      onChange={(event) =>
                        handleInputChanges("artist", event.target.value)
                      }
                      placeholder="Enter artist name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} for="name">
                    Album 
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      id="album"
                      for="album"
                      value={form.album}
                      onChange={(event) =>
                        handleInputChanges("album", event.target.value)
                      }
                      placeholder="Enter album name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} for="name">
                    Duration
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      id="duration"
                      for="duration"
                      value={form.duration}
                      onChange={(event) =>
                        handleInputChanges("duration", event.target.value)
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
                      type="select"
                      id={"year"}
                      for={"year"}
                      onChange={(event) =>
                        handleInputChanges("releaseYear", event.target.value)
                      }
                    >
                      <option>==Choose Year==</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2010</option>
                      <option>2009</option>
                      <option>2008</option>
                      <option>2007</option>
                      <option>2006</option>
                      <option>2005</option>
                      <option>2004</option>
                      <option>2003</option>
                      <option>2002</option>
                      <option>2001</option>
                      <option>2000</option>
                    </Input>
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
                  <NavLink to="/songs" text-content="flex-end">
                    <FaIcon icon="fas music" /> Songs
                  </NavLink>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        );
    }
}

function mapStateToProps(state) {
return {...state}
}

function mapDispatchToProps(dispatch) {
return{
  handleInputChanges : (inputName, inputValue)=> dispatch({type:'HANDLE_INPUT_CHANGES', payload:{inputName, inputValue}}),
  handleUpdate : (payload) => dispatch({type:'UPDATE_SONG', payload}),
  handleCreate : (payload) => dispatch({type : 'CREATE_SONG', payload}),
  resetForm : () => dispatch({type:'RESET_FORM'})
}
}

export default connect(mapStateToProps, mapDispatchToProps) (FormForSong);