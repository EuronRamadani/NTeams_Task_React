import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [
    { label: "Links Group 1" },
    { label: "Links Group 2" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-6">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <img
            className="w-[158px] h-[29px]"
            alt="Native Teams Logo"
            src="/native-teams-logo-default.svg"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-[26px]">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="font-normal text-typographytypography-anthracite text-base tracking-[0.24px]">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {/* Dropdown content would go here */}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:block">
            <Button className="bg-[#5152fb] hover:bg-[#5152fb]/90 text-white font-bold rounded-[50px] h-[41px] w-[125px]">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-2 space-y-1 bg-white">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="block w-full px-3 py-2 text-left text-base font-medium text-gray-600 hover:text-[#5152fb] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-[#5152fb] hover:bg-[#5152fb]/90 text-white font-bold rounded-[50px] h-[41px]">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
