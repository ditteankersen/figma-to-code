import styles from "./Pill.module.css";

export default function Pill({
  children = "Primary",
  variant = "primary",
  onClick,
}) {
  const isPrimary = variant === "primary";

  return (
    <button
      type="button"
      className={`${styles.pill} ${isPrimary ? styles.primary : styles.secondary}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
