import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="comment">
          Super easy deploy react app to S3 and CloudFront with Serverless Framework
        </p>
        <a
          className="App-link"
          href="https://github.com/ghdmsrkd/react-s3-cloudFront-serverless-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try it now!
        </a>
      </header>
    </div>
  );
}

export default App;
