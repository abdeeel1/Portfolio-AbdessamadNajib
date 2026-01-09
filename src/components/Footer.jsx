import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-4 px-6 bg-card relative border-t border-red-700 mt-12 pt-4 flex flex-wrap justify-between items-center"
      
    >
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Abdessamad Najib All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-red-700/10 hover:bg-red-700/20 text-red-700 transition-colors"
        
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
