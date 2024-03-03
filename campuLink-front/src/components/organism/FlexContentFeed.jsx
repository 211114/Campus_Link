import Articles from "../molecules/Articles";
import BoxPosts from "../molecules/BoxPosts";
import CoverImg from "../../assets/img/coverProfile.png";
import ProfileImg from "../../assets/img/imgProfile.svg";
import '../../assets/css/feed.css'

function FlexContentFeed() {
  return (
    <div className="container-feed">
      <div className="myprofile-box">
        <div className="coverPicture">
          <img src={CoverImg} alt="" />
        </div>
        <div className="info-user">
          <div className="profilePicture">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="mydata">
            <h3>Joanna Rosenbaum</h3>
            <p className="txt-infouser">Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
            <div className="counts">
                <div className="item"><span>24</span> <br />Publicaciones</div>
                <div className="item"><span>123</span> <br />Articulos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="column-feed">
        
      </div>
      <BoxPosts />
      <Articles />
    </div>
  );
}

export default FlexContentFeed;
