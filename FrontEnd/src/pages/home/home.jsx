import React from "react";
import { Component } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Box from '@mui/joy/Box';
import Button from "@mui/joy/Button";
import './style.css';

//rfce
// function home() {
//   return (
//     <>

//     </>

//   )
// }

// export default home

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ValidatorForm  ref="form" className="pt-2" onSubmit={this.submitBooks}>
          <Grid container className="pt-2" spacing={3}>
            <Grid
              item
              lg={12}
              xs={12}
              sm={12}
              md={12}
              style={{ backgroundColor: "#212122" }}
            >
              <Typography  style={{ color: "white" }} variant="h2">Book Manage</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="subtitle">Book Id</Typography>
              <TextValidator
                id="outlinedbasic"
                placeholder="Book Id"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
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
                validators={["required"]}
              />
            </Grid>

            <Box className="btnclss">
            <Button id="saveBtn"color="success">Save</Button>
            <Button id="deleteBtn"color="danger">Delete</Button>
            </Box>

          </Grid>
        </ValidatorForm>
      </>
    );
  }
}
export default Home;
