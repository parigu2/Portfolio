import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Modal
} from 'semantic-ui-react'
import {HomepageHeading, FormEmail} from './index'
import axios from 'axios'

class MobileContainer extends Component {
  // state = {}
  constructor() {
    super()
    this.state = {
      sender: '',
      name: '',
      organization: '',
      subject: '',
      message: '',
      modalOpen: false
    }
    this.textChange = this.textChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

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
  }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' href="home">
              Home
            </Menu.Item>
            <Menu.Item as='a' href="#intro">About</Menu.Item>
            <Menu.Item as='a' href="#skill">Skill</Menu.Item>
            <Menu.Item as='a' href="#project">Project</Menu.Item>
            <Menu.Item as='a' href="#footer">Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
              id="#home"
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>

                    <Modal trigger={<Button inverted
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

                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer
