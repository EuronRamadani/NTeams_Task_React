import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const sections = [
    {
      title: "PLATFORM",
      links: [
        "Employer of Record",
        "PEO Services",
        "Company as a Service",
        "Work Payments",
        "Global Payroll",
        "Tax Management",
        "Expenses Management",
      ],
    },
    {
      title: "INFORMATION",
      links: [
        "Legal Entity",
        "Client Invoicing",
        "Payment Requests",
        "Global Mobility",
        "Employees Benefits",
        "For Startups",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About",
        "Our Countries",
        "Affiliates",
        "Partnerships",
        "Charity",
        "Data & Security",
        "Book a demo",
        "Contact",
      ],
    },
  ];

  return (
    <footer className="bg-[#1f2068] text-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo column */}
          <div>
            <div className="flex items-center">
              <img
                src="/native-teams-logo---white.svg"
                alt="Native Teams"
                className="h-8"
              />
            </div>
          </div>

          {/* Links columns */}
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h3 className="font-bold text-sm tracking-[0.70px] leading-7">
                {section.title}
              </h3>
              <div className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-brand-colorsbackgroundlight-purple hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mt-16">
          <Separator className="bg-white/10" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
            <span className="text-xs text-[#838a90]">
              © Native Teams Limited
            </span>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-xs text-[#838a90] hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-xs text-[#838a90] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-[#838a90] hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
