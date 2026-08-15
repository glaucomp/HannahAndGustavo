import React from 'react';
import { Helmet } from 'react-helmet';
import { ChevronDown, Church, GlassWater, UtensilsCrossed, Music, MapPin, Car, Baby, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Nav from '@/components/wedding/Nav';
import Countdown from '@/components/wedding/Countdown';
import RsvpForm from '@/components/wedding/RsvpForm';
import Sprig from '@/components/wedding/Sprig';

const HERO = 'https://horizons-cdn.hostinger.com/bc31f9fb-9fa3-4378-81f9-a5eb7286982e/f9a5946d3629e888b5145a7845d2f38d.png';
const VENUE = 'https://images.unsplash.com/photo-1692013832057-4503159ab8eb?w=1280&h=832&fit=crop&q=80';
const HOTEL = 'https://images.unsplash.com/photo-1691228397429-351b4426447c?w=1216&h=896&fit=crop&q=80';

const ADDRESS = '2 Quamby Pl, Noosa Heads QLD 4567, Australia';
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Rickys+River+Bar+%26+Restaurant+2+Quamby+Pl+Noosa+Heads+QLD';

const schedule = [
    { time: '3:30 pm', title: 'Ceremony', icon: Church, note: 'Riverside lawn, under the pandanus trees.' },
    { time: '4:30 pm', title: 'Cocktail hour', icon: GlassWater, note: 'Spritz, oysters and sea breeze on the deck.' },
    { time: '6:00 pm', title: 'Reception & dinner', icon: UtensilsCrossed, note: 'Long-table dinner with a few heartfelt speeches.' },
    { time: '8:30 pm', title: 'Party', icon: Music, note: 'Dancing until late — bring the shoes you can move in.' },
];

const goodToKnow = [
    { icon: Clock, title: 'Arrival', text: 'Please arrive by 3:00 pm so we can start on time; the ceremony begins promptly at 3:30 pm.' },
    { icon: Car, title: 'Parking', text: 'Free parking along Gympie Terrace and in the Boathouse lot. Rideshare drops off at the front entrance.' },
    { icon: Baby, title: 'Kids', text: 'We adore them, but this is an adults-only evening. Local sitters can be arranged on request.' },
];

const palette = [
    { name: 'Ocean', hex: '#38596B' },
    { name: 'Sage', hex: '#7E8C6E' },
    { name: 'Sand', hex: '#E2D3BD' },
    { name: 'Terracotta', hex: '#C77B58' },
    { name: 'Deep Navy', hex: '#22303C' },
];

const Divider = () => (
    <div className="mx-auto flex max-w-xs items-center gap-4 text-primary/60">
        <span className="h-px flex-1 bg-border" />
        <Sprig className="h-6 w-20" />
        <span className="h-px flex-1 bg-border" />
    </div>
);

const SectionLabel = ({ children }) => (
    <p className="text-[10px] uppercase tracking-widest-xl text-accent">{children}</p>
);

const HomePage = () => (
    <div className="bg-background">
        <Helmet>
            <title>Hannah &amp; Gustavo — 24 April 2027, Noosa, Australia</title>
            <meta
                name="description"
                content="Hannah and Gustavo are getting married on 24 April 2027 in Noosa, Australia. Find the schedule, venue, dress code and RSVP here."
            />
        </Helmet>

        <Nav />

        <section id="home" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[hsl(70_30%_88%)]">
            <img
                src={HERO}
                alt="Line art portrait of Hannah and Gustavo"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(40_33%_97%/0.55)] via-[hsl(40_33%_97%/0.35)] to-[hsl(40_33%_97%/0.75)]" />
            <div className="relative z-10 w-full max-w-3xl px-6 text-center text-foreground">
                <p className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">We are getting married</p>
                <h1 className="font-display mt-6 text-5xl font-light leading-[1.05] sm:text-7xl md:text-8xl">
                    Hannah
                    <span className="mx-3 italic opacity-80">&amp;</span>
                    Gustavo
                </h1>
                <Sprig className="mx-auto mt-6 h-8 w-40 text-primary/70" />
                <p className="font-display mt-4 text-2xl font-light tracking-[0.18em] sm:text-3xl">24 . 04 . 2027</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest-xl text-muted-foreground">Noosa &middot; Queensland, Australia</p>
                <div className="mt-12">
                    <Countdown />
                </div>
            </div>
            <a
                href="#party"
                aria-label="Scroll to about the party"
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground"
            >
                <ChevronDown size={26} strokeWidth={1} className="animate-bounce" />
            </a>
        </section>

        <section id="party" className="mx-auto max-w-[72rem] px-6 py-24 sm:py-32">
            <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                    <SectionLabel>About the party</SectionLabel>
                    <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">A day by the water</h2>
                    <p className="mt-6 text-sm leading-loose text-muted-foreground">
                        After nine years, two cities and one very beloved dog, we are saying yes in the place we love most.
                        Come as you are, stay as long as you like, and help us turn one afternoon in Noosa into the kind of
                        evening we will all still talk about years from now. Nothing about the day matters more to us than
                        having you in it.
                    </p>
                    <p className="font-display mt-6 text-2xl italic text-primary">With all our love, Hannah &amp; Gustavo</p>
                </div>
            </Reveal>

            <div className="mt-20">
                <Divider />
                <ol className="mt-16 space-y-0 border-t border-border">
                    {schedule.map((item, i) => (
                        <Reveal key={item.title} delay={i * 0.06}>
                            <li className="grid grid-cols-[auto_1fr] items-start gap-6 border-b border-border py-8 sm:grid-cols-[7rem_auto_1fr] sm:gap-10">
                                <span className="font-display order-2 text-xl text-accent sm:order-1">{item.time}</span>
                                <span className="order-1 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary sm:order-2">
                                    <item.icon size={18} strokeWidth={1.2} />
                                </span>
                                <div className="order-3 col-span-2 sm:col-span-1">
                                    <h3 className="font-display text-2xl font-light">{item.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                                </div>
                            </li>
                        </Reveal>
                    ))}
                </ol>
            </div>

            <Reveal>
                <div className="mt-16 bg-card px-6 py-10 sm:px-12">
                    <h3 className="font-display text-2xl font-light">Good to know</h3>
                    <div className="mt-8 grid gap-8 sm:grid-cols-3">
                        {goodToKnow.map((g) => (
                            <div key={g.title} className="border-t border-border pt-5">
                                <g.icon size={18} strokeWidth={1.2} className="text-primary" />
                                <p className="mt-3 text-[11px] uppercase tracking-widest-xl">{g.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>

        <section id="location" className="bg-card py-24 sm:py-32">
            <div className="mx-auto max-w-[72rem] px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal>
                        <img src={VENUE} alt="Waterfront riverside reception setting at Rickys River Bar, Noosa Heads" className="h-[26rem] w-full object-cover" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <SectionLabel>Location</SectionLabel>
                        <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">Rickys River Bar &amp; Restaurant</h2>
                        <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                            <MapPin size={16} strokeWidth={1.2} className="mt-0.5 shrink-0 text-accent" />
                            {ADDRESS}
                        </p>
                        <p className="mt-6 text-sm leading-loose text-muted-foreground">
                            A stunning waterfront location on the Noosa River, offering uninterrupted views, gorgeous sunsets
                            and a stylish setting for our celebration. Ceremony by the water, dinner and dancing as the tide
                            moves underneath and the light turns golden over the river.
                        </p>
                        <a
                            href={MAPS_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex min-h-[48px] items-center border border-foreground px-8 text-[11px] uppercase tracking-widest-xl transition-colors hover:bg-foreground hover:text-background active:scale-[0.98]"
                        >
                            Open in Google Maps
                        </a>
                    </Reveal>
                </div>

                <Reveal>
                    <div className="mt-16 border border-border">
                        <iframe
                            title="Map of Rickys River Bar & Restaurant, Noosa Heads"
                            src="https://www.google.com/maps?q=Rickys%20River%20Bar%20%26%20Restaurant%202%20Quamby%20Pl%20Noosa%20Heads%20QLD&output=embed"
                            className="h-[22rem] w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </Reveal>

                <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                    <Reveal>
                        <h3 className="font-display text-3xl font-light">Where to stay</h3>
                        <ul className="mt-8 border-t border-border">
                            {[
                                { name: 'Sofitel Noosa Pacific Resort', detail: 'Hastings Street — 5 min walk. Ask for the river-view rooms.' },
                                { name: 'Peppers Noosa Resort & Villas', detail: 'Noosa Heads — 8 min drive. Best for families and longer stays.' },
                                { name: 'The Sebel Noosa', detail: 'Hastings Street — 6 min walk. Good mid-range option.' },
                                { name: 'Noosa Pacific Resort Apartments', detail: 'Noosa Heads — 4 min walk to the venue along the river.' },
                            ].map((h) => (
                                <li key={h.name} className="border-b border-border py-5">
                                    <p className="text-sm font-medium">{h.name}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{h.detail}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm leading-loose text-muted-foreground">
                            <span className="uppercase tracking-widest-xl text-foreground">Transport &amp; parking:</span> the
                            Noosa Heads car park on Hastings Street is a short walk away, with metered street parking along
                            Quamby Place and the Esplanade. Taxis and rideshare run late along Hastings Street, and we will
                            have a shuttle leaving for Noosa Junction at 11:30 pm.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <img src={HOTEL} alt="Boutique beachside hotel near Hastings Street, Noosa" className="h-full min-h-[20rem] w-full object-cover" />
                    </Reveal>
                </div>
            </div>
        </section>

        <section id="dress" className="mx-auto max-w-[56rem] px-6 py-24 text-center sm:py-32">
            <Reveal>
                <SectionLabel>Dress code</SectionLabel>
                <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">Ocean party formal</h2>
                <Sprig className="mx-auto mt-6 h-8 w-40 text-primary/70" />
                <p className="mt-8 text-sm leading-loose text-muted-foreground">
                    Formal, but with sand under your feet. Think coastal evening: elegant, breathable, and ready to dance on a
                    deck when the breeze picks up after sunset.
                </p>
                <div className="mt-12 grid gap-10 text-left sm:grid-cols-2">
                    <div className="border-t border-border pt-6">
                        <p className="text-[11px] uppercase tracking-widest-xl">For her</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Floor-length or midi dresses in flowing fabrics — silk, linen, chiffon. Block heels, wedges or
                            elegant flats are far kinder to timber decks and grass than stilettos.
                        </p>
                    </div>
                    <div className="border-t border-border pt-6">
                        <p className="text-[11px] uppercase tracking-widest-xl">For him</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            A light suit in linen or summer wool, no tie needed. Deep blue, stone or sage all work beautifully.
                            Loafers or leather shoes; jacket optional once the dancing starts.
                        </p>
                    </div>
                </div>
                <div className="mt-14">
                    <p className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">Suggested palette</p>
                    <div className="mt-6 flex justify-center gap-3 sm:gap-6">
                        {palette.map((c) => (
                            <div key={c.name} className="text-center">
                                <span className="block h-16 w-12 sm:h-20 sm:w-20" style={{ backgroundColor: c.hex }} />
                                <span className="mt-3 block text-[9px] uppercase tracking-widest-xl text-muted-foreground">{c.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-10 text-sm italic text-accent">
                        Kindly leave white, ivory and off-white to the bride.
                    </p>
                </div>
            </Reveal>
        </section>

        <section id="rsvp" className="bg-card py-24 sm:py-32">
            <div className="mx-auto max-w-[56rem] px-6">
                <Reveal>
                    <div className="text-center">
                        <SectionLabel>RSVP</SectionLabel>
                        <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">Will you join us?</h2>
                        <p className="mt-5 text-sm leading-loose text-muted-foreground">
                            Please reply by 1 March 2027 so we can set the right number of seats at the table.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <div className="mt-14">
                        <RsvpForm />
                    </div>
                </Reveal>
            </div>
        </section>

        <footer className="border-t border-border py-14 text-center">
            <p className="font-display text-2xl tracking-[0.25em] text-muted-foreground">H &amp; G</p>
            <p className="mt-4 text-[10px] uppercase tracking-widest-xl text-muted-foreground">
                24 April 2027 &middot; Noosa, Australia
            </p>
            <nav className="mt-6 flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest-xl text-muted-foreground">
                <a href="#party" className="hover:text-foreground">About the Party</a>
                <a href="#location" className="hover:text-foreground">Location</a>
                <a href="#dress" className="hover:text-foreground">Dress Code</a>
                <a href="#rsvp" className="hover:text-foreground">RSVP</a>
            </nav>
            <p className="mt-8 text-[10px] text-muted-foreground/80">
                &copy; {new Date().getFullYear()} Hannah &amp; Gustavo
            </p>
        </footer>
    </div>
);

export default HomePage;
