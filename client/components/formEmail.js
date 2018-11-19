import React from 'react'
import {Form, Label} from 'semantic-ui-react'

export const FormEmail = props => {
  const { sender, name, organization, subject, message } = props.value

  return (
    <Form onSubmit={event => props.handleSubmit(event)} id="formEmail">
    <Form.Field id="formSpace">
      <Form.Field>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" value={name} placeholder='your name' onChange={event => props.textChange(event)}/>
        {/* <Label pointing>Please enter a value</Label> */}
      </Form.Field>
      <Form.Field>
        <label htmlFor="organization">Organization</label>
        <input type="text" name="organization" value={organization} placeholder='your organization' onChange={event => props.textChange(event)}/>
        {/* <Label pointing>Please enter a value</Label> */}
      </Form.Field>
    </Form.Field>
    <Form.Field>
      <label htmlFor="sender">from</label>
      <input type="text" name="sender" value={sender} placeholder='your e-mail address' onChange={event => props.textChange(event)}/>
      {/* <Label pointing>Please enter a value</Label> */}
    </Form.Field>
    <Form.Field>
      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" value={subject} placeholder='subject'onChange={event => props.textChange(event)}/>
      {/* <Label pointing>Please enter a value</Label> */}
    </Form.Field>
    <Form.Field>
      <label htmlFor="message">Message</label>
      <textarea type="text" name="message" value={message} placeholder='message' onChange={event => props.textChange(event)}/>
      {/* <Label pointing>Please enter a value</Label> */}
    </Form.Field>
    <Form.Button disabled={!sender || !subject || !message}type="submit" color='blue'>Submit</Form.Button>
    </Form>
  )
}

