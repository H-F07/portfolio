const projectUrl = "https://github.com/H-F07/hugo-faure-dossiers-pros-DWWM";
const liveUrl = "https://hugo-faure-dossiers-pros-dwwm.vercel.app";
const email = "hugo.faure07@icloud.com";
const phoneDisplay = "+33 7 62 37 74 78";
const phoneLink = "+33762377478";

const skills = [
  ["React / Next.js", "Utilisés dans mon projet"],
  ["TypeScript", "Pratique en projet"],
  ["Tailwind CSS", "Pratique en projet"],
  ["Supabase / SQL", "Bases pratiques"],
  ["Git / GitHub", "Gestion de code"],
];

const marquee = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Git", "GitHub", "Vercel", "SQL"];

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const GithubIcon = () => (
  <svg {...iconProps}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const css = `
  html { scroll-behavior: smooth; }
  body { background: #030a1c; }

  .bg-scene {
    background:
      radial-gradient(ellipse 50% 40% at 15% 8%, rgba(70,150,255,.30), transparent 70%),
      radial-gradient(ellipse 55% 45% at 100% 38%, rgba(30,80,220,.50), transparent 70%),
      radial-gradient(ellipse 60% 40% at 0% 100%, rgba(20,110,230,.22), transparent 70%),
      linear-gradient(180deg, #030a1c 0%, #061433 55%, #020817 100%);
  }
  .grid-lines {
    background-image:
      linear-gradient(rgba(150,190,255,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(150,190,255,.04) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%);
  }

  .glass {
    position: relative;
    background: linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.025));
    backdrop-filter: blur(26px) saturate(180%);
    -webkit-backdrop-filter: blur(26px) saturate(180%);
    border: 1px solid rgba(255,255,255,.12);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(255,255,255,.04), 0 24px 60px rgba(0,0,0,.5);
    transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .35s, box-shadow .35s;
  }
  .glass::before {
    content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
    background: radial-gradient(500px circle at 0% 0%, rgba(90,160,255,.18), transparent 45%);
    opacity: 0; transition: opacity .35s;
  }
  .lift:hover { transform: translateY(-6px); border-color: rgba(110,170,255,.45); box-shadow: inset 0 1px 0 rgba(255,255,255,.4), 0 30px 70px rgba(0,0,0,.55), 0 0 40px rgba(60,130,255,.18); }
  .lift:hover::before { opacity: 1; }

  .btn, .btn-ghost {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    padding: 13px 24px; border-radius: 9999px; font-weight: 700; font-size: .95rem;
    transition: transform .25s, box-shadow .25s, background .25s, border-color .25s;
  }
  .btn {
    color: #ffffff;
    background: linear-gradient(135deg, #5aa2ff, #2457e6);
    border: 1px solid rgba(170,210,255,.6);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.55), 0 0 28px rgba(60,130,255,.45);
  }
  .btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: inset 0 1px 0 rgba(255,255,255,.7), 0 0 46px rgba(80,150,255,.75); }
  .btn-ghost {
    color: #eaf1ff; background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.16);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  }
  .btn-ghost:hover { transform: translateY(-2px); background: rgba(255,255,255,.12); border-color: rgba(110,170,255,.6); }

  .chip {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 14px; border-radius: 9999px; font-size: .8rem; font-weight: 600;
    color: #cfe2ff; background: rgba(70,140,255,.12); border: 1px solid rgba(110,170,255,.3);
  }
  .grad-text {
    background: linear-gradient(100deg, #ffffff 0%, #bcd8ff 45%, #5aa2ff 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .eyebrow { font-size: .72rem; font-weight: 800; letter-spacing: .24em; text-transform: uppercase; color: #6aaeff; }

  .marquee { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
  .marquee-track { display: flex; gap: 14px; width: max-content; animation: scroll 28s linear infinite; }
  @keyframes scroll { to { transform: translateX(-50%); } }

  .pulse { animation: pulse 2s ease-in-out infinite; }
  @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(90,160,255,.65); } 50% { box-shadow: 0 0 0 8px rgba(90,160,255,0); } }

  .contact-row { display: flex; align-items: center; gap: 16px; padding: 16px 18px; border-radius: 18px;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); transition: background .25s, border-color .25s, transform .25s; }
  a.contact-row:hover { background: rgba(70,140,255,.14); border-color: rgba(110,170,255,.55); transform: translateX(4px); }
  .icon-box { display: flex; height: 46px; width: 46px; flex: none; align-items: center; justify-content: center; border-radius: 14px;
    background: rgba(70,140,255,.16); border: 1px solid rgba(110,170,255,.4); color: #9cc9ff; }

  @media (prefers-reduced-motion: reduce) { .marquee-track, .pulse { animation: none; } }
`;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-slate-200 selection:bg-blue-500/40">
      <style>{css}</style>

      <div className="bg-scene fixed inset-0 -z-20" />
      <div className="grid-lines fixed inset-0 -z-10" />

      {/* NAV */}
      <header className="sticky top-4 z-30 mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#accueil" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/40 bg-blue-500/20 text-sm font-black text-blue-100 shadow-[0_0_18px_rgba(80,150,255,.5)]">HF</span>
            <span className="font-black tracking-tight text-white">HUGO FAURE<span className="text-blue-400">.</span></span>
          </a>
          <nav className="hidden gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a className="transition hover:text-blue-300" href="#projet">Projet</a>
            <a className="transition hover:text-blue-300" href="#appel-offre">Appel d’offre</a>
            <a className="transition hover:text-blue-300" href="#competences">Compétences</a>
            <a className="transition hover:text-blue-300" href="#contact">Contact</a>
          </nav>
          <a href={`mailto:${email}`} className="btn !px-4 !py-2 !text-sm">Me contacter</a>
        </div>
      </header>

      {/* HERO */}
      <section id="accueil" className="relative mx-auto max-w-6xl px-5 pb-12 pt-20 md:px-8 md:pt-28">
        <div className="chip mb-8">
          <span className="pulse h-2 w-2 rounded-full bg-blue-400" />
          Disponible pour une première expérience
        </div>
        <h1 className="grad-text max-w-4xl text-5xl font-black leading-[1.03] tracking-tight sm:text-7xl md:text-8xl">
          Je crée des applications web modernes.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300/90 sm:text-xl">
          Hugo Faure, développeur web junior formé à La Plateforme. J’ai conçu
          Card-Kingdom, une place de marché de cartes Pokémon et Yu-Gi-Oh!,
          de l’interface jusqu’à la base de données.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a className="btn" href={liveUrl} target="_blank" rel="noreferrer">Voir le site en ligne ↗</a>
          <a className="btn-ghost" href={projectUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn-ghost" href="#contact">Contact ↓</a>
        </div>

        <div className="marquee mt-16">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="chip !px-5 !py-2 !text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJET */}
      <section id="projet" className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow">01 / Projet</p>
        <h2 className="grad-text mt-3 text-3xl font-black sm:text-5xl">Card-Kingdom</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-6">
          <div className="glass lift overflow-hidden rounded-[28px] p-7 sm:p-9 md:col-span-4">
            <span className="chip">Projet de formation</span>
            <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">Acheter, vendre et échanger des cartes à collectionner.</h3>
            <p className="mt-4 max-w-xl leading-8 text-slate-300/90">
              Application web complète développée pendant ma formation : interface,
              authentification, gestion des données et espace d’administration.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href={liveUrl} target="_blank" rel="noreferrer" className="btn">Voir le site en ligne ↗</a>
              <a href={projectUrl} target="_blank" rel="noreferrer" className="btn-ghost">Dépôt GitHub ↗</a>
            </div>
          </div>

          <div className="glass lift flex flex-col justify-between rounded-[28px] p-7 md:col-span-2">
            <p className="eyebrow">Stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind", "Supabase"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>

          <div className="glass lift rounded-[28px] p-7 md:col-span-2">
            <p className="text-5xl font-black text-white">2</p>
            <p className="mt-2 text-sm text-slate-400">univers de cartes : Pokémon et Yu-Gi-Oh!</p>
          </div>
          <div className="glass lift rounded-[28px] p-7 md:col-span-2">
            <p className="text-5xl font-black text-blue-300">100%</p>
            <p className="mt-2 text-sm text-slate-400">en ligne, déployé sur Vercel</p>
          </div>
          <div className="glass lift rounded-[28px] p-7 md:col-span-2">
            <p className="text-5xl font-black text-white">Auth</p>
            <p className="mt-2 text-sm text-slate-400">connexion et profils via Supabase</p>
          </div>
        </div>
      </section>

      {/* APPEL D'OFFRE */}
      <section id="appel-offre" className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow">02 / Appel d’offre</p>
        <h2 className="grad-text mt-3 text-3xl font-black sm:text-5xl">mars/ai FESTIVAL</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-6">
          <div className="glass lift overflow-hidden rounded-[28px] p-7 sm:p-9 md:col-span-4">
            <div className="flex flex-wrap gap-2">
              <span className="chip">Travail de groupe</span>
              <span className="chip">Pendant ma formation</span>
            </div>
            <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">
              Candidature pour créer le site web d’un festival de courts métrages IA.
            </h3>
            <p className="mt-4 max-w-xl leading-8 text-slate-300/90">
              Pendant ma formation, j’ai participé, en groupe, à un appel d’offre pour
              la création du site web du mars/ai FESTIVAL, festival de courts métrages
              réalisés avec l’IA, qui s’est tenu à Marseille il y a quelques mois.
            </p>
            <p className="mt-4 max-w-xl leading-8 text-slate-300/90">
              Notre candidature n’a pas été retenue, mais elle m’a donné une première
              expérience concrète : répondre à un appel d’offre réel, en équipe.
            </p>
          </div>

          <div className="glass lift flex flex-col justify-between rounded-[28px] p-7 md:col-span-2">
            <p className="eyebrow">Contexte</p>
            <div className="mt-5 grid gap-4">
              <div>
                <p className="text-sm text-slate-400">Équipe</p>
                <p className="font-bold text-white">Antenne de Cannes, La Plateforme.</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Concurrents</p>
                <p className="font-bold text-white">Groupes des autres antennes de La Plateforme en France.</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Résultat</p>
                <p className="font-bold text-white">Appel d’offre non remporté par mon groupe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow">03 / Compétences</p>
        <h2 className="grad-text mt-3 text-3xl font-black sm:text-5xl">Ce que j’ai pratiqué</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(([name, level], index) => (
            <div key={name} className="glass lift rounded-[24px] p-6">
              <span className="font-mono text-sm font-bold text-blue-400">0{index + 1}</span>
              <h3 className="mt-3 text-xl font-black text-white">{name}</h3>
              <p className="mt-2 text-sm text-slate-400">{level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-6xl px-5 pb-24 pt-8 md:px-8">
        <div className="glass relative overflow-hidden rounded-[32px] p-7 sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">04 / Contact</p>
              <h2 className="grad-text mt-3 text-4xl font-black sm:text-6xl">Travaillons ensemble.</h2>
              <p className="mt-5 max-w-md leading-8 text-slate-300/90">
                Je recherche une première opportunité en développement web junior.
                Écris-moi ou appelle-moi, je réponds rapidement.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${email}`} className="btn">Envoyer un e-mail ↗</a>
                <a href={`tel:${phoneLink}`} className="btn-ghost">Appeler</a>
              </div>
            </div>

            <div className="grid gap-3">
              <a href={`mailto:${email}`} className="contact-row">
                <span className="icon-box"><MailIcon /></span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">E-mail</span>
                  <span className="font-bold text-white">{email}</span>
                </span>
              </a>
              <a href={`tel:${phoneLink}`} className="contact-row">
                <span className="icon-box"><PhoneIcon /></span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">Téléphone</span>
                  <span className="font-bold text-white">{phoneDisplay}</span>
                </span>
              </a>
              <a href="https://github.com/H-F07" target="_blank" rel="noreferrer" className="contact-row">
                <span className="icon-box"><GithubIcon /></span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">GitHub</span>
                  <span className="font-bold text-white">github.com/H-F07</span>
                </span>
              </a>
              <div className="contact-row">
                <span className="icon-box"><PinIcon /></span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">Localisation</span>
                  <span className="font-bold text-white">Région PACA, France</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-5 py-6 text-center text-sm text-slate-500">
                © 2026 HUGO FAURE · Développeur web junior
      </footer>
    </main>
  );
}