import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const BlogSection = (): JSX.Element => {
  // Platform links data
  const platformLinks = [
    "Employer of Record",
    "PEO Services",
    "Company as a Service",
    "Work Payments",
    "Global Payroll",
    "Tax Management",
    "Expenses Management",
  ];

  // Services links data (middle column)
  const servicesLinks = [
    "Legal Entity",
    "Client Invoicing",
    "Payment Requests",
    "Global Mobility",
    "Employees Benefits",
    "For Startups",
  ];

  // Company links data
  const companyLinks = [
    "About",
    "Our Countries",
    "Affiliates",
    "Partnerships",
    "Charity",
    "Data & Security",
    "Book a demo",
    "Contact",
  ];

  // Footer policy links
  const policyLinks = [
    { name: "Cookie Policy", separator: true },
    { name: "Privacy Policy", separator: true },
    { name: "Terms & Conditions", separator: false },
  ];

  return (
    <footer className="w-full bg-[#1f2068] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo column */}
          <div className="flex items-start">
            <div className="flex items-center">
              <img className="w-[35px] h-[37px]" alt="Icon" src="/icon.png" />
              <img
                className="w-[183px] h-[22px] ml-3"
                alt="Signage"
                src="/signage.png"
              />
            </div>
          </div>

          {/* Platform column */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-bold text-sm tracking-[0.70px] leading-7 text-white">
              PLATFORM
            </h3>
            <div className="flex flex-col items-start">
              {platformLinks.map((link, index) => (
                <div key={index} className="h-[34px] flex items-center">
                  <span className="font-light text-sm text-brand-colorsbackgroundlight-purple leading-[14px]">
                    {link}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="flex flex-col items-start gap-2">
            {servicesLinks.map((link, index) => (
              <div key={index} className="h-[34px] flex items-center">
                <span className="font-light text-sm text-brand-colorsbackgroundlight-purple leading-[14px]">
                  {link}
                </span>
              </div>
            ))}
          </div>

          {/* Company column */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-bold text-sm tracking-[0.70px] leading-7 text-white">
              COMPANY
            </h3>
            <div className="flex flex-col items-start">
              {companyLinks.map((link, index) => (
                <div key={index} className="h-[34px] flex items-center">
                  <span className="font-light text-sm text-brand-colorsbackgroundlight-purple leading-[14px]">
                    {link}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="w-full mt-8">
        <Separator className="bg-white/10" />
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="font-normal text-xs text-[#838a90] leading-[25.2px]">
            © Native Teams Limited
          </div>

          <div className="flex items-center">
            {policyLinks.map((link, index) => (
              <React.Fragment key={index}>
                <span className="font-normal text-xs text-[#838a90] leading-[25.2px] cursor-pointer">
                  {link.name}
                </span>
                {link.separator && (
                  <span className="font-normal text-xs text-[#838a90] mx-4 leading-[25.2px]">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
