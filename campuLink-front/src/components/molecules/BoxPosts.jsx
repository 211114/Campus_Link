import Post from "../atoms/Post";
import ImgPost from "../../assets/img/imgPost.svg";

function BoxPosts() {
  return (
    <div className="flexbox-posts">
      <Post
        txt={
          "Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link."
        }
        img={ImgPost}
      />
      <Post
        txt={
          "Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link."
        }
        img={ImgPost}
      />
      <Post
        txt={
          "Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link."
        }
        img={ImgPost}
      />
    </div>
  );
}

export default BoxPosts;
