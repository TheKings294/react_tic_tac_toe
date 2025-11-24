import { Link } from "react-router";
import {Instagram, Twitter, Linkedin} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-orange">
            <div className="mx-auto flex flex-col items-center gap-4 px-4 py-6 md:max-w-6xl md:flex-row md:justify-between">

                <div className="text-sm">
                    © {new Date().getFullYear()} Antoine Gonsard
                </div>

                <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
                    <Link to="/" className="text-sm">Home</Link>
                    <Link to="/board" className="text-sm">Leader board</Link>
                </nav>

                <div className="flex gap-4 text-sm">
                    <a href="#" aria-label="Instagram">
                        <Instagram color={"black"} />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <Twitter color={"black"} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <Linkedin color={"black"} />
                    </a>
                </div>

            </div>
        </footer>
    );
}
