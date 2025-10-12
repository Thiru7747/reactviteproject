import { useState } from 'react'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Hello name="Bob" greet="How are you?"/>
      <Hello name="Mike" greet="How it is going?"/>
    </div>
  )
}

export default App
