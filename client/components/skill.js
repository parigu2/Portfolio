import React from 'react'
import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

const Skill = () => (
  <Segment style={{ padding: '0em' }} vertical id="skill">
    <Grid celled='internally' columns='equal' stackable>
      <Header as='h2'>"What I do"</Header>
      <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "Proficient"
          </Header>
          <p style={{ fontSize: '1.33em' }}>JavaScript, C#, CSS, Node.js, HTML5, Express, Sequelize, SQL, REST, AJAX, Webpack, React, Redux, Git</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "Working Knowledge"
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
            React Native, Waffle.io, Heroku, Mocha, Chai, Illustrator CS5, Adobe PhotoShop, Solidwork, Fortan, Unity, IndexDB
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Skill
