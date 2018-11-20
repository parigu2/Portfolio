import React, {Component} from 'react'
import {
  Container,
  Grid,
  Header,
  Segment,
  Button,
  Popup,
  Modal,
  Message,
  TransitionablePortal
} from 'semantic-ui-react'
import {FormEmail} from './index'
import axios from 'axios'

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      sender: '',
      name: '',
      organization: '',
      subject: '',
      message: '',
      modalOpen: false,
      open: false
    }
    this.textChange = this.textChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.transitionOpen = this.transitionOpen.bind(this)
    this.transitionEnd = this.transitionEnd.bind(this)
  }
  handleOpen() {
    this.setState({modalOpen: true})
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  textChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    axios.post('/api/mail', this.state)

    this.setState({
      sender: '',
      name: '',
      organization: '',
      subject: '',
      message: '',
      modalOpen: false
    })

    setTimeout(this.transitionOpen, 500)
    setTimeout(this.transitionEnd, 3000)
  }

  transitionOpen() {
    this.setState({
      open: true
    })
  }

  transitionEnd() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }} id="footer">
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row id="icons">
              <Popup
                trigger={<Button circular color='grey' icon='github' as='a' href="https://github.com/parigu2"/>}
                content='Github'
                position='top center'
              />
              <Popup
                trigger={<Button circular color='twitter' icon='blogger b' as='a' href='https://devcarp.com/'/>}
                content='Blog'
                position='top center'
              />
              <Popup
                trigger={<Button circular color='linkedin' icon='linkedin' as='a' href='https://www.linkedin.com/in/minkyuryang/'/>}
                content='Linked-in'
                position='top center'
              />
              <Popup
                trigger={<Button circular color='instagram' icon='instagram' as='a' href='https://www.instagram.com/min_q87/'/>}
                content='Instagram'
                position='top center'
              />
              <Modal trigger={<Popup
                trigger={<Button circular color='google plus' icon='envelope'
                onClick={this.handleOpen}/>}
                content='E-mail'
                position='top center'
              />}
              open={this.state.modalOpen}
              onClose={this.handleClose}>
              <Modal.Header>To Minkyu Yang</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <FormEmail
                  textChange={this.textChange}
                  handleSubmit={this.handleSubmit}
                  value={this.state}
                  close={this.handleClose}
                  />
                </Modal.Description>
              </Modal.Content>
              </Modal>

              <TransitionablePortal open={this.state.open} transition={{ animation: 'fade', duration: '500' }}>
                <Message positive style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
                  <Header>The message sent successfully!</Header>
                  <br/><p>I will response you as soon as possible</p>
                  <p>Confirmation is on the way to you</p>
                </Message>
              </TransitionablePortal>

            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Minkyu Roger Yang
                </Header>
                <p></p>
                <p style={{ fontSize: '0.85em' }}>
                  Fullstack Software Engineer<br/>
                  Copyright © 2018 Minkyu Roger Yang <br/>
                  Handcrafted
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}


// const Footer = () => (
//   <Segment inverted vertical style={{ padding: '5em 0em' }} id="footer">
//     <Container>
//       <Grid divided inverted stackable>
//         <Grid.Row id="icons">
//           <Popup
//             trigger={<Button circular color='grey' icon='github' as='a' href="https://github.com/parigu2"/>}
//             content='Github'
//             position='top center'
//           />
//           <Popup
//             trigger={<Button circular color='twitter' icon='blogger b' as='a' href='https://devcarp.com/'/>}
//             content='Blog'
//             position='top center'
//           />
//           <Popup
//             trigger={<Button circular color='linkedin' icon='linkedin' as='a' href='https://www.linkedin.com/in/minkyuryang/'/>}
//             content='Linked-in'
//             position='top center'
//           />
//           <Popup
//             trigger={<Button circular color='instagram' icon='instagram' as='a' href='https://www.instagram.com/min_q87/'/>}
//             content='Instagram'
//             position='top center'
//           />
//           <Popup
//             trigger={<Button circular color='google plus' icon='envelope'/>}
//             content='E-mail'
//             position='top center'
//           />
//         </Grid.Row>
//         <Grid.Row>
//           <Grid.Column width={7}>
//             <Header as='h4' inverted>
//               Minkyu Roger Yang
//             </Header>
//             <p></p>
//             <p style={{ fontSize: '0.85em' }}>
//               Copyright © 2018 Minkyu Roger Yang <br/>
//               Handcrafted<br/>
//               Fullstack Software Engineer
//             </p>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Container>
//   </Segment>
// )

export default Footer
