import IconRedLike from '../../assets/img/redHeart.svg';
import IconLike from '../../assets/img/Heart.svg';
import IconComment from '../../assets/img/Comments.svg';
import IconShare from '../../assets/img/Share.svg';
import ProfileImg from "../../assets/img/imgProfile.svg";

function Post({txt, img}) {
    return ( 
        <div className="post">
            <div className="header-post">
                <img src={ProfileImg} alt="" className="img-profile" />
                <div className="data-headerpost">
                    <h5 className="name">Joanna Rosenbaum</h5>
                    <span className="hours">4 horas</span>
                </div>
            </div>
            <div className="content-post">
                <p className="txt-post">{txt}</p>
                <img src={img} alt="" className="img-post" />
                <div className="info-post">
                    <span className="option-post"><img className='icon-info' src={IconRedLike} alt="" /> 10 Me gustas</span>
                    <span className="option-post"><img className='icon-info' src={IconComment} alt="" /> 2 Comentarios</span>
                    <span className="option-post"><img className='icon-info' src={IconShare} alt="" /> 0 Compartidos</span>
                </div>
            </div>
            <div className="footer-post">
                <div className="option-post like">
                    <img src={IconLike} alt="" className='icon-opt' /> Me gusta
                </div>
                <div className="option-post">
                    <img src={IconComment} alt="" className='icon-opt' /> Comentar
                </div>
                <div className="option-post">
                    <img src={IconShare} alt="" className='icon-opt' /> Compartir
                </div>
            </div>
        </div>
     );
}

export default Post;