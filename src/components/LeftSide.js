import React, { Fragment } from 'react';

import banner from '../assets/images/banner.jpg';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const LeftSide = () => (
  <Fragment>
    
    <Card>
      <CardImg top width="100%" src={banner} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Reactstrap</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>React - Bootstrap & Reactstrap Application</CardSubtitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
        <Button color="success" className="font-weight-bold">View Profile</Button>
      </CardBody>
    </Card>
    
  </Fragment>
);

export default LeftSide;