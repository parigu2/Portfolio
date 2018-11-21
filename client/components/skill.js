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
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', display: 'flex', justifyContent: 'center'}}>
          <div id="skillEachContent" >
          <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Anton', letterSpacing: '0.2em' }}>
            "SKILL"
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
          </div>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', display: 'flex', justifyContent: 'center'}}>
        <div id="skillEachContent" >
          <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Anton', letterSpacing: '0.2em' }}>
            "USE"
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
            InDesign,
          </p>
        </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Skill
