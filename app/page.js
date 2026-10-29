"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <Pill onClick={() => setIsModalOpen(true)}>Primary</Pill>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
