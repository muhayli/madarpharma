import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const offerings = [
    {
      title: "Generic Pharmaceuticals",
      description:
        "Committed to delivering high-quality, affordable medicines worldwide.",
    },
    {
      title: "Branded Pharmaceuticals",
      description:
        "Balancing quality and availability with competitive wholesale pricing.",
    },
    {
      title: "OTC Products",
      description:
        "Global-standard OTC brands for pharmacies, retailers, and distributors.",
    },
    {
      title: "Vitamins & Supplements",
      description:
        "Targeted nutritional solutions with trusted dosage and quality control.",
    },
    {
      title: "FMCG Products",
      description:
        "Everyday wellness and personal-care essentials for broad market demand.",
    },
    {
      title: "GSL Range",
      description:
        "Consumer healthcare lines including consumables and diagnostics.",
    },
  ];

  const services = [
    "Regulatory & Compliance Support",
    "Export & International Distribution",
    "Unlicensed Medicines & Supply",
    "Fast & Reliable Order Processing & Delivery",
    "Bulk & Wholesale Ordering Platform",
    "GDP Compliant Transport",
  ];

  const processSteps = [
    {
      title: "1. Submit Request",
      description:
        "Share product demand, required brands, and destination details.",
    },
    {
      title: "2. Commercial & Compliance Check",
      description:
        "We validate availability, documentation, and shipping requirements.",
    },
    {
      title: "3. Dispatch & Ongoing Support",
      description:
        "Your order is packed, shipped, and supported until delivery completion.",
    },
  ];
  const stats = [
    { label: "Base", value: "UK-Based" },
    { label: "Model", value: "Wholesale & Export" },
    { label: "Promise", value: "Quality Assured" },
    { label: "Focus", value: "Ethical Practice" },
  ];

  const corePrinciples = [
    "Quality without compromise",
    "Transparency in every transaction",
    "Long-term partnership with our clients",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-white text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Madarpharma logo"
              className="h-12 w-12 rounded-xl object-cover ring-2 ring-secondary/40"
            />
            <img
              src="/slogan-cropped.png"
              alt="Madarpharma slogan"
              className="h-7 w-auto shrink-0 object-contain md:h-8"
            />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
              <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#home">
                Home
              </a>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#services">
                Services
              </a>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#about">
                About
              </a>
            </nav>
            <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90">
              Contact Us
            </a>
          </div>

          <details className="group w-full md:hidden">
            <summary className="ml-auto flex w-fit cursor-pointer list-none items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-primary" href="#home">
                  Home
                </a>
                <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-primary" href="#services">
                  Services
                </a>
                <a className="rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-primary" href="#about">
                  About
                </a>
              </nav>
              <a href="#contact" className="mt-3 block w-full rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary/90">
                Contact Us
              </a>
            </div>
          </details>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid w-full max-w-[1300px] scroll-mt-24 grid-cols-1 items-center gap-10 px-6 pb-16 pt-8 md:px-10 lg:grid-cols-[1fr_1.25fr] lg:pt-16"
        >
          <div>
            <span className="inline-flex items-center rounded-full border border-secondary bg-secondary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Pharmaceutical Wholesaler • Distributor • Exporter
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-primary md:text-5xl">
              UK-Quality Pharmaceutical
              <span className="block text-slate-800">Supply for Global Markets.</span>
            </h1>
             <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
              Madar Pharma is a UK-based pharmaceutical wholesaler supplying
              high-quality medicines from the United Kingdom to international
              and domestic markets through compliant, secure, and reliable
              distribution.
             </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-secondary/40 blur-xl" />
            <div className="absolute -bottom-6 right-2 h-28 w-28 rounded-full bg-primary/20 blur-xl" />
            <HeroCarousel />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* MHRA Card */}
            <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-5 text-white shadow-md">
              <svg className="absolute -right-4 -top-4 h-28 w-28 text-white/5" viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 2L4 14v20C4 50 17 61 32 64 47 61 60 50 60 34V14L32 2z"/>
              </svg>
              <div className="relative flex items-center gap-5">
                <svg className="h-14 w-14 shrink-0" viewBox="0 0 64 64" fill="none">
                  <path d="M32 4L6 15v17c0 14.4 11 26.4 26 29 15-2.6 26-14.6 26-29V15L32 4z" fill="white" fillOpacity="0.12" stroke="white" strokeWidth="1.5"/>
                  <path d="M32 11L12 20v12c0 10.5 8 19.2 20 21.2C44 51.2 52 42.5 52 32V20L32 11z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1"/>
                  <path d="M24 22l4 4 4-6 4 6 4-4v6H24v-6z" fill="white" fillOpacity="0.9"/>
                  <rect x="22" y="30" width="20" height="2" rx="1" fill="white" fillOpacity="0.7"/>
                  <path d="M25 38l4 4 10-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">UK Regulatory</p>
                  <h3 className="mt-0.5 text-lg font-black">MHRA Approved</h3>
                  <p className="mt-1 text-xs leading-5 text-white/60">Medicines &amp; Healthcare products Regulatory Agency</p>
                </div>
              </div>
            </div>

            {/* GDP Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white px-6 py-5 shadow-md ring-1 ring-primary/10">
              <svg className="absolute -right-5 -top-5 h-28 w-28 text-secondary/20" viewBox="0 0 64 64" fill="currentColor">
                <circle cx="32" cy="32" r="30"/>
              </svg>
              <div className="relative flex items-center gap-5">
                <svg className="h-14 w-14 shrink-0" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" stroke="#0d5c73" strokeWidth="2" fill="#0d5c73" fillOpacity="0.06"/>
                  <circle cx="32" cy="32" r="22" stroke="#0d5c73" strokeWidth="1" fill="none" strokeDasharray="3 2"/>
                  <circle cx="32" cy="32" r="15" fill="#0d5c73" fillOpacity="0.08" stroke="#0d5c73" strokeWidth="1.5"/>
                  <path d="M21 32l7 7 15-14" stroke="#0d5c73" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">EU &amp; UK Standards</p>
                  <h3 className="mt-0.5 text-lg font-black text-primary">GDP Compliant</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Good Distribution Practice — certified supply chain</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* What We Offer */}
        <section id="services" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Products</p>
          <h2 className="mt-2 text-3xl font-black text-primary md:text-4xl">What We Offer</h2>
          <p className="mt-3 max-w-2xl text-slate-500">From generics to consumer health, we supply a broad range of UK-quality pharmaceutical products to markets worldwide.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-black text-primary md:text-4xl">Built on Trust & Compliance</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <h3 className="mt-4 font-bold text-primary">MHRA Approved</h3>
              <p className="mt-2 text-sm text-slate-600">Fully approved by the UK's Medicines & Healthcare products Regulatory Agency.</p>
            </div>
            <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3 className="mt-4 font-bold text-primary">GDP Compliant</h3>
              <p className="mt-2 text-sm text-slate-600">All distribution operations meet Good Distribution Practice standards.</p>
            </div>
            <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="mt-4 font-bold text-primary">Global Reach</h3>
              <p className="mt-2 text-sm text-slate-600">Supplying healthcare providers, distributors, and organisations across international markets.</p>
            </div>
            <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 className="mt-4 font-bold text-primary">Ethical Practice</h3>
              <p className="mt-2 text-sm text-slate-600">Every transaction is underpinned by transparency, integrity, and long-term partnership.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Madar Pharma</p>
              <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">
                A trusted link between UK supply and global healthcare demand.
              </h2>
              <p className="mt-4 text-slate-600">
                Madar Pharma is a UK-based pharmaceutical wholesaler dedicated to supplying high-quality medicines from the United Kingdom to international markets. Operating with a strong commitment to regulatory compliance, quality assurance, and ethical practice, we support healthcare providers, distributors, and organisations worldwide.
              </p>
              <p className="mt-4 text-slate-600">
                Specialising in wholesale and export, we source products from reputable, fully licensed suppliers and ensure all medicines meet strict UK and international standards. By leveraging robust supply chains and trusted logistics partners, we deliver medicines with consistency, security, and transparency in every transaction.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-md">
              <img
                src="/building.jpeg"
                alt="Madar Pharma offices — Grosvenor House, Birmingham"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The Process</p>
          <h2 className="mt-2 text-3xl font-black text-primary md:text-4xl">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
          <div className="rounded-3xl bg-primary p-10 text-center text-white md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Scale Your Business</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Ready to Work With Us?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">Expand your pharmaceutical portfolio with trusted UK sourcing and export-ready operations.</p>
            <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-primary transition hover:bg-secondary">
              Get In Touch
            </a>
          </div>
        </section>


        <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-slate-200 shadow-sm lg:grid-cols-5">

            {/* Left — contact info */}
            <div className="flex flex-col justify-between bg-primary p-8 text-white lg:col-span-2 md:p-10">
              <div>
                <h2 className="text-3xl font-black md:text-4xl">Get In Touch</h2>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Reach out to our team for wholesale enquiries, export opportunities, or general information.
                </p>
              </div>

              <div className="mt-10 space-y-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">Address</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Grosvenor House<br />
                    11 St Paul's<br />
                    Birmingham, B3 1RB<br />
                    United Kingdom
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">Email</p>
                  <p className="mt-2 text-sm text-white/80">info@madarpharm.com</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">Phone Number</p>
                  <p className="mt-2 text-sm text-white/80">+44 7999 646947</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white p-8 lg:col-span-3 md:p-10">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Name *" />
                  <input className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Company Name" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Email Address *" />
                  <input className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Phone Number" />
                </div>
                <textarea className="min-h-36 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Enquiry *" />
                <label className="flex items-start gap-3 text-sm text-slate-600">
                  <input type="checkbox" className="mt-0.5 accent-primary" />
                  <span>I agree to the Privacy Policy and consent to my data being used to respond to my enquiry.</span>
                </label>
                <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:px-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/dark-logo.jpg"
                alt="Madarpharma logo"
                className="h-11 w-11 rounded-xl object-cover ring-2 ring-secondary/40"
              />
              <img
                src="/dark-slogan-cropped.png"
                alt="Madarpharma slogan"
                className="h-7 w-auto shrink-0 object-contain md:h-8"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Madar Pharma is a UK-based pharmaceutical wholesaler supplying
              high-quality medicines from the United Kingdom to international
              and domestic markets through compliant, secure, and reliable
              distribution.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="transition hover:text-secondary">Home</a></li>
              <li><a href="#about" className="transition hover:text-secondary">About</a></li>
              <li><a href="#services" className="transition hover:text-secondary">Services</a></li>
              <li><a href="#contact" className="transition hover:text-secondary">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Address
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-slate-400">
              <p>Grosvenor House</p>
              <p>11 St Paul's</p>
              <p>Birmingham</p>
              <p>B3 1RB</p>
              <p>United Kingdom</p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Email: info@madarpharm.com</li>
              <li>Phone: +44 7999 646947</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
            <p>
              © {new Date().getFullYear()} madarpharma. All rights reserved.
            </p>
            <p>Privacy Policy • Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
