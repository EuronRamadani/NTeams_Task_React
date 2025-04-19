import React from "react";
import { Button } from "../../components/ui/button";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NewsPostsSection } from "./sections/NewsPostsSection";
import { SearchSection } from "./sections/SearchSection";

export const ElementBlog = (): JSX.Element => {
  // Category data for filter buttons
  const categories = [
    { name: "News", active: true },
    { name: "Payments", active: false },
    { name: "Employment", active: false },
    { name: "Tax management", active: false },
    { name: "Remote work", active: false },
    { name: "Use cases", active: false },
    { name: "People & Culture", active: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />

      <main className="flex-grow">
        {/* Search Section */}
        <div className="mt-8 md:mt-12">
          <SearchSection />
        </div>

        {/* Category Filter Buttons */}
        <div className="px-4 md:px-8 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-nowrap md:flex-wrap items-start gap-[9px] overflow-x-auto pb-4 md:pb-0">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 md:px-6 py-2.5 md:py-3.5 rounded-[50px] whitespace-nowrap transition-colors ${
                    category.active
                      ? "bg-[#5152fb] text-white"
                      : "bg-[#f0f2f7] text-typographytypography-grey hover:bg-gray-200"
                  }`}
                >
                  <span className="font-semibold text-sm md:text-base">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="mt-8">
          <MainContentSection />
        </div>

        {/* Newsletter Section */}
        <div className="mt-16">
          <NewsPostsSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
