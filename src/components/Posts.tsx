import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postsSlice";
import { RootState } from "../store";

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post, index: number) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {post.urlToImage && (
            <img
              src={post.urlToImage}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.author}</span>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
