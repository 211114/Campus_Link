function BoxFriend({name, ocupation, img}) {
    return ( 
        <div className="box-friend">
            <div className="img-profile">
                <img src={img} alt="" />
            </div>
            <div className="info-friend">
                <h6>{name}</h6>
                <p>{ocupation}</p>
            </div>
        </div>
     );
}

export default BoxFriend;