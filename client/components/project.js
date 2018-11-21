import React, {Component} from 'react'
import {
  Button,
  Container,
  Header,
  Segment,
  Modal,
  Embed,
  Card,
  Image
} from 'semantic-ui-react'

const projects = [{
  name: 'Capstone - WIREHEAD',
  brief: 'Chrome Extension for Time Manage',
  detail: [`Used D3.js to manipulate graphs based on data by selected time period to effective visualization of time spend`, 'Used machine learning with Naive Bayes classification to the extension decides productivity of websites based on collected data', 'Stored data into local storage, IndexDB, instead of SQL for security purpose', 'Created scripts to collect all of the data of current website’s url, title and time in every second', 'Features primarily worked on are collecting and storing the web datas, creating popup page and presenting organized result of data'],
  image: 'wirehead.jpeg',
  url: '2Q_PyxAE3Mo'
},{
  name: 'Stackaton Proejct - 3D Game',
  brief: '3D game in which multiple players',
  detail: [`Won Stackathon in Fullstack Academy - most people’s choice`, 'Developed in C# to create a 3D environment scene running on Unity 3D engine', 'Added Network Manager HUB component for multiple players to be able to host a network game or join an existing game', 'Added component of Network Transform and Network Identity on game objects to connect to server', 'Wrote network behavior player scripts which accept command from local players'],
  image: 'forest.jpeg',
  url: `OuLYWN4k3nk`
},{
  name: 'Grace Shopper Project - Maskot',
  brief: `E-Commerce Website for selling masks`,
  detail: [`Third Instead of focusing on content creation and hard work, we have learned how`],
  image: 'maskot.jpeg'
}]

class Project extends Component {
  // constructor() {
  //   super()
  //   this.state = {

  //   }

  // }

  render() {
    return (
      <Segment style={{ padding: '8em 0em' }} vertical
      id="project">
      <Container>
        <Header as='h2' style={{ fontSize: '3em', marginBottom: '1em', fontFamily: 'Anton', letterSpacing: '0.1em'}} id="projectHeader">PROJECT</Header>
        <div className="projectGrid">
        {
          projects.map((project, idx)=>{
            return (
            <div key={idx} id="projectCard"
            style={{ backgroundImage: `url(${project.image})` }}
            >
              <div id="projectCardContent">
              <div id="PJpadding">
                <Card>
                  <Card.Content>
                    <p style={{ fontSize: '1.33em' }}>
                      {project.brief}
                    </p>
                    <Modal
                      trigger={
                      <Button color='teal'>Read more</Button>
                      }>
                      <Modal.Header>{project.name}</Modal.Header>
                      <Modal.Content image>
                        <div className="modalContent">
                        {
                          project.url ?
                          <Embed
                          id={project.url}
                          placeholder={project.image}
                          source='youtube'
                          /> :
                          <Image src={project.image}/>
                        }
                        <h2 className="title">Project details</h2>
                        <Modal.Description>
                          <ul>
                          {
                            project.detail.map((line, idx)=>
                              <li key={idx}>{line}</li>
                            )
                          }
                          </ul>

                        </Modal.Description>
                        </div>
                      </Modal.Content>
                    </Modal>
                  </Card.Content>
                </Card>
              </div>
              </div>
            </div>)
          })
        }
        </div>
      </Container>
    </Segment>
    )
  }
}

export default Project
