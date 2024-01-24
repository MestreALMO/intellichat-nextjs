import Link from "next/link";
import styles from "./SideBar.module.css";
import { useCtxToggleSideBar } from "@/context/ctxToggleSideBar";

export const SideBar = () => {
  const { ctxToggleSideBar, setCtxToggleSideBar } = useCtxToggleSideBar();

  return (
    <>
      <aside
        className={`${styles.main} ${ctxToggleSideBar ? `${styles.open}` : ""}`}
      >
        <nav>
          <Link href="/">Página Inicial</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </aside>
    </>
  );
};
