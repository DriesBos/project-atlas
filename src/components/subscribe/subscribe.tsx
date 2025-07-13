import styles from './subscribe.module.sass';

const Subscribe = () => {
  return (
    <section className={`${styles.subscribe}`}>
      <form
        name="contact"
        method="POST"
        action="/pages/success"
        data-netlify="true"
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
};

export default Subscribe;
