import { NavLink } from "react-router-dom";
import BoxFriend from "../atoms/BoxFriend";
import BoxPosts from "./BoxPosts";
import CoverImg from "../../assets/img/coverProfile.png";
import ProfileImg from "../../assets/img/imgProfile.svg";
import IconFB from "../../assets/img/Facebook.svg";
import IconIG from "../../assets/img/Instagram.svg";
import IconTT from "../../assets/img/TwitterX.svg";
import Friend1 from "../../assets/img/friend1.svg";
import Friend2 from "../../assets/img/friend2.svg";

function MyInfo() {
  return (
    <div className="flexbox-profile">
      <div className="myinfo-container">
        <div className="coverPicture">
          <img src={CoverImg} alt="" />
        </div>
        <div className="info-user">
          <div className="profilePicture">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="mydata">
            <h2>Joanna Rosenbaum</h2>
            <p>Ing. Sistemas de la información</p>
            <p>Chiapas, México</p>
            <div className="redes-sociales">
              <div className="item">
                <img src={IconIG} alt="" /> <span>@JoannaRose</span>
              </div>
              <div className="item">
                <img src={IconFB} alt="" /> <span>JoannaRose</span>
              </div>
              <div className="item">
                <img src={IconTT} alt="" /> <span>JoannaRose</span>
              </div>
            </div>
          </div>
          <div className="myinterests">
            <h6>Intereses</h6>
            <div className="box-myinterests">
              <div className="interes">Materias</div>
              <div className="interes">Deportes</div>
              <div className="interes">Comida</div>
              <div className="interes">Hobbies</div>
              <div className="interes">Peliculas / Series</div>
            </div>
          </div>
        </div>
      </div>

      <div className="moreinfo">
        <div className="aboutme">
            <h4>Hacerca de mí</h4>
            <p>Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel.</p>
        </div>
        <div className="friends">
            <h4>Amigos</h4>
            <div className="options-friends">
                <span className="count">123 amigos</span>
                <NavLink className="search">
                    Buscar amigos
                </NavLink>
            </div>
            <BoxFriend name={"Joan Rosenbaum"} ocupation={"Ing. Sistemas computacionales"} img={Friend1} />
            <BoxFriend name={"John Doe"} ocupation={"Lic. Marketing Digital"} img={Friend2} />
        </div>
      </div>

      <BoxPosts />
    </div>
  );
}

export default MyInfo;
