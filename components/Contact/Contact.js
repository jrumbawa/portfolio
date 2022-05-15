import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Subject</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  )
}
