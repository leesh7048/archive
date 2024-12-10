import "./Card.css";
import { FaBookmark } from "react-icons/fa";
import { Post } from "../pages/ArticlesPage/ArticlesPage";
interface PostProps {
  post: Post;
  onBookmarkChange: (postId: number) => void;
}

function Card({ post, onBookmarkChange }: PostProps) {
  const { title, view, upload, bookmark } = post;

  const handleBookmarkClick = () => {
    onBookmarkChange(post.id);
  };
  console.log(bookmark);

  return (
    <li className="card--container" id="card1">
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">{upload}</span>
        </div>
        <div className="card--tag">
          <span className="icon bookmark">
            <button
              className={bookmark ? "onBookmark" : "offBookmark"}
              onClick={handleBookmarkClick}
            >
              <FaBookmark />
            </button>
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{view}</span>
          views
        </div>
      </div>
    </li>
  );
}
export default Card;
