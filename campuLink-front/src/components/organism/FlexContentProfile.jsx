import Articles from "../molecules/Articles";
import MyInfo from "../molecules/MyInfo";

function FlexContentProfile() {
    return ( 
        <div className="containerProfile">
            <MyInfo/>
            <Articles/>
        </div>
     );
}

export default FlexContentProfile;