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
    { label: "Global Reach", value: "100+" },
    { label: "Convenience", value: "Targeted Delivery" },
    { label: "Big Experience", value: "Expert Team" },
    { label: "Team Strength", value: "Client Satisfaction" },
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
            <div>
              <p className="text-xl font-extrabold tracking-tight text-primary">
                madarpharma
              </p>
              <p className="text-xs text-slate-500">Your Partner in Better Health</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
            <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#home">
              Home
            </a>
            <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#offerings">
              Offerings
            </a>
            <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#about">
              About
            </a>
            <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#services">
              Services
            </a>
            <a className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>

          <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90">
            Contact Us
          </button>
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
              UK-Focused Pharmaceutical
              <span className="block text-slate-800">Supply for Global Markets.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
              madarpharma supports registered importers and healthcare partners
              with reliable sourcing, compliance-led operations, and dependable
              export logistics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex w-[190px] items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">
                Request a Quote
              </button>
              <button className="inline-flex w-[190px] items-center justify-center rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-slate-50">
                Become a Partner
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-secondary/40 blur-xl" />
            <div className="absolute -bottom-6 right-2 h-28 w-28 rounded-full bg-primary/20 blur-xl" />
            <HeroCarousel />
          </div>
        </section>

        <section id="offerings" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <h2 className="text-3xl font-black text-primary md:text-4xl">
            What We Offer
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-primary">{feature.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <div className="rounded-3xl border border-primary/10 bg-primary px-6 py-10 text-white md:px-10">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-1 text-sm text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                About madarpharma
              </p>
              <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">
                UK's trusted pharmaceutical supply partner.
              </h2>
              <p className="mt-4 text-slate-600">
                With rising demand across Middle East and African regions, we
                provide bonafide importers with consistent pharmaceutical supply,
                transparent communication, and scalable B2B fulfillment.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary">
                Core Categories
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {offerings.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <h2 className="text-3xl font-black text-primary md:text-4xl">
            How it works
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
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

        <section className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
          <div className="rounded-3xl border border-primary/15 bg-white p-8 text-center shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">Scale Your Business</p>
            <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">Connect With Us Today!</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Expand your pharmaceutical portfolio with trusted sourcing and export-ready operations.</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
          <h2 className="text-3xl font-black text-primary md:text-4xl">
            Our Services
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-bold text-primary">{service}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Structured execution with quality, documentation, and timeline
                  accountability.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
          <div className="rounded-3xl border border-secondary/40 bg-secondary/20 p-8 md:p-10">
            <h2 className="text-3xl font-black text-primary md:text-4xl">Ready To Become Partner?</h2>
            <p className="mt-3 max-w-2xl text-slate-700">Register now for online access to UK healthcare products.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex w-[190px] items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">Become a Partner</button>
              <button className="inline-flex w-[190px] items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-slate-50">Request a Callback</button>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-20 md:px-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-3xl font-black text-primary md:text-4xl">Contact Us Form</h2>
            <p className="mt-2 text-lg font-semibold text-slate-700">Contact Form</p>
            <p className="mt-3 max-w-2xl text-slate-700">
              Share your importer profile and business requirements. Our team will respond with tailored support.
            </p>

            <form className="mt-6 space-y-7">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="First Name" />
                <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Last Name" />
                <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Email" />
                <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" placeholder="Contact Number" />
                <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4 md:col-span-2" placeholder="The company name*" />
                <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4 md:col-span-2" placeholder="Country" />
              </div>

              <fieldset>
                <legend className="text-sm font-bold text-primary">Are you a first-time importer?</legend>
                <div className="mt-3 flex flex-wrap gap-6 text-sm text-slate-700">
                  <label className="inline-flex items-center gap-2"><input type="radio" name="firstTimeImporter" /> Yes, I am</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="firstTimeImporter" /> No, I am not</label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-bold text-primary">How often do you place orders?</legend>
                <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderFrequency" /> Monthly</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderFrequency" /> Quarterly</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderFrequency" /> 6 Months</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderFrequency" /> 12 Months</label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-bold text-primary">Order Value Size</legend>
                <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderValue" /> 5K - 10K GBP</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderValue" /> 10K - 15K GBP</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderValue" /> 15K - 20K GBP</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderValue" /> 20K - 50K GBP</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="orderValue" /> Above 50K GBP</label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-bold text-primary">Categories</legend>
                <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                  <label className="inline-flex items-center gap-2"><input type="checkbox" /> Generic</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" /> OTC</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" /> Vitamins & Supplements</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" /> Personal Care</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" /> Skincare</label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-bold text-primary">Type of License</legend>
                <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
                  <label className="inline-flex items-center gap-2"><input type="radio" name="licenseType" /> Importer</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="licenseType" /> Pharmacy</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="licenseType" /> Retail Pharmacy</label>
                  <label className="inline-flex items-center gap-2"><input type="radio" name="licenseType" /> Wholesaler</label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-bold text-primary">Would you like to book a meeting?</legend>
                <div className="mt-3">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" /> Book a Meeting</label>
                </div>
              </fieldset>

              <div>
                <label className="mb-2 block text-sm font-bold text-primary">Tell us more about your business</label>
                <textarea className="min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-primary/20 focus:ring-4" />
              </div>

              <label className="flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <input type="checkbox" className="mt-1" />
                <span>
                  I agree to the Privacy Policy, and acknowledge the use of my data in accordance with applicable laws.
                </span>
              </label>

              <button className="mt-5 block rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
          <div className="rounded-3xl border border-secondary/40 bg-secondary/20 p-8 md:p-10">
            <h2 className="text-3xl font-black text-primary md:text-4xl">
              Global Support Network
            </h2>
            <p className="mt-3 max-w-2xl text-slate-700">
              Contact our team for wholesale inquiries, export opportunities,
              and international distribution partnerships.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex w-[190px] items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">
                Request a Callback
              </button>
              <button className="inline-flex w-[190px] items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-slate-50">
                Become a Partner
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:px-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Madarpharma logo"
                className="h-11 w-11 rounded-xl object-cover ring-2 ring-secondary/40"
              />
              <div>
                <p className="text-xl font-extrabold tracking-tight text-white">
                  madarpharma
                </p>
                <p className="text-xs text-slate-400">Your Partner in Better Health</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Trusted pharmaceutical wholesaler and export partner delivering
              quality healthcare products with compliance-first operations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="transition hover:text-secondary">Home</a></li>
              <li><a href="#offerings" className="transition hover:text-secondary">Offerings</a></li>
              <li><a href="#about" className="transition hover:text-secondary">About</a></li>
              <li><a href="#services" className="transition hover:text-secondary">Services</a></li>
              <li><a href="#contact" className="transition hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Email: info@madarpharma.com</li>
              <li>Phone: +000 0000 000</li>
              <li>Mon - Fri: 8:00 AM - 5:00 PM</li>
              <li>Global wholesale support</li>
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
