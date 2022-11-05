import { useLocation } from 'react-router-dom';
import Comentario from '../../components/Comentario';
import { useForm } from "react-hook-form";
import styles from './Details.module.css';
import PostComment from '../../services/postComment';
import GetComments from '../../services/getComments';
import { useState, useEffect } from 'react';
import PostLike from '../../services/postLike';

export default function Details() {
  const localizacao = useLocation();
  const { data } = localizacao.state;
  const [rating, setRating] = useState(data.rating);
  const [comments, setComments] = useState(null);
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  useEffect(() => {
    //crime 
    GetComments(data.id).then((response) => setComments(response))
  }, [])

  const like = () => {
    setRating(rating + 1)
    data.rating++;
    PostLike(data);
  }

  const onSubmit = (dataForm) => {
    dataForm.idMovie = data.id;
    PostComment(dataForm).then(() => {
      //crime
      GetComments(data.id).then((response) => setComments(response));
    });
  }

  return(
    <>
      <div className={styles.contentMovie}>
        <img src={require(`../../../public/assets/movies/${data.thumb}`)} alt="Thumb Movie" />
        <div className={styles.detalhes}>
          <h1>{data.titulo} - ({data.lancamento})</h1>
          <p>{data.genero}</p>
          <h2>Direção: <span>{data.diretor}</span></h2>
          <p>Sinopse: {data.sinopse}</p>
          <div className={styles.likes}>
            <span>Likes: {rating}</span>
            <button onClick={like}>Curtir</button>
          </div>
        </div>
        <div className={styles.atores}>
          <h1>Atores:</h1>
          <ul>
            {data.atores.map((ator) => (
              (<li key={ator}>{ator}</li>)
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.comments}>
              <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.field}>
                  <label for="email">E-mail</label>
                  <input type="email" placeholder='Digite seu e-mail...' {...register("email")}/>
                </div>
                <div className={styles.field}>
                  <label for="comment">Comentário</label>
                  <input type="text" placeholder='Digite seu comentário...' {...register("comment")}/>
                </div>

                <input type="submit" value="Comentar"/>

              </form>

              <div className={styles.listComments}>

                {comments ? comments.map(item => <Comentario email={item.email} comment={item.comment} />) : "" }
                
              </div>
      </div>
    </>
  );
};