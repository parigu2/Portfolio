import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

const Introduction = () => (
  <Segment style={{ padding: '8em 0em' }} vertical id="intro">
  <Grid container stackable verticalAlign='middle'>
    <Header as='h2' style={{ fontSize: '2.5em', fontFamily: 'Anton', letterSpacing: '0.15em' }}>
      What is Minkyu-Script?
    </Header>
    <Grid.Row>
      <Grid.Column width={8}>
        <Header as='h3' style={{ fontSize: '1.7em' }}>
          Goal-oriented programming
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          <i>To step forward to a better life, I like to make long and short term plans and achieve the goals by stages.  This systematic method guide me to right direction and done working in time</i>
        </p>
        <Header as='h3' style={{ fontSize: '1.7em' }}>
          Unlimited compatibility
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          <i>I don't afraid to learn a new technology and confident in my ability to quickly learn.  In this improvement, I can fit in many roles to work.<br/>Also, I'm a gentle disposition person to makes feel comfortable to others, I love to bond into social group in my spare time</i>
        </p>
      </Grid.Column>
      <Grid.Column floated='right' width={6}>
        <Image bordered rounded size='large' src='profile.jpeg' />
      </Grid.Column>
    </Grid.Row>
    {/* <Grid.Row>
      <Grid.Column textAlign='center'>
        <Button size='huge'>Check Them Out</Button>
      </Grid.Column>
    </Grid.Row> */}
  </Grid>
  </Segment>
)

export default Introduction


