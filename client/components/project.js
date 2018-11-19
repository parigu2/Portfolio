import React, {Component} from 'react'
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
  Modal,
  Image,
  Embed,
  Reveal,
  Card
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
              <p style={{ fontSize: '1.33em' }}>
                {project.detail}
              </p>
              <Modal
                trigger={<Button basic color='teal'>Read more</Button>}>
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
            </div>)
          })
        }
        </div>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
          <p>Side Project</p>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
      </Container>
    </Segment>
    )
  }
}

export default Project
