import PropTypes from 'prop-types'
import React from 'react'
import {DesktopContainer, MobileContainer, Introduction, Skill, Project, Footer} from './index'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Main = () => (
  <ResponsiveContainer>
    <Introduction/>
    <Skill/>
    <Project/>
    <Footer/>
  </ResponsiveContainer>
)

export default Main
