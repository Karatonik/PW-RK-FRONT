import React, { Component } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import axios from "axios";

export default class AddArticle extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: this.title,
      header: this.header,
      text: this.text,
    };

    const config = {
      headers: {
         Authorization: 'Bearer ' +localStorage.getItem('token'),
        'Accept' : 'application/json',
        'Access-Control-Expose-Headers': 'Authorization'
        //'Access-Control-Allow-Origin' : 'http://localhost:3000',
        //'Access-Control-Allow-Methods' : 'POST'
      },
    };
    axios
      .post(
        "https://pw-page.herokuapp.com/admin",data,config)
      .then((res) => {
        //console.log("Current token: ",localStorage.getItem('token'));
        //console.log("text is: ", data.text);
        this.setState({});
        console.log(res);
        alert("Article created succeffully!");
        window.location.reload();
      })
      .catch((err) => {
        this.setState({
          cls: "danger",
        });
      });
  };
  updateArticle = event =>{
    event.preventDefault();
    const article = {
        title:this.title,
        header:this.header,
        text:this.text
    };
    const config = {
      headers: {
         Authorization: 'Bearer ' +localStorage.getItem('token'),
        'Accept' : 'application/json',
        'Access-Control-Expose-Headers': 'Authorization'
        //'Access-Control-Allow-Origin' : 'http://localhost:3000',
        //'Access-Control-Allow-Methods' : 'POST'
      },
    };
    const id= this.props.match.params.id
    axios.put('https://pw-page.herokuapp.com/admin/'+id,article,config).then(
      response=>{
        if(response.data!=null){
          this.setState({})
          alert("Article updated succeffully!");
          return this.props.history.push("/posts");
        }else{
          console.log("Nie udało się edytować")
        }
      }
    )
  }
  render() {

    return (
      <Card
        style={{
          backgroundColor: "#339933",
          width: "800px",
          marginLeft: "32%",
          marginTop:'2%'
        }}
      >
        <Card.Header>
          <Icon component={AddBoxIcon} style={{ marginLeft: "-90%" }} />
          Add article
        </Card.Header>
        <Form onSubmit={this.handleSubmit}>
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  name="title"
                  onChange={(e) => (this.title = e.target.value)}
                  placeholder="Title"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Header</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  name="header"
                  onChange={(e) => (this.header = e.target.value)}
                  placeholder="Header"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Text</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  name="text"
                  onChange={(e) => (this.text = e.target.value)}
                  placeholder="Text"
                />
              </Form.Group>
              <Button
                style={{ marginRight: "6px", marginTop: "4%" ,marginLeft:'1%'}}
                size="sm"
                className="buttonW"
                variant="success"
                type="submit"
                onSubmit={this.handleSubmit}
              >
                <Icon component={SaveIcon}/>
                Save
              </Button>{" "}
              <Button
                style={{ marginTop: "4%" }}
                size="sm"
                className="buttonW"
                variant="info"
                type="reset"
              >
                <Icon component={RestoreFromTrashIcon} />
                Reset
              </Button>{" "}
            </Form.Row>
          </Card.Body>
        </Form>
      </Card>
    );
  }
}
