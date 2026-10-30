import styles from "./Pill.module.css";

export default function Pill({
  children = "Secondary",
  variant = "secondary",
  onClick,
}) {
  const isPrimary = variant === "primary";
  const letters = Array.from(children);

  return (
    <button
      type="button"
      className={`${styles.pill} ${isPrimary ? styles.primary : styles.secondary}`}
      onClick={onClick}
    >
      <span className={styles.label} aria-label={children}>
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={styles.letter}
            style={{
              "--delay": `${index * 32}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </button>
  );
}
