import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.icon} aria-hidden="true">
          $
        </div>

        <h2 className={styles.title}>Lærke donerer penge</h2>

        <p className={styles.text}>
          Lærke er så rig at hun har valgt at donere alle sine penge til Ditte.
          <br />
          Robin Hood style.
        </p>
      </div>
    </div>
  );
}
