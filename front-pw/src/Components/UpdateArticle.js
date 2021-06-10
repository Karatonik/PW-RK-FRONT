import React, { Component } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import axios from "axios";

export default class UpdateArticle extends Component {
    state={
      selectedFile: null
    };


    onFileChange = event => { 
      this.setState({ selectedFile: event.target.files[0] }); 
     // console.log(this.state.selectedFile);
    }; 

    onFileUpload = () => { 
      const id= this.props.match.params.id
      const formData = new FormData(); 
      formData.append("fileParts",this.state.selectedFile);

      console.log(this.state.selectedFile);

      const config = {
        headers: {
           Authorization: 'Bearer ' +localStorage.getItem('token'),
          'Accept' : 'application/json',
          'Access-Control-Expose-Headers': 'Authorization'
        },
      };
      axios.post('https://pw-page.herokuapp.com/admin/img/'+id,formData,config).then(
          res=>{
            if(res.data.id===id){
              alert("Adding was successful !!! , You can add another");
            }else{
              alert("Adding failed");
            }
          }
        )
    }
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
          <div>
            <Card
              style={{
                backgroundColor: "#D0FFC8",
                width: "800px",
                marginLeft: "32%",
                marginTop:'2%'
              }}
            >
              
              <Card.Header>
                <Icon component={AddBoxIcon} style={{ marginLeft: "-90%" }} />
                Edit article
              </Card.Header>
              <Form onSubmit={this.updateArticle }>
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
                      style={{ marginRight: "6px", marginTop: "4%" }}
                      size="sm"
                      className="buttonW"
                      variant="success"
                      type="submit"
                      onSubmit={this.handleSubmit}
                    >
                      <Icon component={SaveIcon} />
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















            <Card
              style={{
                backgroundColor: "#D0FFC8",
                width: "800px",
                marginLeft: "32%",
                marginTop:'2%'
              }}
            >
              
              <Card.Header>
                <Icon component={AddBoxIcon} style={{ marginLeft: "-90%" }} />
                Add photo
              </Card.Header>
              <Card.Body>
              <input type="file" onChange={this.onFileChange} />
              <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
              </Card.Body>
            </Card>

            </div>
          );
        }
      }
      