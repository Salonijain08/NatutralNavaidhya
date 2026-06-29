import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 20);
  });

  return (
    <motion.nav
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.nav>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        y: visible ? 12 : 0,
        width: visible ? "94%" : "100%",
        borderRadius: visible ? "9999px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
      className={cn(
        "mx-auto transition-all duration-300",

       visible
  ? "bg-[#FDF8EE]/90 backdrop-blur-xl border border-[#3C6E47]/15 shadow-xl shadow-[#3C6E47]/10"
  : "bg-transparent",

        className
      )}
    >
     <div className="mx-auto flex w-full items-center justify-between px-8">
  {children}
</div>
    </motion.div>
  );
};

export const NavItems = ({ items, className }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
    className={cn(
  "hidden items-center justify-center gap-2 text-sm font-medium lg:flex",
  className
)}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 text-neutral-700 transition-colors hover:text-[#2F5739] dark:text-neutral-300 dark:hover:text-white"
        >
          {hovered === idx && (
            <motion.div
              layoutId="navbar-hover"
              className="absolute inset-0 -z-10 rounded-full bg-[#EAF1E6]/80 dark:bg-neutral-800"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.5,
              }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        y: visible ? 12 : 0,
        borderRadius: visible ? "20px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
      className={cn(
        "mx-auto flex w-[95%] max-w-[95%] flex-col px-5 py-3 lg:hidden transition-all duration-300",

        visible
          ? "bg-white/15 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/10 dark:bg-black/20 dark:border-white/10"
          : "bg-transparent",

        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children }) => (
  <div className="flex w-full items-center justify-between">
    {children}
  </div>
);

export const MobileNavMenu = ({ children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex flex-col gap-3 px-2"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => (
  <button onClick={onClick} className="p-2">
    {isOpen ? (
      <IconX size={26} className="text-neutral-800 dark:text-white" />
    ) : (
      <IconMenu2 size={26} className="text-neutral-800 dark:text-white" />
    )}
  </button>
);

export const NavbarLogo = () => (
  <a href="/">
    <img
      src="/logo2.png"
      alt="Logo"
      className="h-18 w-auto"
    />
  </a>
);

export const NavbarButton = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const styles = {
    primary:
      "bg-[#3C6E47] text-white hover:bg-[#2F5739] shadow-lg shadow-[#3C6E47]/20",

    secondary:
      "border border-[#3C6E47]/20 text-neutral-700 hover:bg-[#EAF1E6] dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800",
  };

  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold transition-all active:scale-95",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};