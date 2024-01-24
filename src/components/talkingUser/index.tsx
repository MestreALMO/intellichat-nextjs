import { FaUser } from "react-icons/fa";
import styles from "./TalkingUser.module.css";

export const TalkingUser = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <div>
          <FaUser className={`${styles.icon}`} />
        </div>
        <div className={`${styles.text}`}>
          <p className={`${styles.user}`}>You</p>
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
