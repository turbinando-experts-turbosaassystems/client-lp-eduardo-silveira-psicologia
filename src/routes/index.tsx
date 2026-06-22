import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
const CSS = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Nunito+Sans:wght@400;500;600;700&display=swap');

  :root{--bg:#f3f6f1;--bg2:#e8efe5;--ink:#27362f;--muted:#5e7268;--sage:#6f9c84;--sage2:#4f7a64;--terra:#c98a63;--line:#dde7da}
  *{box-sizing:border-box}html{scroll-behavior:smooth}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:"Nunito Sans",sans-serif;overflow-x:hidden}
  .serif{font-family:"Fraunces",serif}
  .display{font-family:"Fraunces",serif;font-weight:500;line-height:1.04;letter-spacing:-.01em}
  .container{max-width:1140px;margin:0 auto;padding-left:26px;padding-right:26px}
  .cine{position:fixed;inset:0;z-index:0;overflow:hidden;background:var(--bg);transform:translateZ(0)}
  .cine .l{position:absolute;inset:-25%;filter:blur(72px);opacity:.5;will-change:transform}
  .l1{background:radial-gradient(38% 38% at 22% 20%,rgba(111,156,132,.22),transparent 70%);animation:d1 28s ease-in-out infinite}
  .l2{background:radial-gradient(42% 42% at 80% 30%,rgba(201,138,99,.16),transparent 70%);animation:d2 32s ease-in-out infinite}
  @keyframes d1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(5%,4%) scale(1.1)}}
  @keyframes d2{0%,100%{transform:translate(0,0) scale(1.08)}50%{transform:translate(-6%,3%) scale(1)}}
  .wrap{position:relative;z-index:2}
  .sagetext{color:var(--sage2)}
  .kicker{display:inline-flex;align-items:center;gap:9px;font-size:12px;letter-spacing:.06em;color:var(--sage2);border:1px solid rgba(111,156,132,.35);background:rgba(111,156,132,.08);padding:8px 15px;border-radius:999px}
  .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:700;border-radius:14px;padding:16px 28px;text-decoration:none;transition:transform .25s,box-shadow .25s;font-size:15px}
  .btn-wa{background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;box-shadow:0 16px 40px rgba(37,211,102,.28)}
  .btn-wa:hover{transform:translateY(-2px)}
  .btn-sage{background:linear-gradient(180deg,var(--sage),var(--sage2));color:#fff;box-shadow:0 16px 40px rgba(79,122,100,.28)}
  .btn-sage:hover{transform:translateY(-2px)}
  .btn-ghost{border:1px solid rgba(39,54,47,.18);color:var(--ink)}.btn-ghost:hover{background:rgba(39,54,47,.04)}
  .reveal{opacity:1}.reveal.in{animation:rin .8s cubic-bezier(.16,1,.3,1) both}@keyframes rin{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
  .card{background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 10px 34px rgba(39,54,47,.04)}
  .hair{height:1px;background:linear-gradient(90deg,transparent,rgba(111,156,132,.4),transparent)}
  .frame{border-radius:24px;overflow:hidden;position:relative;box-shadow:0 40px 90px rgba(50,80,65,.16)}
  .navwrap{position:fixed;top:14px;left:0;right:0;z-index:40;transition:.3s}
  .navwrap.s{top:9px}
  .navwrap>div{background:color-mix(in srgb,var(--bg) 62%,transparent);-webkit-backdrop-filter:saturate(1.5) blur(18px);backdrop-filter:saturate(1.5) blur(18px);border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);border-radius:20px;box-shadow:0 10px 30px rgba(50,80,65,.08),inset 0 1px 0 rgba(255,255,255,.6);transition:.3s}
  .navwrap.s>div{background:color-mix(in srgb,var(--bg) 84%,transparent)}
  .mark{width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,var(--sage),var(--sage2));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-family:"Fraunces",serif}
  details.faq{border-bottom:1px solid var(--line)}
  details.faq summary{list-style:none;cursor:pointer;padding:20px 4px;display:flex;justify-content:space-between;gap:16px;align-items:center;font-weight:700;font-size:17px}
  details.faq summary::-webkit-details-marker{display:none}
  details.faq[open] .pl{transform:rotate(45deg)} .pl{transition:.3s;color:var(--sage);font-size:24px;font-family:"Fraunces",serif}
  .field{width:100%;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px;color:var(--ink);outline:none;font-size:15px}.field:focus{border-color:var(--sage)}
  .wa{position:fixed;right:20px;bottom:20px;z-index:45;display:flex;align-items:center;gap:10px;padding:13px 18px 13px 14px;border-radius:999px;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;font-weight:700;font-size:14px;text-decoration:none;box-shadow:0 16px 40px rgba(37,211,102,.45)}
  .wa .ic{width:24px;height:24px;display:flex;align-items:center;justify-content:center}
  .wa::before{content:"";position:absolute;left:14px;top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.5);animation:pr 2s infinite}
  @keyframes pr{0%{transform:translateY(-50%) scale(.6);opacity:.7}70%,100%{transform:translateY(-50%) scale(1.8);opacity:0}}
  @media (prefers-reduced-motion:reduce){.l1,.l2,.wa::before{animation:none}.reveal.in{animation:none}}
`;
const BODY = `
<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  CONFIG — EDITE AQUI. [colchetes], fotos, WhatsApp, cores      ║
  ║  no :root (--sage, --bg). Nicho: PSICÓLOGO / TERAPIA.        ║
  ║  CRP obrigatório no rodapé; evite promessas de "cura".       ║
  ╚══════════════════════════════════════════════════════════════╝
-->
<div class="cine"><div class="l l1"></div><div class="l l2"></div></div>

<div class="wrap">
  <nav class="navwrap" id="nav"><div class="container flex items-center justify-between h-[64px] px-5">
    <a href="#topo" class="flex items-center gap-3"><span class="mark">P</span><span class="serif text-xl">[Seu Nome]</span></a>
    <div class="hidden md:flex items-center gap-7 text-sm text-[color:var(--muted)]">
      <a href="#ajudo" class="hover:text-[color:var(--ink)] transition">Como ajudo</a>
      <a href="#sobre" class="hover:text-[color:var(--ink)] transition">Sobre mim</a>
      <a href="#como" class="hover:text-[color:var(--ink)] transition">Como funciona</a>
      <a href="#depoimentos" class="hover:text-[color:var(--ink)] transition">Depoimentos</a>
      <a href="#faq" class="hover:text-[color:var(--ink)] transition">FAQ</a>
    </div>
    <a href="https://wa.me/5511900000000" class="btn btn-wa !py-2.5 !px-5 !text-sm">Agendar sessão</a>
  </div></nav>

  <header id="topo" class="container pt-36 pb-20 md:pt-44 md:pb-28 grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
    <div>
      <div class="reveal kicker">🌿 Atendimento online e presencial · sigilo total</div>
      <h1 class="reveal display text-6xl md:text-7xl mt-7">Um espaço seu,<br>pra <span class="sagetext italic">respirar</span>.</h1>
      <p class="reveal text-lg md:text-xl text-[color:var(--muted)] max-w-xl mt-7 leading-relaxed">[Diga pra quem você atende e sua abordagem.] Terapia com escuta acolhedora e sem julgamentos, pra você se entender melhor, lidar com o que pesa e viver com mais leveza — no seu tempo.</p>
      <div class="reveal flex flex-col sm:flex-row gap-4 mt-10"><a href="https://wa.me/5511900000000" class="btn btn-wa">Agendar uma conversa →</a><a href="#ajudo" class="btn btn-ghost">Como posso ajudar</a></div>
      <div class="reveal flex items-center gap-4 mt-10 text-sm">
        <div class="flex items-center gap-2"><span class="sagetext text-lg">🔒</span> Sigilo profissional garantido</div>
        <div class="flex items-center gap-2"><span class="sagetext text-lg">💻</span> Online ou presencial</div>
      </div>
    </div>
    <div class="reveal frame"><img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80" alt="" class="w-full h-[540px] object-cover"></div>
  </header>

  <section class="container py-24">
    <div class="reveal max-w-2xl"><div class="kicker mb-6">Você se identifica?</div><h2 class="display text-5xl md:text-6xl">Tá tudo bem não estar bem.</h2></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-8"><div class="text-3xl mb-3">🌀</div><h3 class="text-xl font-bold serif">Ansiedade constante</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">A mente não desliga, o peito aperta. A terapia ajuda a entender e acalmar isso.</p></div>
      <div class="reveal card p-8"><div class="text-3xl mb-3">🌧️</div><h3 class="text-xl font-bold serif">Tristeza que não passa</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Desânimo, cansaço, vazio. Você não precisa carregar isso sozinho(a).</p></div>
      <div class="reveal card p-8"><div class="text-3xl mb-3">🔁</div><h3 class="text-xl font-bold serif">Repetindo padrões</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Relações, escolhas, autocrítica. Juntos a gente entende e transforma isso.</p></div>
    </div>
  </section>

  <section id="ajudo" class="container py-24">
    <div class="reveal max-w-2xl"><div class="kicker mb-6">Como posso ajudar</div><h2 class="display text-5xl md:text-6xl">Temas que acompanho.</h2></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-8"><h3 class="serif text-2xl">Ansiedade & estresse</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Ferramentas pra lidar com a ansiedade e recuperar o equilíbrio no dia a dia.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Autoconhecimento</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Entenda seus padrões, emoções e escolhas pra viver com mais clareza.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Relacionamentos</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Vínculos, limites e comunicação — com você mesmo(a) e com os outros.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Autoestima</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Trabalhe a relação com você, a autocrítica e o seu valor.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Luto & transições</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Apoio pra atravessar perdas e momentos de mudança com acolhimento.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Vida & carreira</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Decisões, propósito e equilíbrio entre o que você quer e o que vive.</p></div>
    </div>
  </section>

  <section id="sobre" class="container py-24 grid lg:grid-cols-2 gap-16 items-center">
    <div class="reveal frame"><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="" class="w-full h-[520px] object-cover"></div>
    <div class="reveal">
      <div class="kicker mb-6">Sobre mim</div>
      <h2 class="display text-5xl md:text-6xl">Uma escuta sem<br>julgamentos.</h2>
      <p class="text-[color:var(--muted)] text-lg mt-6 leading-relaxed">[Apresente-se: formação, CRP, abordagem (TCC, psicanálise, etc.) e o que te move como profissional.] Acredito numa terapia próxima e respeitosa, no seu ritmo. Aqui é um espaço seguro pra você ser quem é.</p>
      <div class="hair my-8"></div>
      <div class="grid grid-cols-3 gap-6">
        <div><div class="display sagetext text-4xl">CRP</div><div class="text-xs text-[color:var(--muted)] mt-1">[nº/região]</div></div>
        <div><div class="display sagetext text-4xl">[X]</div><div class="text-xs text-[color:var(--muted)] mt-1">anos de prática</div></div>
        <div><div class="display sagetext text-4xl">100%</div><div class="text-xs text-[color:var(--muted)] mt-1">sigiloso</div></div>
      </div>
    </div>
  </section>

  <section id="como" class="container py-24">
    <div class="reveal max-w-2xl mx-auto text-center"><div class="kicker mb-6">Simples e acolhedor</div><h2 class="display text-5xl md:text-6xl">Como começamos.</h2></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-8"><div class="serif sagetext text-5xl">01</div><h3 class="serif text-2xl mt-3">Primeiro contato</h3><p class="text-[color:var(--muted)] mt-2 leading-relaxed">Você me chama no WhatsApp e a gente combina o melhor horário, online ou presencial.</p></div>
      <div class="reveal card p-8"><div class="serif sagetext text-5xl">02</div><h3 class="serif text-2xl mt-3">Primeira sessão</h3><p class="text-[color:var(--muted)] mt-2 leading-relaxed">Um encontro pra você falar, eu te conhecer e juntos entendermos o caminho.</p></div>
      <div class="reveal card p-8"><div class="serif sagetext text-5xl">03</div><h3 class="serif text-2xl mt-3">Seu processo</h3><p class="text-[color:var(--muted)] mt-2 leading-relaxed">Encontros regulares, no seu ritmo, com acolhimento e ferramentas pra evoluir.</p></div>
    </div>
  </section>

  <section id="depoimentos" class="container py-24">
    <div class="reveal max-w-2xl"><div class="kicker mb-6">Quem fez terapia comigo</div><h2 class="display text-5xl md:text-6xl">Relatos (com autorização).</h2></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-7"><div class="sagetext text-sm mb-3">★★★★★</div><p class="leading-relaxed">"Encontrei um espaço pra falar sem medo de julgamento. Hoje lido muito melhor com a minha ansiedade."</p><div class="flex items-center gap-3 mt-6"><div class="w-11 h-11 rounded-full flex items-center justify-center font-bold" style="background:rgba(111,156,132,.15);color:var(--sage2)">M.</div><div><div class="font-semibold">M. · 32 anos</div><div class="text-xs text-[color:var(--muted)]">em terapia</div></div></div></div>
      <div class="reveal card p-7"><div class="sagetext text-sm mb-3">★★★★★</div><p class="leading-relaxed">"O acolhimento desde a primeira sessão me deixou à vontade. Me sinto mais leve e mais eu mesmo."</p><div class="flex items-center gap-3 mt-6"><div class="w-11 h-11 rounded-full flex items-center justify-center font-bold" style="background:rgba(111,156,132,.15);color:var(--sage2)">R.</div><div><div class="font-semibold">R. · 28 anos</div><div class="text-xs text-[color:var(--muted)]">em terapia</div></div></div></div>
      <div class="reveal card p-7"><div class="sagetext text-sm mb-3">★★★★★</div><p class="leading-relaxed">"Online funcionou super bem pra mim. Profissional atenciosa e respeitosa com o meu tempo."</p><div class="flex items-center gap-3 mt-6"><div class="w-11 h-11 rounded-full flex items-center justify-center font-bold" style="background:rgba(111,156,132,.15);color:var(--sage2)">A.</div><div><div class="font-semibold">A. · 41 anos</div><div class="text-xs text-[color:var(--muted)]">em terapia</div></div></div></div>
    </div>
  </section>

  <section class="container py-24">
    <div class="reveal card p-10 md:p-16 max-w-3xl mx-auto text-center relative overflow-hidden">
      <div class="kicker mb-6 mx-auto">Dê o primeiro passo</div>
      <h2 class="display text-4xl md:text-5xl">Pedir ajuda é<br>um ato de coragem.</h2>
      <p class="text-[color:var(--muted)] mt-5 max-w-md mx-auto">Você não precisa estar em crise pra fazer terapia. Agende uma conversa e veja se faz sentido pra você, sem compromisso.</p>
      <a href="https://wa.me/5511900000000" class="btn btn-wa mt-8 text-lg">Agendar uma conversa →</a>
    </div>
  </section>

  <section class="container py-12"><div class="reveal card p-8 flex flex-col sm:flex-row items-center gap-6 max-w-3xl mx-auto" style="border:1px dashed var(--sage)">
    <div class="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-3xl" style="background:rgba(111,156,132,.12)">🤝</div>
    <div><h3 class="serif text-2xl">Sigilo e respeito sempre</h3><p class="text-[color:var(--muted)] mt-1 leading-relaxed">Tudo o que você compartilha é protegido pelo sigilo profissional. Aqui é um espaço seguro, sem pressa e sem julgamentos — no seu ritmo.</p></div>
  </div></section>

  <section id="faq" class="container py-24 max-w-3xl">
    <h2 class="reveal display text-5xl md:text-6xl mb-10 text-center">Perguntas frequentes</h2>
    <div class="reveal">
      <details class="faq"><summary>Atende online ou presencial? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Os dois. Você escolhe o que for mais confortável — sessões por vídeo ou presenciais em [cidade].</p></details>
      <details class="faq"><summary>Quanto custa a sessão? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">[Informe o valor ou diga que é apresentado no contato.] Também converso sobre frequência e formato no primeiro contato.</p></details>
      <details class="faq"><summary>Preciso estar em crise pra fazer terapia? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Não. A terapia ajuda no autoconhecimento e na qualidade de vida, mesmo sem uma crise. É cuidado, não só remédio.</p></details>
      <details class="faq"><summary>É tudo confidencial? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Sim. O sigilo é um princípio ético da profissão — o que é dito na sessão fica entre nós.</p></details>
      <details class="faq"><summary>Quanto tempo dura o tratamento? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Cada pessoa tem seu tempo. Não há fórmula — respeitamos o seu processo e seus objetivos.</p></details>
      <details class="faq"><summary>Como agendo? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">É só me chamar no WhatsApp. A gente conversa e combina o primeiro encontro.</p></details>
    </div>
  </section>

  <section class="container py-20">
    <div class="reveal max-w-xl mx-auto text-center"><div class="kicker mb-6 mx-auto">Fale comigo</div><h2 class="display text-5xl md:text-6xl">Quando quiser, estou aqui.</h2><p class="text-[color:var(--muted)] mt-5">Deixe seus dados ou me chame no WhatsApp. Respondo com cuidado pra combinarmos uma conversa.</p></div>
    <form class="reveal card p-7 md:p-9 max-w-xl mx-auto mt-10 space-y-4" onsubmit="return false">
      <input class="field" placeholder="Seu nome">
      <input class="field" placeholder="WhatsApp (com DDD)">
      <textarea class="field" rows="3" placeholder="O que te traz aqui? (à vontade pra escrever pouco)"></textarea>
      <a href="https://wa.me/5511900000000" class="btn btn-wa w-full text-lg">Agendar pelo WhatsApp →</a>
      <p class="text-xs text-center text-[color:var(--muted)]">🔒 Suas informações são tratadas com sigilo.</p>
    </form>
  </section>

  <footer class="border-t border-[color:var(--line)]" style="background:#fff">
    <div class="container py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3"><span class="mark">P</span><span class="serif text-xl">[Seu Nome]</span></div>
        <p class="text-sm text-[color:var(--muted)] mt-4 max-w-sm leading-relaxed">Psicologia e terapia com acolhimento, online e presencial em [sua cidade]. Um espaço seguro pra cuidar de você.</p>
        <p class="text-xs text-[color:var(--muted)] mt-4">[Nome] — Psicólogo(a) · CRP [nº/região]</p>
      </div>
      <div>
        <p class="text-xs font-bold uppercase tracking-wider mb-4">Navegação</p>
        <ul class="space-y-2 text-sm text-[color:var(--muted)]">
          <li><a href="#ajudo" class="hover:text-[color:var(--ink)]">Como ajudo</a></li>
          <li><a href="#sobre" class="hover:text-[color:var(--ink)]">Sobre mim</a></li>
          <li><a href="#depoimentos" class="hover:text-[color:var(--ink)]">Depoimentos</a></li>
          <li><a href="#faq" class="hover:text-[color:var(--ink)]">FAQ</a></li>
        </ul>
      </div>
      <div>
        <p class="text-xs font-bold uppercase tracking-wider mb-4">Contato</p>
        <ul class="space-y-2 text-sm text-[color:var(--muted)]">
          <li>📱 (11) 90000-0000</li>
          <li>📧 contato@seudominio.com</li>
          <li>📍 Atendimento online e em [cidade]</li>
        </ul>
      </div>
    </div>
    <div class="container pb-8"><div class="hair mb-6"></div><div class="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[color:var(--muted)]"><span>© 2026 [Seu Nome]. CRP [nº].</span><span>Política de Privacidade · Termos</span></div></div>
  </footer>
</div>

<a href="https://wa.me/5511900000000" class="wa" target="_blank" rel="noreferrer"><span class="ic">●</span><span>Falar no WhatsApp</span></a>


`;
export const Route = createFileRoute("/")({ head: () => ({ meta: [ { title: "[Seu Nome] — Psicologia & Terapia com acolhimento" } ] }), component: Index });
function Index(){
  useEffect(() => {
    const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:0.12});
    document.querySelectorAll(".reveal").forEach((el)=>io.observe(el));
    const onScroll=()=>{const n=document.getElementById("nav"); if(n) n.classList.toggle("s", window.scrollY>20);};
    addEventListener("scroll", onScroll, {passive:true});
    return () => { io.disconnect(); removeEventListener("scroll", onScroll); };
  }, []);
  return (<><style dangerouslySetInnerHTML={{ __html: CSS }} /><div dangerouslySetInnerHTML={{ __html: BODY }} /></>);
}
