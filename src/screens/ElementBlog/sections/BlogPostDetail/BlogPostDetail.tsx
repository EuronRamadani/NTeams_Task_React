import React, { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ArrowLeftIcon, Clock, User, Link as LinkIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { FooterSection } from "../FooterSection/FooterSection";
import { fetchPosts } from "../../../../store/postsSlice";
import { RootState, AppDispatch } from "../../../../store";

// Add Tailwind prose styles if not already included
import "tailwindcss/typography";

export const BlogPostDetail = (): JSX.Element => {
  const location = useLocation();
  const { postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  // Get post from location state if available
  const postFromState = location.state?.post;

  useEffect(() => {
    // Only fetch posts if we don't have the post in state
    if (!postFromState && posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length, postFromState]);

  // Get the correct post based on postId or location state
  const post = React.useMemo(() => {
    if (postFromState) return postFromState;
    if (!posts.length) return null;
    if (postId === "featured") return posts[0];
    const index = parseInt(postId || "0", 10) - 1;
    return posts[index];
  }, [posts, postId, postFromState]);

  console.log("Current post:", post); // Add this for debugging

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Post not found"}
          </h1>
          <Link
            to="/"
            className="text-[#5152fb] hover:text-[#4141ea] flex items-center justify-center gap-2"
          >
            <ArrowLeftIcon size={20} />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-[#5152fb] hover:text-[#4141ea]"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <Badge className="mb-6 bg-[#5152fb]">
              <span className="px-3 py-1 text-white">6 min read</span>
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>{post.author || "Unknown Author"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <time>{formatDate(post.publishedAt)}</time>
              </div>
              {post.source?.name && (
                <div className="flex items-center gap-2">
                  <LinkIcon size={20} />
                  <span>{post.source.name}</span>
                </div>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.urlToImage && (
            <div className="mb-12">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={post.urlToImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-700 mb-8 leading-relaxed">
              {post.description}
            </div>

            <div className="text-gray-700 leading-relaxed space-y-6 whitespace-pre-wrap">
              {post.content}
            </div>

            {/* Source Link */}
            {post.url && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#5152fb] hover:text-[#4141ea] font-medium"
                >
                  Read full article at source
                  <LinkIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          {/* Author Section */}
          <div className="mt-16 p-8 bg-[#1f2068] rounded-xl text-white">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {(post.author || "Unknown").charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {post.author || "Unknown Author"}
                </h3>
                <p className="text-gray-300">
                  {post.source?.name
                    ? `Writer at ${post.source.name}`
                    : "Contributor"}
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  );
};
