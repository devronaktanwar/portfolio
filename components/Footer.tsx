import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ronaksaini/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:dev.ronaktanwar@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="#home" className="text-2xl font-bold gradient-text">
            RS.
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            Software Developer building scalable backend systems and full-stack applications with a focus on performance and efficiency.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="p-3 rounded-full glass-dark text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p>© {new Date().getFullYear()} Ronak Saini. All rights reserved.</p>
          <p className="mt-1">Jaipur, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  );
}
