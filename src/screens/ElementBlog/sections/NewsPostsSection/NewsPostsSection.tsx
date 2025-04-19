import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const NewsPostsSection = (): JSX.Element => {
  // Images for the decorative elements
  const decorativeImages = [
    {
      src: "/group-25.png",
      alt: "Group",
      className: "w-[41px] h-[41px] top-2 left-[53px] -rotate-45",
    },
    {
      src: "/group-26.png",
      alt: "Group",
      className: "w-[41px] h-[41px] top-[92px] left-7 -rotate-45",
    },
    {
      src: "/group-27.png",
      alt: "Group",
      className: "w-[43px] h-[43px] top-6 left-[77px]",
    },
    {
      src: "/group-28.png",
      alt: "Group",
      className: "w-[43px] h-[43px] -top-px left-[-7px]",
    },
    {
      src: "/group-29.png",
      alt: "Group",
      className: "w-[41px] h-[41px] top-10 left-[61px]",
    },
    {
      src: "/group-30.png",
      alt: "Group",
      className: "w-[41px] h-[41px] top-[-37px] left-5",
    },
    {
      src: "/group-31.png",
      alt: "Group",
      className: "w-[43px] h-[43px] top-[77px] -left-px",
    },
    {
      src: "/group-32.png",
      alt: "Group",
      className: "w-[43px] h-[43px] top-[-7px] left-6",
    },
  ];

  return (
    <section className="w-full py-9">
      <Card className="relative w-full bg-backgroundsmidnight-blue border-2 border-solid border-[#1f2068] shadow-[10px_-7px_0px_3px_#8c7bff]">
        <CardContent className="flex justify-center p-0">
          <div className="flex flex-col w-full max-w-[911px] items-center justify-center gap-[30px] py-[70px]">
            <h2 className="text-center font-desktop-heading-2 text-[length:var(--desktop-heading-2-font-size)] font-[number:var(--desktop-heading-2-font-weight)] tracking-[var(--desktop-heading-2-letter-spacing)] leading-[var(--desktop-heading-2-line-height)] [font-style:var(--desktop-heading-2-font-style)]">
              <span className="text-white">Never miss out our</span>{" "}
              <span className="text-[#5152fb]">latest news</span>
            </h2>

            <div className="relative w-full max-w-[577px]">
              <div className="relative w-full h-[49px] rounded-[55px] bg-[#f0f2f7]">
                <Input
                  className="h-[49px] pl-7 rounded-[55px] bg-[#f0f2f7] border-none"
                  placeholder="Email address"
                />
                <Button className="absolute right-0 top-0 h-[49px] px-11 py-3.5 bg-[#5152fb] rounded-[50px] font-semibold text-white text-base">
                  Sign up
                </Button>
              </div>
            </div>

            <p className="text-center font-desktop-body-text-desktop text-[length:var(--desktop-body-text-desktop-font-size)] font-[number:var(--desktop-body-text-desktop-font-weight)] tracking-[var(--desktop-body-text-desktop-letter-spacing)] leading-[var(--desktop-body-text-desktop-line-height)] [font-style:var(--desktop-body-text-desktop-font-style)] text-typographywhite-text">
              By submitting this form, you will receive emails from Native
              Teams.
              <br />
              For details, view our Privacy Policy.
            </p>
          </div>
        </CardContent>

        {/* Decorative elements */}
        <div className="absolute w-[122px] h-[122px] bottom-[81px] right-[172px] rotate-45">
          <div className="relative h-[141px] -top-2.5">
            {decorativeImages.map((image, index) => (
              <img
                key={index}
                className={`absolute ${image.className}`}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};
