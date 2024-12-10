import { useState } from "react";
import postsData from "../../data/posts.json";
import Card from "../../components/Card";
import "./ArticlesPage.css";
export interface Post {
  id: number;
  title: string;
  view: number;
  upload: string;
  bookmark: boolean;
}

function ArticlesPage() {
  const [posts, setPosts] = useState<Post[]>(
    [...postsData].sort(
      (a, b) => new Date(b.upload).getTime() - new Date(a.upload).getTime()
    )
  );

  const handleBookmarkChange = (postId: number) => {
    // 함수로 만들어서 처리
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.map((post) =>
        post.id === postId ? { ...post, bookmark: !post.bookmark } : post
      );

      return updatedPosts.sort((a, b) => {
        if (a.bookmark === b.bookmark) {
          return 0;
        }
        return a.bookmark ? -1 : 1;
      });
    });
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const orderType = e.target.value;

    if (orderType === "recent") {
      setPosts(
        //북마크 로직 사용해서 정렬
        [...posts].sort(
          (a, b) => new Date(b.upload).getTime() - new Date(a.upload).getTime()
        )
      );
    } else if (orderType === "view") {
      setPosts([...posts].sort((a, b) => b.view - a.view));
    }
  };

  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type" onChange={handleOrderChange}>
          <option value="recent">최근등록순</option>
          <option value="view">조회순</option>
        </select>
      </div>
      <ol className="section">
        {posts.map((post) => (
          <Card
            key={post.id}
            post={post}
            onBookmarkChange={handleBookmarkChange}
          />
        ))}
      </ol>
    </div>
  );
}

export default ArticlesPage;
