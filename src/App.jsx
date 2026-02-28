import './App.css'

function App() {
  return (
    <div className="container">
      <div className="status-badge">Connection Active</div>
      <div className="card">
        <div className="icon-container">
          <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1>Pull Successful</h1>
        <p>If you can see this page, you have successfully pulled the repository and started the development server.</p>
        <div className="footer">
          <div className="step">
            <span className="step-num">1</span>
            <span>Cloned</span>
          </div>
          <div className="step-divider"></div>
          <div className="step">
            <span className="step-num">2</span>
            <span>Installed</span>
          </div>
          <div className="step-divider"></div>
          <div className="step active">
            <span className="step-num">3</span>
            <span>Running</span>
          </div>
        </div>
      </div>
      <p className="hint">Press <code>Ctrl + C</code> to stop the server</p>
    </div>
  )
}

export default App
