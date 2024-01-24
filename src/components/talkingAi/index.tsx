import { RiRobot2Fill } from "react-icons/ri";
import styles from "../talkingUser/TalkingUser.module.css";

export const TalkingAi = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <div>
          <RiRobot2Fill className={`${styles.icon}`} />
        </div>
        <div className={`${styles.text}`}>
          <p className={`${styles.user}`}>Ai</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            aliquam eligendi dignissimos eveniet impedit at quidem dolor. Veniam
            dolore eos, odit reiciendis autem, aliquid iste pariatur illo velit
            nesciunt quis.
          </p>
        </div>
      </div>
    </>
  );
};
