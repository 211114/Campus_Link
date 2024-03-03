function Article({title, info, img}) {
    return ( 
        <div className="article">
            <img src={img} alt="Imagen de fondo" className="imagen-fondo"/>
            <div className="contenido">
                <h4>{title}</h4>
                <p>{info}</p>
                <button className="btn-mas">Saber más</button>
            </div>
        </div>
     );
}

export default Article;