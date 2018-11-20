import React, {Component} from 'react'
import {
  Button,
  Container,
  Header,
  Segment,
  Modal,
  Embed,
} from 'semantic-ui-react'

const projects = [{
  name: 'Capstone - WIREHEAD',
  detail: `First Instead of focusing on content creation and hard work, we have learned how`,
  image: 'favicon.png',
  url: '2Q_PyxAE3Mo'
},{
  name: 'Stackaton Proejct - 3D Game',
  detail: `Second Instead of focusing on content creation and hard work, we have learned how`,
  image: 'favicon.png',
  url: `OuLYWN4k3nk`
},{
  name: 'Grace Shopper Project - Maskot',
  detail: `Third Instead of focusing on content creation and hard work, we have learned how`,
  image: 'favicon.png',
  url: `OuLYWN4k3nk`
}]

class Project extends Component {
  constructor() {
    super()
    this.state = {

    }

  }

  render() {
    return (
      <Segment style={{ padding: '8em 0em' }} vertical
      id="project">
      <Container>
        <Header as='h2' style={{ fontSize: '3em', marginBottom: '1em'}} id="projectHeader">Project</Header>
        <div className="projectGrid">
        {
          projects.map((project, idx)=>{
            return (
            <div key={idx} id="projectCard">
              <div id="projectCardContent">
              <div id="PJpadding">
              <p style={{ fontSize: '1.33em' }}>
                {project.detail}
              </p>
              <Modal
                trigger={
                <Button basic color='teal'>Read more</Button>
                }>
                <Modal.Header>{project.name}</Modal.Header>
                <Modal.Content image>
                  <div className="modalContent">
                  <Embed
                  id={project.url}
                  placeholder={project.image}
                  source='youtube'
                  />
                  <h2 className="title">Edit Product</h2>
                  <Modal.Description>
                    {project.detail}
                  </Modal.Description>
                  </div>
                </Modal.Content>
              </Modal>
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
