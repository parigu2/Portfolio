import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Modal,
  Message,
  TransitionablePortal,
  Header
} from 'semantic-ui-react'
import {HomepageHeading, FormEmail} from './index'
import axios from 'axios'

class DesktopContainer extends Component {
  constructor() {
    super()
    this.state = {
      sender: '',
      name: '',
      organization: '',
      subject: '',
      message: '',
      modalOpen: false,
      open: false,
    }
    this.textChange = this.textChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.transitionOpen = this.transitionOpen.bind(this)
    this.transitionEnd = this.transitionEnd.bind(this)
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

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
      modalOpen: false,
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
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
            id="home"
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              borderless
              size='large'
            >
              <Container>
                <Menu.Item as='a' href="#home">
                  Home
                </Menu.Item>
                <Menu.Item as='a' href="#intro">About</Menu.Item>
                <Menu.Item as='a' href="#skill">Skill</Menu.Item>
                <Menu.Item as='a' href="#project">Project</Menu.Item>
                <Menu.Item as='a' href="#footer">More</Menu.Item>
                <Menu.Item position='right'>
                {/* </Menu.Item> */}

                <Modal trigger={<Button inverted={!fixed} primary={fixed}
                style={{ marginLeft: '0.5em' }}
                onClick={this.handleOpen}
                >E-MAIL</Button>}
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

                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer
