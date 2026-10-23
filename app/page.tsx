const projectUrl = "https://github.com/H-F07/hugo-faure-dossiers-pros-DWWM";
const liveUrl = "https://hugo-faure-dossiers-pros-dwwm.vercel.app";

const skills = [
  ["React / Next.js", "Utilisés dans mon projet"],
  ["TypeScript", "Pratique en projet"],
  ["Tailwind CSS", "Pratique en projet"],
  ["Supabase / SQL", "Bases pratiques"],
  ["Git / GitHub", "Gestion de code"],
];

const paper =
  "rounded-2xl border border-white/90 bg-[#fffdf6] shadow-[inset_0_2px_3px_#ffffff,0_5px_0_#d7cbb5,0_10px_20px_#8e79552b]";

const button =
  "inline-flex items-center justify-center rounded-xl border border-white/70 bg-gradient-to-b from-[#ffbd62] via-[#f5a33c] to-[#d97819] px-5 py-3 font-bold text-[#542b0a] shadow-[inset_0_2px_2px_#fff9,0_4px_0_#a95713,0_7px_12px_#79502630] transition-all hover:brightness-105 active:translate-y-1 active:shadow-[inset_0_2px_4px_#0002,0_1px_0_#a95713]";

const buttonSecondary =
  "inline-flex items-center justify-center rounded-xl border border-[#c7b99f] bg-gradient-to-b from-white to-[#e6dcc9] px-5 py-3 font-bold text-[#554632] shadow-[inset_0_2px_3px_white,0_4px_0_#c5b69b,0_7px_12px_#79502620] transition-all hover:brightness-105 active:translate-y-1 active:shadow-[0_1px_0_#c5b69b]";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#eee5d3] text-[#383025] selection:bg-orange-200">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:radial-gradient(#a38e6b_0.6px,transparent_0.6px)] [background-size:5px_5px]" />

      <header className="relative border-b border-[#cbbda4] bg-gradient-to-b from-[#fffdf7] to-[#e8deca] shadow-[0_3px_8px_#715b351c]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
          <a href="#accueil" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-gradient-to-br from-[#fff7e6] to-[#d9c5a2] text-lg font-black text-[#9b5b21] shadow-[inset_0_2px_4px_white,0_3px_0_#b8a384,0_5px_8px_#0002]">
              HF
            </span>
            <span className="font-black tracking-tight">HUGO FAURE<span className="text-orange-600">.</span></span>
          </a>
          <nav className="flex flex-wrap gap-4 text-sm font-semibold sm:gap-6">
            <a className="hover:text-orange-700" href="#projet">Projet</a>
            <a className="hover:text-orange-700" href="#competences">Compétences</a>
            <a className="hover:text-orange-700" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="accueil" className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7c5a6] bg-[#faf2e2] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#98602b] shadow-[inset_0_1px_2px_white,0_2px_0_#d0bea0]">
            <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_4px_#68a65d]" />
            Portfolio · Développement web
          </div>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Bonjour, moi c’est Hugo<span className="text-[#d87927]">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-2xl font-bold leading-snug text-[#8d7657]">
            Développeur web junior, curieux et prêt à progresser.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5445]">
            Formé au développement web à La Plateforme, j’ai réalisé
            Card-Kingdom, un projet autour des cartes Pokémon et Yu-Gi-Oh!.
            Je cherche une première expérience pour consolider mes acquis,
            apprendre de bonnes pratiques et gagner en autonomie.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a className={button} href={liveUrl} target="_blank" rel="noreferrer">
              Voir le site en ligne ↗
            </a>
            <a className={buttonSecondary} href="#projet">Découvrir mon projet <span className="ml-2">↘</span></a>
            <a className={buttonSecondary} href={projectUrl} target="_blank" rel="noreferrer">
              Voir mon GitHub ↗
            </a>
          </div>
        </div>

        <div className={`${paper} relative rotate-[1deg] p-5 sm:p-7`}>
          <div className="absolute -top-3 left-8 h-7 w-20 -rotate-6 border border-[#d8c39a] bg-[#f4dca5]/90 shadow-sm" />
          <div className="rounded-xl border border-[#dfd3bc] bg-[#f7f0e2] p-5 shadow-[inset_0_2px_6px_#9b83521c] sm:p-7">
            <div className="flex items-center justify-between border-b border-dashed border-[#cbb99a] pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7950]">Carnet de développeur</span>
              <span className="text-xl">✳</span>
            </div>
            <div className="py-7">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-gradient-to-br from-[#fff1d7] to-[#d8b78a] text-3xl shadow-[inset_0_2px_4px_white,0_4px_0_#c5a77c,0_6px_10px_#0002]">⌘</div>
              <h2 className="text-2xl font-black">En construction, mais déjà concret.</h2>
              <p className="mt-3 leading-7 text-[#6e604c]">Un projet complet de formation, des technologies web modernes et l’envie de continuer à apprendre.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[#ded0b7] bg-[#fffaf0] p-3 shadow-[inset_0_1px_3px_white,0_2px_3px_#9b83521c]">
                <p className="text-xs text-[#927d5f]">Projet phare</p>
                <p className="mt-1 font-black">Card-Kingdom</p>
              </div>
              <div className="rounded-lg border border-[#ded0b7] bg-[#fffaf0] p-3 shadow-[inset_0_1px_3px_white,0_2px_3px_#9b83521c]">
                <p className="text-xs text-[#927d5f]">Objectif</p>
                <p className="mt-1 font-black">Poste junior</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projet" className="relative border-y border-[#cdbda1] bg-gradient-to-b from-[#e2d4bc] to-[#eee5d3]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a3652c]">01 / Projet sélectionné</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Un projet concret, de l’interface aux données.</h2>

          <div className="mt-9 grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
            <div className={`${paper} flex min-h-72 flex-col justify-between overflow-hidden p-6 sm:p-8`}>
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-[#d5c2a0] bg-[#f6ead4] px-3 py-1 text-xs font-bold text-[#8d602e]">Projet de formation</span>
                <span className="text-2xl text-[#bd7835]">✦</span>
              </div>
              <div className="py-8 text-center">
                <div className="text-5xl drop-shadow-sm">♠ <span className="text-[#d97a31]">♦</span> ♣ <span className="text-red-700">♥</span></div>
                <h3 className="mt-4 text-3xl font-black tracking-wide">CARD-KINGDOM</h3>
                <p className="mt-2 text-sm text-[#8b795f]">Cartes à collectionner · Application web</p>
              </div>
              <div className="rounded-lg border border-[#d8c9af] bg-gradient-to-b from-[#f4ead8] to-[#e4d5bc] p-3 text-center text-xs font-semibold text-[#79674d] shadow-[inset_0_1px_2px_white,0_2px_0_#d0bea1]">
                NEXT.JS · TYPESCRIPT · SUPABASE
              </div>
            </div>

            <div className={`${paper} p-6 sm:p-8`}>
              <h3 className="text-2xl font-black">Card-Kingdom</h3>
              <p className="mt-4 leading-8 text-[#5f5445]">
                Une application dédiée aux cartes Pokémon et Yu-Gi-Oh!, développée
                pendant ma formation. Le projet m’a permis de travailler sur
                l’interface, l’authentification, la gestion des données et plusieurs
                fonctionnalités d’une application web.
              </p>
              <h4 className="mt-6 text-sm font-black uppercase tracking-widest text-[#987044]">Technologies utilisées</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"].map((tech) => (
                  <span key={tech} className="rounded-md border border-[#d7c6a9] bg-gradient-to-b from-white to-[#eee2cd] px-3 py-2 text-sm font-semibold text-[#66543d] shadow-[inset_0_1px_2px_white,0_2px_0_#d7c6a9]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <a href={liveUrl} target="_blank" rel="noreferrer" className={button}>
                  Voir le site en ligne ↗
                </a>
                <a href={projectUrl} target="_blank" rel="noreferrer" className={buttonSecondary}>
                  Explorer le dépôt GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a3652c]">02 / Boîte à outils</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Ce que j’ai pratiqué</h2>
        <p className="mt-4 max-w-2xl leading-7 text-[#6c5d49]">
          Les technologies rencontrées pendant ma formation et utilisées sur mon projet.
          Je continue à renforcer mes connaissances et mon autonomie.
        </p>
        <div className={`${paper} mt-8 overflow-hidden p-3 sm:p-5`}>
          {skills.map(([name, level], index) => (
            <div key={name} className={`flex flex-wrap items-center justify-between gap-3 px-3 py-5 sm:px-5 ${index !== skills.length - 1 ? "border-b border-[#e2d5bf]" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-[#bd7835]">0{index + 1}</span>
                <span className="font-bold">{name}</span>
              </div>
              <span className="rounded-full border border-[#d8c7a9] bg-gradient-to-b from-[#fffdf7] to-[#eee2ce] px-3 py-1.5 text-xs font-semibold text-[#78664e] shadow-[inset_0_1px_2px_white,0_1px_0_#d7c6a9]">{level}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className={`${paper} relative overflow-hidden p-7 sm:p-12`}>
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a3652c]">03 / Prochaine étape</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-5xl">Construisons la suite.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#625541]">
              Je recherche une première opportunité professionnelle dans le développement
              web junior, pour contribuer à des projets réels et continuer à progresser.
            </p>
            <a href={projectUrl} target="_blank" rel="noreferrer" className={`${button} mt-7`}>
              Me retrouver sur GitHub ↗
            </a>
            <p className="mt-5 text-sm text-[#927d62]">Mes coordonnées seront ajoutées avant la mise en ligne du portfolio.</p>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-[#cdbda1] bg-gradient-to-b from-[#e7dcc8] to-[#d8c8ad] px-5 py-6 text-center text-sm text-[#78674f]">
        © {new Date().getFullYear()} Hugo Faure · Portfolio développeur web junior
      </footer>
    </main>
  );
}