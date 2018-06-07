// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';

export default () => {

  return (
    <Navbar inverse collapseOnSelect defaultExpanded>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Mysurance</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>

      </Navbar.Collapse>
    </Navbar>
  );
};
