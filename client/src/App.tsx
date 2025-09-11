import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('')

  const testConnection = async () => {
    try {
      const response = await fetch('/api/health')
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      setMessage('Failed to connect to backend')
    }
  }

  return (
    <div className="App">
      <h1>🏢 CRM Application</h1>
      <button onClick={testConnection}>Test Backend Connection</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default App