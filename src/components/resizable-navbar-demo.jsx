"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarDemo() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Our Products", link: "/products" },
    { name: "Reviews", link: "/reviews" },
    { name: "Our Story", link: "/ourstory" },
    { name: "Contact Us", link: "/contact" },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();

    navigate(link);

    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar>
      <NavBody className="hidden lg:flex">
        <NavbarLogo />

        <div className="flex-1 flex justify-center">
          <NavItems items={navItems} />
        </div>

        <NavbarButton
          onClick={(e) => handleNavClick(e, "/contact")}
          variant="primary"
          className="cursor-pointer"
        >
          Get Started
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              className="block py-3 text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-0">
            <NavbarButton
              onClick={(e) => handleNavClick(e, "/contact")}
              className="w-full text-center"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}