import { createTheme, ThemeProvider } from "@mui/material";
import { storiesOf } from "@storybook/react";
import { ButtonComponent } from "./Button";
import CardComponent from "./Card";

const customTheme = createTheme();
storiesOf('Mui Theme', module)
// .addDecorator(MuiThme)
//   .add('Typography', () => )   add typography component
  .add('Card and media Query', () => (
    <CardComponent />
  ))
  .add('Button', () => (
    <ButtonComponent child='Button' />
  ))