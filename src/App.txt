import SquarePaymentForm from './SquarePayment'
import { Button, Container } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <Container>
      <h1>My Payment Page</h1>
      <p>
        Ensure you enter the correct test card details from <a href="https://developer.squareup.com/docs/devtools/sandbox/payments" target="_blank">here</a>
      </p>

      <p>
        <SquarePaymentForm  />
      </p>
    </Container>
  )
}

export default App
