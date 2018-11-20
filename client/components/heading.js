import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Header,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content=' '
      inverted
      style={{
        fontSize: mobile ? '4em' : '8em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '2.8em' : '3.5em',
      }}
    />
    <p id="cssAnimation"
      style={{
        fontSize: mobile ? '0.5em' : '1em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1em' : '3em',
      }}
    >Fullstack Software Developer<span>Minkyu Roger Yang</span>fdfd</p>
    <p style={{ fontSize: mobile ? '1em' : '1.33em' }}>
      <i>"Everything you can imagine is real"<br/>
      -Pablo Picasso-</i>
    </p>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading
