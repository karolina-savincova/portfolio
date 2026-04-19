import './App.css'

function App() {

  return (
    <>
      <section id="title">
        <div>
          <h1> {"{ Karolina Savincova }"} </h1>
          <p>
            Full-Stack Developer
          </p>
        </div>
      </section>

      <section id="card-section">
        <div id="docs">
          <h2>Work experience</h2>
          <p>Previous work, current projects, and certifications</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/karolina-savincova/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/portfolio/linkedin-icon.svg"></use>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div id="docs">
          <h2>Projects</h2>
          <p>List of personal projects</p>
          <ul>
            <li>
              <a href="https://github.com/karolina-savincova" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/portfolio/github-icon.svg"></use>
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="footer"></section>
    </>
  )
}

export default App
