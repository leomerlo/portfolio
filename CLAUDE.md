# Portfolio — Copy reference

All UI strings used in the site. Source of truth for the i18n toggle (EN / ES).

---

## BaseLayout

| Key | EN | ES |
|---|---|---|
| skip-link | Skip to main content | Ir al contenido principal |
| theme-toggle.to-light | Switch to light mode | Cambiar a modo claro |
| theme-toggle.to-dark | Switch to dark mode | Cambiar a modo oscuro |
| lang-toggle.label | Cambiar a español | Switch to English |
| meta.title | Leandro Merlo — Senior Frontend Engineer | — |
| meta.description | I build frontend systems that teams actually use. … | — |

---

## Sidebar

| Key | EN | ES |
|---|---|---|
| site.title | Fullstack Developer, Frontend Focused | Desarrollador Fullstack, con foco en Frontend |
| site.tagline | I build frontend systems that teams actually use. | Construyo sistemas frontend que los equipos realmente usan. |
| nav.about | About | Sobre mí |
| nav.work | Work | Trabajo |
| nav.contact | Contact | Contacto |
| nav.features | Features | Secciones |
| nav.reviews | Reviews | Reseñas |
| nav.linkedin | LinkedIn | LinkedIn |
| nav.other-works | Other works | Otros trabajos |
| nav.contact-me | Contact Me | Contactame |
| nav.menu | Open menu | Abrir menú |
| nav.menu.close | Close menu | Cerrar menú |

---

## Hero (index)

| Key | EN | ES |
|---|---|---|
| hero.title | Fullstack dev Frontend focus | Dev Fullstack con foco en Frontend |
| hero.care | Caring for Performance & User Experiences | Cuido la performance y la experiencia de usuario |
| hero.thinker | Proactive thinker | Pensamiento proactivo |
| hero.thinker.detail | Passionate for the craft, always thinking on the next step | Apasionado por el oficio, siempre pensando en el próximo paso |
| hero.years.detail | Years of experience that makes a difference | Años de experiencia que hacen la diferencia |
| hero.learn-more | Learn More | Ver más |

---

## About section

| Key | EN | ES |
|---|---|---|
| about.heading | About | Sobre mí |
| about.p1 | I'm a fullstack developer with a strong frontend focus — 10+ years… | Soy desarrollador fullstack con fuerte foco en frontend — más de 10 años… |
| about.p2 | I've built design systems from scratch that reached 80%+… | Construí design systems desde cero que alcanzaron más del 80%… |
| about.p3 | I treat accessibility as architecture, not audit… | Trato la accesibilidad como arquitectura, no como auditoría… |
| about.p4 | I've also led cross-functional Frontend Guilds… | También lideré Frontend Guilds interfuncionales… |
| meta.focus.label | Focus | Especialidad |
| meta.focus.value | Frontend Architecture, Design Systems, A11y | Arquitectura Frontend, Design Systems, A11y |
| meta.stack.label | Stack | Stack |
| meta.stack.value | React · TypeScript · Node.js · CSS | React · TypeScript · Node.js · CSS |
| meta.location.label | Based in | Ubicación |
| meta.location.value | Buenos Aires, Argentina, Milky Way, Solar System | Buenos Aires, Argentina, Vía Láctea, Sistema Solar |

---

## Work section

| Key | EN | ES |
|---|---|---|
| work.heading | Work | Trabajo |
| work.experience.heading | Experience | Experiencia |
| work.projects.heading | Selected Projects | Proyectos Destacados |
| work.projects.pill | Projects | Proyectos |
| work.flavors.heading | NOW with MORE flavors | AHORA con MÁS sabores |
| work.flavors.frontend.kicker | Frontend experience | Experiencia Frontend |
| work.flavors.frontend.title | Design systems & frontend architecture | Design systems y arquitectura frontend |
| work.flavors.a11y.title | Accessibility & Performance | Accesibilidad y Performance |
| work.flavors.backend.kicker | Backend experience | Experiencia Backend |
| work.flavors.backend.title | Node, SQL & API | Node, SQL y APIs |
| work.my-work | My Work | Mi trabajo |
| project.view-more | View More | Ver más |

### Carousel (a11y labels)

| Key | EN | ES |
|---|---|---|
| carousel.label | Selected projects | Proyectos destacados |
| carousel.prev | Previous project | Proyecto anterior |
| carousel.next | Next project | Proyecto siguiente |

### Project card blocks

| Key | EN | ES |
|---|---|---|
| project1.block.adoption | Dev team adoption | Adopción del equipo dev |
| project1.block.speed.title | Speed & Quality | Velocidad y Calidad |
| project1.block.speed.detail | ~30% less QA & Accessibility review cycles | ~30% menos ciclos de revisión de QA y Accesibilidad |
| project1.block.components | +40 components | +40 componentes |
| project1.block.release | Treat the internal library as a product. By-weekly release, Semantic versioning | Tratar la librería interna como un producto. Releases quincenales, versionado semántico |
| project1.block.crossteam | Work closely on a cross-team effort | Trabajo cercano entre equipos |
| project2.block.ai.title | AI Assistance speed | Velocidad con asistencia de IA |
| project2.block.claude | Claude Code | Claude Code |
| project2.block.spec | Spec driven development | Desarrollo spec-driven |
| project2.block.fullstack | Fullstack workflow | Workflow fullstack |
| project3.block.award | Accenture Award Winner | Ganador de premio Accenture |

### Project detail pages (`/projects/[slug]`)

Slugs: `vision-design-system`, `turnisports`, `kimberly-clark`. Content adapted from the STAR story bank in `../career-ops/interview-prep/story-bank.md` (Vision → "Perceptyx Design System — 80%+ Adoption"; TurniSports → "Cursor + Claude Code in Daily Workflow"; Kimberly-Clark → "Accenture LATAM/US Bridge").

| Key | EN | ES |
|---|---|---|
| detail.back | Back to home | Volver al inicio |
| detail.situation | Situation | Situación |
| detail.task | Task | Tarea |
| detail.action | Action | Acción |
| detail.result | Result | Resultado |
| detail.reflection | Reflection | Reflexión |
| detail.github | View on GitHub | Ver en GitHub |
| project{1,2,3}.star.situation | STAR: situation paragraph… | ES translation… |
| project{1,2,3}.star.task | STAR: task paragraph… | ES translation… |
| project{1,2,3}.star.action | STAR: action paragraph… | ES translation… |
| project{1,2,3}.star.result | STAR: result paragraph… | ES translation… |
| project{1,2,3}.star.reflection | STAR: reflection paragraph… | ES translation… |

Full STAR copy lives in `src/i18n/ui.ts` (keys `project1.star.*`, `project2.star.*`, `project3.star.*`).

### Experience

Note: the Work section renders Selected Projects first, then Experience below it. Company, role, and period are not translated (kept identical in both languages). Only the summary is localized. `experience1`–`experience2` render as full two-line entries (role/company + summary paragraph); `experience3`–`experience7` render as condensed one-line entries (earlier/pre-Perceptyx jobs, from an older CV).

| Key | EN | ES |
|---|---|---|
| experience1.summary | Led the Design System to 80%+ adoption across product teams, drove WCAG accessibility initiatives that cut review cycles by 30%, and founded the cross-team Frontend Guild. | Lideré el Design System hasta el 80%+ de adopción entre equipos de producto, impulsé iniciativas de accesibilidad (WCAG) que redujeron los ciclos de revisión en un 30%, y fundé el Frontend Guild entre equipos. |
| experience2.summary | Built client-facing interfaces for Kimberly-Clark and Dyson on SharePoint, end-to-end from wireframes to production, in cross-functional US/Argentina teams. | Desarrollé interfaces client-facing para Kimberly-Clark y Dyson sobre SharePoint, end-to-end desde wireframes hasta producción, en equipos cross-funcionales US/Argentina. |
| experience3.summary (CrossMedia, 2014) | Responsive HTML builds for Virgin Mobile, Bimbo, and Banamex. | Maquetado HTML responsive para Virgin Mobile, Bimbo y Banamex. |
| experience4.summary (Estudio Himalaya, Freelance) | Independent frontend and WordPress projects. | Proyectos independientes de frontend y WordPress. |
| experience5.summary (Paginar.net, 2010–2013) | Drupal, Joomla, and WordPress sites for ICBC, SC Johnson, and Banghó. | Sitios en Drupal, Joomla y WordPress para ICBC, SC Johnson y Banghó. |
| experience6.summary (Insilence, 2009–2010) | Web security tooling and pentesting utilities. | Herramientas de seguridad web y utilidades de pentesting. |
| experience7.summary (Baires Group, 2008–2009) | Loyalty-program sites and newsletter/Flash design. | Sitios de programas de fidelización y diseño de newsletters/Flash. |

### Project 1 — Design System at Scale

| Key | EN | ES |
|---|---|---|
| project1.title | Design System at Scale | Design System a Escala |
| project1.description | Framework-agnostic, token-based design system built to be adopted — not just installed. | Sistema de diseño token-based y agnóstico al framework, construido para ser adoptado — no solo instalado. |
| project1.metric | 80%+ team adoption | 80%+ adopción del equipo |
| project1.summary | I built this with one constraint: it had to win on merit… | Lo construí con una restricción: tenía que ganar por mérito… |
| project1.details | Architecture was token-first… | La arquitectura fue token-first… |

### Project 2 — Accessibility as Architecture

| Key | EN | ES |
|---|---|---|
| project2.title | Accessibility as Architecture | Accesibilidad como Arquitectura |
| project2.description | Moved a11y from a QA checkbox to an architectural constraint. Cut review cycles by 30%. | Transformé la a11y de un checkbox de QA a una restricción arquitectural. Reduje los ciclos de revisión en un 30%. |
| project2.metric | −30% review cycles | −30% ciclos de revisión |
| project2.summary | The problem wasn't awareness… | El problema no era la conciencia… |
| project2.details | Accessible patterns went directly into the design system… | Los patrones accesibles fueron directamente al design system… |

### Project 3 — Frontend Guild

| Key | EN | ES |
|---|---|---|
| project3.title | Frontend Guild | Frontend Guild |
| project3.description | Built shared standards across 6 distributed teams — without org chart authority. | Construí estándares compartidos entre 6 equipos distribuidos — sin autoridad jerárquica. |
| project3.metric | 6 teams aligned | 6 equipos alineados |
| project3.summary | When you lead without formal authority… | Cuando liderás sin autoridad formal… |
| project3.details | The format was RFC-driven… | El formato era RFC-driven… |

---

## Contact section

| Key | EN | ES |
|---|---|---|
| contact.heading | Contact | Contacto |
| contact.intro | If you're building something where frontend architecture matters, I'd like to hear about it. | Si estás construyendo algo donde la arquitectura frontend importa, me gustaría escucharlo. |
| contact.title | Let's keep in touch. | Sigamos en contacto. |
| contact.now | Contact Now | Contactame |

---

## Footer

| Key | EN | ES |
|---|---|---|
| footer.tagline | Fullstack developer with a focus on experience and accessibility. | Desarrollador fullstack con foco en experiencia y accesibilidad. |
