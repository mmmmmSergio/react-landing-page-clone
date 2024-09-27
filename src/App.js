import styles from './App.module.css';
import Button from './components/Button.js';
import Logo from './svg/logo.png';
import Placeholder from './svg/placeholder.png';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.header}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <nav>
            <ul>
              <li>
                <a href="/">What is Miro</a>
              </li>
              <li>
                <a href="/">Solutions</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Enterprise</a>
              </li>
              <li>
                <a href="/">Customers</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <a href="/">Contact Sales </a>
            </li>
            <li>
              <Button secondary>Login</Button>
            </li>
            <li>
              <Button>Sign up free</Button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h1>Innovate faster with Miro, the AI-powered visual workspace.</h1>
          <p>
            Bring teams together and quickly go from big ideas to execution with
            a workspace that leverages AI at every stage.
          </p>
          <input type="email" placeholder="Your email address" />
          <Button large>Sign up free</Button>
          <img
            src={Placeholder}
            alt="Miro Workspace"
            className={styles.placeholder}
          />
        </section>
      </main>
    </>
  );
}
