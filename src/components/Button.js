import styles from './Button.module.css';

export default function Button({ children, secondary }) {
  return (
    <a
      href="/"
      style={{ color: secondary, border: secondary }}
      className={secondary ? styles.secondarybutton : styles.button}
    >
      {children}
    </a>
  );
}
