import ReactGA from 'react-ga';
import React, {Component} from 'react';

class App extends Component {
  constructor () {
    super ();

    ReactGA.initialize ('UA-80655492-2');
    ReactGA.pageview (window.location.pathname);
  }

  render () {
    return (
      <div id="wrapper">
        <div id="bg" />
        <div id="overlay" />
        <div id="main">
          <header id="header">
            <h1>Tomos Ewe</h1>
            <p>
              Web Developer &nbsp;&bull;&nbsp; Auckland &nbsp;&bull;&nbsp; New Zealand
            </p>
            <nav>
              <ul>
                <li>
                  <a href="https://blog.tomosewe.com" className="icon fa-rss">
                    <span className="label">Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/tomosewe"
                    className="icon fa-github"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/tomosewe"
                    className="icon fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tomosewe/"
                    className="icon fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:tomosewe@gmail.com"
                    className="icon fa-envelope-o"
                  >
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <footer id="footer">
            <span className="copyright">
              &copy; Tomos Ewe &bull; Design template: {' '}
              <a href="http://html5up.net">HTML5 UP</a>
              .
            </span>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
