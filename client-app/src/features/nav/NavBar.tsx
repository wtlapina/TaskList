import React from "react";
import { Container, Menu } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logos.png" alt="logo" style={{marginRight: '10px'}} />
            My Todo List
        </Menu.Item>
      </Container>
    </Menu>
  );
};
