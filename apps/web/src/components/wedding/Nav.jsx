import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { href: '#home', label: 'Home' },
    { href: '#party', label: 'About the Party' },
    { href: '#location', label: 'Location' },
    { href: '#dress', label: 'Dress Code' },
    { href: '#rsvp', label: 'RSVP' },
];

const Nav = () => {
    const [solid, setSolid] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 60);

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const linkColor = 'text-foreground';

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                solid || open ? 'border-b border-border bg-background/95 backdrop-blur' : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-[72rem] items-center justify-between px-6 py-4">
                <a href="#home" className={`font-display text-xl tracking-[0.2em] ${linkColor}`}>
                    H &amp; G
                </a>
                <nav className="hidden items-center gap-9 md:flex">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className={`text-[10px] uppercase tracking-widest-xl transition-opacity hover:opacity-60 ${linkColor}`}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <button
                    type="button"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen((v) => !v)}
                    className={`flex h-11 w-11 items-center justify-center md:hidden ${linkColor}`}
                >
                    {open ? <X size={20} strokeWidth={1.2} /> : <Menu size={20} strokeWidth={1.2} />}
                </button>
            </div>
            {open && (
                <nav className="border-t border-border bg-background px-6 pb-6 md:hidden">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block border-b border-border/60 py-4 text-[11px] uppercase tracking-widest-xl text-foreground"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Nav;
