import { Card, Form, Button } from 'react-bulma-components'

export default function Login() {
  return (
    <div>
      <Card className="login" style={{ width: 500, margin: 'auto' }}>
        <Card.Content>
          <Form.Field>
            <Form.Control>
              <Form.Label>Email</Form.Label>
              <Form.Input type="text" />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Form.Label>Password</Form.Label>
              <Form.Input type="password" />
            </Form.Control>
          </Form.Field>
          <Button.Group align="right">
            <Button color="primary">Login</Button>
            <Button color="secondary">Sign up</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </div>
  )
}
