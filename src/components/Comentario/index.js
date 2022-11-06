import React from 'react'
import styles from "./Comentario.module.css"

export default function Comentario({email, comment, deleteFunction}) {

  return (
    <div className={styles.comment}>
      <h3>{email}</h3>
      <p>{comment}</p>
      <button onClick={deleteFunction}>button</button>
    </div>
  )
}