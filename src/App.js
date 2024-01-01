import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          This is a test app for deploying React app to Azure Container
          Instances via GitHub Actions.
        </p>
      </header>
    </div>
  )
}

export default App
