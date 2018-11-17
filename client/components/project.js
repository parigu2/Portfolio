import React from 'react'
import {
  Button,
  Container,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react'

const projects = [{
  name: 'Capstone - WIREHEAD',
  detail: `First Instead of focusing on content creation and hard work, we have learned how to master the
  art of doing nothing by providing massive amounts of whitespace and generic content that
  can seem massive, monolithic and worth your attention.`,
  image: 'favicon.png',
  url: 'https://youtu.be/2Q_PyxAE3Mo'
},{
  name: 'Stackaton Proejct - 3D Game',
  detail: `Second Instead of focusing on content creation and hard work, we have learned how to master the
  art of doing nothing by providing massive amounts of whitespace and generic content that
  can seem massive, monolithic and worth your attention.`,
  image: 'favicon.png',
  url: 'https://www.youtube.com/watch?v=OuLYWN4k3nk&feature=youtu.be'
},{
  name: 'Grace Shopper Project - Maskot',
  detail: `Third Instead of focusing on content creation and hard work, we have learned how to master the
  art of doing nothing by providing massive amounts of whitespace and generic content that
  can seem massive, monolithic and worth your attention.`,
  image: 'favicon.png',
  url: 'https://www.youtube.com/watch?v=OuLYWN4k3nk&feature=youtu.be'
}]

const Project = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Container text>
      <Header as='h2' style={{ fontSize: '3em', margin: '1em 0em'}}>Project</Header>
      {
        projects.map(project=>{
          return (
          <div>
          <Header as='h3' style={{ fontSize: '2em' }}>
            {project.name}
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            {project.detail}
          </p>
          <Button as='a' size='small'>
            Read More
          </Button>
          <Divider
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          />
        </div>)
        })
      }
      <Header as='h3' style={{ fontSize: '2em' }}>
        Capstone - WIREHEAD
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        Instead of focusing on content creation and hard work, we have learned how to master the
        art of doing nothing by providing massive amounts of whitespace and generic content that
        can seem massive, monolithic and worth your attention.
      </p>
      <Button as='a' size='large'>
        Read More
      </Button>
      <Divider
        as='h4'
        className='header'
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <a href='#'>Case Studies</a>
      </Divider>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Did We Tell You About Our Bananas?
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
        it's really true. It took years of gene splicing and combinatory DNA research, but our
        bananas can really dance.
      </p>
      <Button as='a' size='large'>
        I'm Still Quite Interested
      </Button>
    </Container>
  </Segment>
)

export default Project
