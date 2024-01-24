import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FaArrowUp } from "react-icons/fa";
import { TalkingUser } from "@/components/talkingUser";
import { TalkingAi } from "@/components/talkingAi";
import { SideBar } from "@/components/sideBar";
import { useCtxToggleSideBar } from "@/context/ctxToggleSideBar";

export default function Home() {
  const { ctxToggleSideBar, setCtxToggleSideBar } = useCtxToggleSideBar();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <SideBar />
        <div className={`${styles.SectionBottomAndTop}`}>
          <div>
            <div className={`${styles.topBar}`}>
              <button
                className={`${styles.toggleBtn}`}
                onClick={() => {
                  setCtxToggleSideBar(true);
                }}
              >
                ☰
              </button>
              <h3>Chat AI</h3>
              <div />
            </div>
            <div className={`${styles.topBarDiviser}`} />
            <div className={`${styles.chatContainer}`}>
              <div className={`${styles.chat}`}>
                <TalkingUser />
                <TalkingAi />
              </div>
            </div>
          </div>
          <div>
            <form className={`${styles.inputArea}`}>
              <input
                className={`${styles.inputAreaInput}`}
                type="text"
                placeholder="Message to AI"
              />
              <div className={`${styles.inputAreaButtons}`}>
                <button type="submit">
                  <FaArrowUp />
                </button>
              </div>
            </form>
            <p className={`${styles.finalText}`}>
              Um projeto de André Lusegardis.{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
