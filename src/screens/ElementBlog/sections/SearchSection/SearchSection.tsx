import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../../store/postsSlice";

export const SearchSection = (): JSX.Element => {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchQuery(localSearchQuery));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="flex flex-col items-center gap-[38px] py-7 w-full max-w-[1021px] mx-auto">
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <h3 className="font-desktop-heading-3 font-[number:var(--desktop-heading-3-font-weight)] text-brand-colorspurple text-[length:var(--desktop-heading-3-font-size)] tracking-[var(--desktop-heading-3-letter-spacing)] leading-[var(--desktop-heading-3-line-height)] [font-style:var(--desktop-heading-3-font-style)]">
          Native Teams Blog
        </h3>

        <h2 className="font-desktop-heading-2 font-[number:var(--desktop-heading-2-font-weight)] text-typographytypography-anthracite text-[length:var(--desktop-heading-2-font-size)] text-center tracking-[var(--desktop-heading-2-letter-spacing)] leading-[var(--desktop-heading-2-line-height)] [font-style:var(--desktop-heading-2-font-style)]">
          Resources, Tips and Tricks About the Modern Way of Working
        </h2>
      </div>

      <div className="relative w-full max-w-[578px]">
        <div className="flex items-center w-full h-[49px] bg-[#f0f2f7] rounded-[55px]">
          <Input
            className="h-full border-none bg-transparent pl-7 text-typographytypography-anthracite opacity-40 font-desktop-footer-paragraph-text font-[number:var(--desktop-footer-paragraph-text-font-weight)] text-[length:var(--desktop-footer-paragraph-text-font-size)] tracking-[var(--desktop-footer-paragraph-text-letter-spacing)] leading-[var(--desktop-footer-paragraph-text-line-height)] [font-style:var(--desktop-footer-paragraph-text-font-style)]"
            placeholder="Search for posts"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button
            onClick={handleSearch}
            className="h-[42px] px-11 py-3.5 mr-[3px] bg-[#5152fb] hover:bg-[#4142eb] rounded-[50px] font-semibold text-white text-base"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
