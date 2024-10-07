import styles from './ContactStytles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/xlderwga" method="post">
            <div className="formGroup">
                <label for="name" htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
            </div>
            <div className="formGroup">
                <label for="email" htmlFor="email" hidden>
                    Email
                </label>
                <input type="email" name="email" id="name" placeholder="Email" required/>
            </div>
            <div className="formGroup">
                <label for="message" htmlFor="message" hidden>
                    Message
                </label>
                <textarea name="message" id="message" placeholder="Message" required></textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit" />
            </form>
    </section>
  );
}

export default Contact