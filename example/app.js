import React, {Component} from "react";
import PropTypes from "prop-types";
import theme from "./theme";
import styled, {ThemeProvider} from "../src";

const {Div, Button, H1} = styled;

// app component
export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Div>
          <Div styled={{
            padding: "8px",
            width: "100px",
            height: "100px",
            backgroundColor: "COLOR_BACKGROUND"
          }}>
            Variables
          </Div>

          <Div styled={{separator: {}}}/>

          <H1 styled={{
            scale: 0.5
          }}>
            Custom CSS attributes
          </H1>

          <Div styled={{separator: {}}}/>

          <Div styled={{
            container: {isDark: true}
          }}>
            Custom CSS attributes with multiple parameters
          </Div>

          <Div styled={{separator: {}}}/>

          <Div styled={{
            title: {},
            color: "red"
          }}>
            Easy to override styles
          </Div>

          <Div styled={{separator: {}}}/>

          <Div styled={{
            container: {},
            centerContent: {},
            padding: 0
          }}>
            Easy to merge styles
          </Div>

          <Div styled={{separator: {}}}/>

          <Button disabled={true} styled={{
            button: {isPrimary: true}
          }}>
            Accessing component properties from css
          </Button>
        </Div>
      </ThemeProvider>
    );
  }
}
