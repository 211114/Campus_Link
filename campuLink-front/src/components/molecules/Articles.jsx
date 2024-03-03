import Article from "../atoms/Article";
import ImgArticle1 from "../../assets/img/article1.svg";
import ImgArticle2 from "../../assets/img/article2.svg";
import ImgArticle3 from "../../assets/img/article3.svg";

function Articles() {
  return (
    <div className="articles-container">
      <div>
        <h4>Tus articulos</h4>
        <p>
          Figma ipsum component variant main layer. Boolean frame scale
          horizontal vertical component team link.
        </p>
      </div>
      <div className="items">
        <Article
          title={"La inteligencia artificial"}
          info={"Boolean frame scale horizontal vertical component team link. Lorem ipsum component"}
          img={ImgArticle1}
        />
        <Article
          title={"Nuevo Apple Vision Pro"}
          info={"Boolean frame scale horizontal vertical component team link. Lorem ipsum component"}
          img={ImgArticle2}
        />
        <Article
          title={"La era de las computadoras cuanticas llego"}
          info={"Boolean frame scale horizontal vertical component team link. Lorem ipsum component"}
          img={ImgArticle3}
        />
      </div>
    </div>
  );
}

export default Articles;
