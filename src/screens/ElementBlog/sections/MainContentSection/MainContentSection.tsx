import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { fetchPosts } from "../../../../store/postsSlice";
import { RootState, AppDispatch } from "../../../../store";

const POSTS_PER_PAGE = 9;

export const MainContentSection = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error, searchQuery } = useSelector(
    (state: RootState) => state.posts
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil((filteredPosts.length - 1) / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE + 1; // +1 because first post is featured
  const endIndex = Math.min(
    startIndex + POSTS_PER_PAGE - 1,
    filteredPosts.length
  );
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Generate page numbers for display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 7;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= halfVisible + 1) {
      for (let i = 1; i <= maxVisiblePages - 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - halfVisible) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="px-4 md:px-8 lg:px-[120px]">
      <section className="flex flex-col gap-[30px] w-full max-w-[1200px] mx-auto">
        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <Card className="bg-backgroundsice-cold border border-solid border-[#a8a8a8] rounded-[20px] overflow-hidden">
            <CardContent className="p-4 md:p-6 lg:p-20">
              <div className="flex flex-col gap-[30px] md:gap-[50px] lg:gap-[100px]">
                <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[60px]">
                  <div className="relative w-full lg:w-[470px] h-[250px] lg:h-[400px] bg-[#e1e1e1] flex items-center justify-center overflow-hidden">
                    {filteredPosts[0].urlToImage ? (
                      <img
                        src={filteredPosts[0].urlToImage}
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="font-desktop-title-1 text-typographytypography-grey text-center">
                        BODY IMAGE
                        <br />
                        PLACEHOLDER FRAME
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col w-full lg:w-[470px] gap-5">
                    <Badge className="w-fit h-[35px] bg-[#5152fb] rounded-[10px]">
                      <span className="px-3 py-1 font-semibold text-white text-xs">
                        6 min read
                      </span>
                    </Badge>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-typographytypography-anthracite">
                      {filteredPosts[0].title}
                    </h3>

                    <p className="text-base md:text-lg text-typographytypography-anthracite">
                      {filteredPosts[0].description}
                    </p>

                    <div className="flex items-center">
                      <Link
                        to={`/post/featured`}
                        state={{ post: filteredPosts[0] }}
                        className="flex items-center text-[#5152fb] font-semibold hover:underline"
                      >
                        Read more
                        <ArrowRightIcon className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Latest Posts */}
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-xl md:text-2xl font-bold text-typographytypography-anthracite">
            Latest Tesla News
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {currentPosts.map((post, index) => (
              <Card
                key={index}
                className="flex flex-col rounded-[15px] border border-solid border-[#a8a8a8] overflow-hidden"
              >
                <div className="relative">
                  <div className="relative w-full h-[180px] md:h-[221px] bg-white rounded-[15px_15px_0px_0px] overflow-hidden">
                    {post.urlToImage ? (
                      <img
                        src={post.urlToImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#e1e1e1]">
                        <div className="text-typographytypography-grey text-center">
                          BODY IMAGE
                          <br />
                          PLACEHOLDER FRAME
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute top-[160px] md:top-[200px] left-0">
                    <Badge className="h-[35px] bg-[#5152fb]">
                      <span className="px-5 py-1 font-semibold text-white text-xs">
                        6 min read
                      </span>
                    </Badge>
                  </div>
                </div>

                <CardContent className="pt-[35px] pb-[30px] px-[25px]">
                  <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-bold text-typographytypography-anthracite line-clamp-2">
                      {post.title}
                    </h4>

                    <Link
                      to={`/post/${index + startIndex}`}
                      state={{ post: { ...post, index: index + startIndex } }}
                      className="flex items-center text-[#5152fb] font-semibold hover:underline"
                    >
                      Read more
                      <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center w-full mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`text-typographytypography-grey hover:text-[#5152fb] transition-colors ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>

            <div className="hidden md:flex items-center gap-2">
              {getPageNumbers().map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof item === "number" && setCurrentPage(item)
                  }
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    item === currentPage
                      ? "bg-[#5152fb] text-white"
                      : item === "..."
                      ? "cursor-default text-typographytypography-grey"
                      : "text-typographytypography-grey hover:text-[#5152fb]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={`text-[#5152fb] hover:text-[#4141ea] transition-colors ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
