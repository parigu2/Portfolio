import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Modal
} from 'semantic-ui-react'
import {HomepageHeading, FormEmail} from './index'

class DesktopContainer extends Component {
  constructor() {
    super()
    this.state = {
      sender: '',
      subject: '',
      message: '',
      modalOpen: false
    }
    this.textChange = this.textChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
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

    this.setState({modalOpen: false})
    alert('Thank you, confirmation e-mail is on the way')
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
              size='large'
            >
              <Container>
                <Menu.Item as='a' href="#home">
                  Home
                </Menu.Item>
                <Menu.Item as='a' href="#intro">About</Menu.Item>
                <Menu.Item as='a' href="#skill">Skill</Menu.Item>
                <Menu.Item as='a' href="#project">Project</Menu.Item>
                <Menu.Item as='a' href="#footer">Contact</Menu.Item>
                <Menu.Item position='right'>

                <Modal trigger={<Button inverted={!fixed} primary={fixed}
                style={{ marginLeft: '0.5em' }}
                onClick={this.handleOpen}
                >E-MAIL</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Modal.Header>Edit Product</Modal.Header>
                <Modal.Content image>
                  {/* <Image wrapped size='medium' src={this.state.imageUrl} /> */}
                    {/* <h2 className="title">Edit Product</h2> */}
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
