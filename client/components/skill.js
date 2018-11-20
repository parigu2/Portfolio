import React from 'react'
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'

const Skill = () => (
  <Segment style={{ padding: '0em' }} vertical id="skill">
    <Grid celled='internally' columns='equal' stackable textAlign='center'>
      <Grid.Row textAlign='center' id="skillContent">
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "Skill"
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            JavaScript,
            Node.js,
            C#<br/>
            CSS,
            HTML5,
            jQuery<br/>
            Sequelize,
            SQL,
            EXPRESS<br/>
            AJAX,
            Webpack,
            REST<br/>
            React,
            Redux,
            React Native
          </p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "Dev Tool"
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Unity,
            Cocos Creator<br/>
            Bootstrap,
            Semantic UI,
            Bulma<br/>
            Git,
            Waffle.io,
            Illustrator CS5<br/>
            Adobe PhotoShop,
            Indesign CS,
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Skill
