// ContactUsSmall.js

import React from "react";
import styles from "./ContactUs.module.css";
import {AiOutlineUser} from 'react-icons/ai'

function ContactUsSmall() {
  return (
    <div>
      <form className={styles.mainform}>
        <h1 className={styles.title}>Talk to Us</h1>
        <div>
          <input type="text" placeholder="Name.." className={styles.name} />
        </div>
        <div>
          <input type="text" placeholder="email.." className={styles.email} />
        </div>
        <div>
          <input type="text" placeholder="Phone..." className={styles.email} />
        </div>
        <div>
          <input
            type="text"
            placeholder="message.."
            className={styles.message}
          />
        </div>
        <button className={styles.button}> Free quotes </button>
      </form>
    </div>
  );
}

export default ContactUsSmall;
