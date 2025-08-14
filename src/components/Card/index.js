import style from './Card.module.css';

function Card({ id, titulo, image }){
    return(
    <div className={style.Card}>
        <div className={style.container}>
            <img src={image} alt={titulo} className={style.image} />
             <div className={style.overlay}>
             <h2>{titulo}</h2>

             
             </div>
        </div>
    </div>
    )
}

export default Card;