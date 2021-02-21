import React from "react";
import "./App.css";
import { Header, Icon } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>
    </div>
  );
}

export default App;
