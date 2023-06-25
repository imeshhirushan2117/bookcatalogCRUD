import React from "react";
import { Component } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import "./style.css";
import Table from "@mui/joy/Table";
import BookService from "../../service/BookService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData : {
        id:"",
        name:"",
        price:"",
        author:"",
      }
    }
  }

  submitBooks = async () => {
   
     let formData = this.state.formData;
     let res =await  BookService.postBook(formData)
      console.log(res)
    //  console.log("Form data : " + JSON.stringify(formData));
  };


  render() {
    return (
      <>
        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitBooks}>
          <Grid container className="pt-2" spacing={3}>
            <Grid
              item
              lg={12}
              xs={12}
              sm={12}
              md={12}
              style={{ backgroundColor: "#212122" }}
            >
              <Typography style={{ color: "white" }} variant="h2">
                Book Manage
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle">Book Id</Typography>
              <TextValidator
                id="outlinedbasic"
                placeholder="Book Id"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
                value={this.state.formData.id}

                onChange={(e) => {
                  let formData = e. target.value;
                  this.setState({formData});
                }}
                

                validators={["required"]}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle">Book Name</Typography>
              <TextValidator
                id="outlinedbasic"
                placeholder="Book Name"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
                value={this.state.formData.name}

                onChange={(e) => {
                  let formData = e. target.value;
                  this.setState({formData});
                }}
                validators={["required"]}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle">Book price</Typography>
              <TextValidator
                id="outlinedbasic"
                placeholder="Book Price"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
                value={this.state.formData.price}

                onChange={(e) => {
                  let formData = e. target.value;
                  this.setState({formData});
                }}
                validators={["required"]}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle">The author of the book</Typography>
              <TextValidator
                id="outlinedbasic"
                placeholder="The author of the book"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
                value={this.state.formData.author}

                onChange={(e) => {
                  let formData = e. target.value;
                  this.setState({formData});
                }}
                validators={["required"]}
              />
            </Grid>

            <Box className="btnclss">
              <Button id="saveBtn" color="success"  onClick={this.submitBooks}>
                Save Book
              </Button>
            </Box>
          </Grid>
        </ValidatorForm>
        <Grid contaner style={{ marginTop: "15px" }}>
          <Table aria-label="basic table">
            <thead>
              <tr>
                <th>Book Id</th>
                <th style={{ width: "25%" }}>Book name</th>
                <th>Price</th>
                <th style={{ width: "20%" }}>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B001</td>
                <td>Shalok Hormas</td>
                <td>520</td>
                <td>chandana mendis</td>
              </tr>
            </tbody>
          </Table>
        </Grid>
      </>
    );
  }
}

export default Home;
