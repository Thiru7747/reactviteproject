import { useState } from 'react'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Hello name="Bob"/>
      <Hello name="Mike"/>
    </div>
  )
}

export default App
