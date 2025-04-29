import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default App;