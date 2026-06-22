import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import eduardoPerfil from "@/assets/eduardo-perfil.jpg.asset.json";

const PHOTO = eduardoPerfil.url;
const WA = "https://wa.me/5551984485585?text=Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa.";
const DOCTORALIA = "https://www.doctoralia.com.br/eduardo-silveira-dos-santos/psicologo/porto-alegre";
const INSTAGRAM = "https://instagram.com/eduardooliveirasilveirapsi";
// PENDENTE: número de CRP completo (ex.: CRP 07/00000)
const CRP = "CRP 07/00000";

const CSS = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Nunito+Sans:wght@400;500;600;700&display=swap');

  :root{--bg:#F7F5F0;--bg2:#EDEAE3;--ink:#1A1A2E;--muted:#5A6B7A;--sage:#6F907E;--sage2:#4A6B5D;--petrol:#2C4A5E;--terra:#c98a63;--line:#E3DED3}
  *{box-sizing:border-box}html{scroll-behavior:smooth}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:"Nunito Sans",sans-serif;overflow-x:hidden}
  .serif{font-family:"Fraunces",serif}
  .display{font-family:"Fraunces",serif;font-weight:500;line-height:1.04;letter-spacing:-.01em}
  .container{max-width:1140px;margin:0 auto;padding-left:26px;padding-right:26px}
  .cine{position:fixed;inset:0;z-index:0;overflow:hidden;background:var(--bg);transform:translateZ(0)}
  .cine .l{position:absolute;inset:-25%;filter:blur(72px);opacity:.55;will-change:transform}
  .l1{background:radial-gradient(38% 38% at 22% 20%,rgba(74,107,93,.22),transparent 70%);animation:d1 28s ease-in-out infinite}
  .l2{background:radial-gradient(42% 42% at 80% 30%,rgba(44,74,94,.18),transparent 70%);animation:d2 32s ease-in-out infinite}
  @keyframes d1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(5%,4%) scale(1.1)}}
  @keyframes d2{0%,100%{transform:translate(0,0) scale(1.08)}50%{transform:translate(-6%,3%) scale(1)}}
  .wrap{position:relative;z-index:2}
  .sagetext{color:var(--sage2)}
  .petroltext{color:var(--petrol)}
  .kicker{display:inline-flex;align-items:center;gap:9px;font-size:12px;letter-spacing:.06em;color:var(--petrol);border:1px solid rgba(44,74,94,.28);background:rgba(44,74,94,.06);padding:8px 15px;border-radius:999px}
  .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:700;border-radius:14px;padding:16px 28px;text-decoration:none;transition:transform .25s,box-shadow .25s;font-size:15px}
  .btn-wa{background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;box-shadow:0 16px 40px rgba(37,211,102,.28)}
  .btn-wa:hover{transform:translateY(-2px)}
  .btn-sage{background:linear-gradient(180deg,var(--sage),var(--sage2));color:#fff;box-shadow:0 16px 40px rgba(74,107,93,.32)}
  .btn-sage:hover{transform:translateY(-2px)}
  .btn-petrol{background:linear-gradient(180deg,#3A607A,var(--petrol));color:#fff;box-shadow:0 16px 40px rgba(44,74,94,.28)}
  .btn-petrol:hover{transform:translateY(-2px)}
  .btn-ghost{border:1px solid rgba(26,26,46,.18);color:var(--ink)}.btn-ghost:hover{background:rgba(26,26,46,.04)}
  .reveal{opacity:1}.reveal.in{animation:rin .8s cubic-bezier(.16,1,.3,1) both}@keyframes rin{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
  .card{background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 10px 34px rgba(26,26,46,.04)}
  .hair{height:1px;background:linear-gradient(90deg,transparent,rgba(44,74,94,.35),transparent)}
  .frame{border-radius:24px;overflow:hidden;position:relative;box-shadow:0 40px 90px rgba(44,74,94,.18)}
  .navwrap{position:fixed;top:14px;left:0;right:0;z-index:40;transition:.3s}
  .navwrap.s{top:9px}
  .navwrap>div{background:color-mix(in srgb,var(--bg) 62%,transparent);-webkit-backdrop-filter:saturate(1.5) blur(18px);backdrop-filter:saturate(1.5) blur(18px);border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);border-radius:20px;box-shadow:0 10px 30px rgba(44,74,94,.08),inset 0 1px 0 rgba(255,255,255,.6);transition:.3s}
  .navwrap.s>div{background:color-mix(in srgb,var(--bg) 84%,transparent)}
  .mark{width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,var(--petrol),#1B3245);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-family:"Fraunces",serif}
  details.faq{border-bottom:1px solid var(--line)}
  details.faq summary{list-style:none;cursor:pointer;padding:20px 4px;display:flex;justify-content:space-between;gap:16px;align-items:center;font-weight:700;font-size:17px}
  details.faq summary::-webkit-details-marker{display:none}
  details.faq[open] .pl{transform:rotate(45deg)} .pl{transition:.3s;color:var(--sage2);font-size:24px;font-family:"Fraunces",serif}
  .field{width:100%;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px;color:var(--ink);outline:none;font-size:15px}.field:focus{border-color:var(--sage2)}
  .wa{position:fixed;right:20px;bottom:20px;z-index:45;display:flex;align-items:center;gap:10px;padding:13px 18px 13px 14px;border-radius:999px;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;font-weight:700;font-size:14px;text-decoration:none;box-shadow:0 16px 40px rgba(37,211,102,.45)}
  .wa .ic{width:24px;height:24px;display:flex;align-items:center;justify-content:center}
  .wa::before{content:"";position:absolute;left:14px;top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.5);animation:pr 2s infinite}
  @keyframes pr{0%{transform:translateY(-50%) scale(.6);opacity:.7}70%,100%{transform:translateY(-50%) scale(1.8);opacity:0}}
  .badge{display:inline-flex;align-items:center;gap:8px;background:var(--bg2);border:1px solid var(--line);padding:8px 14px;border-radius:999px;font-size:13px;color:var(--petrol);font-weight:600}
  @media (prefers-reduced-motion:reduce){.l1,.l2,.wa::before{animation:none}.reveal.in{animation:none}}
`;

const BODY = `
<div class="cine"><div class="l l1"></div><div class="l l2"></div></div>

<div class="wrap">
  <nav class="navwrap" id="nav"><div class="container flex items-center justify-between h-[64px] px-5">
    <a href="#topo" class="flex items-center gap-3"><span class="mark">E</span><span class="serif text-xl">Eduardo Silveira</span></a>
    <div class="hidden md:flex items-center gap-7 text-sm text-[color:var(--muted)]">
      <a href="#ajudo" class="hover:text-[color:var(--ink)] transition">Como ajudo</a>
      <a href="#sobre" class="hover:text-[color:var(--ink)] transition">Sobre mim</a>
      <a href="#como" class="hover:text-[color:var(--ink)] transition">Como funciona</a>
      <a href="#casos" class="hover:text-[color:var(--ink)] transition">Casos</a>
      <a href="#faq" class="hover:text-[color:var(--ink)] transition">FAQ</a>
    </div>
    <a href="${WA}" target="_blank" rel="noreferrer" class="btn btn-wa !py-2.5 !px-5 !text-sm">Agendar no WhatsApp</a>
  </div></nav>

  <header id="topo" class="container pt-36 pb-20 md:pt-44 md:pb-28 grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
    <div>
      <div class="reveal kicker">🌿 Psicoterapia Junguiana · Online e presencial em Porto Alegre</div>
      <h1 class="reveal display text-6xl md:text-7xl mt-7">Um espaço pra escutar <span class="petroltext italic">quem você realmente é</span>.</h1>
      <p class="reveal text-lg md:text-xl text-[color:var(--muted)] max-w-xl mt-7 leading-relaxed">Psicoterapia clínica de orientação Junguiana para jovens, adultos e idosos. Uma escuta profunda e sem julgamentos pra você atravessar o estresse, a ansiedade e as cobranças do mundo — e se aproximar, no seu tempo, da sua verdadeira essência.</p>
      <div class="reveal flex flex-col sm:flex-row gap-4 mt-10">
        <a href="${WA}" target="_blank" rel="noreferrer" class="btn btn-wa">Agendar pelo WhatsApp →</a>
        <a href="${DOCTORALIA}" target="_blank" rel="noreferrer" class="btn btn-petrol" data-pending="doctoralia-url">Agendar na Doctoralia</a>
      </div>
      <div class="reveal flex flex-wrap items-center gap-3 mt-8 text-sm">
        <span class="badge">🪪 ${CRP}</span>
        <span class="badge">🔒 Sigilo profissional</span>
        <span class="badge">💻 Online ou presencial</span>
      </div>
    </div>
    <div class="reveal frame"><img src="${PHOTO}" alt="Eduardo Silveira dos Santos, psicólogo clínico junguiano em Porto Alegre" class="w-full h-[540px] object-cover object-top"></div>
  </header>

  <section class="container py-24">
    <div class="reveal max-w-2xl"><div class="kicker mb-6">Talvez você reconheça isso</div><h2 class="display text-5xl md:text-6xl">Cumprindo papéis, longe de si.</h2></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-8"><div class="text-3xl mb-3">🌀</div><h3 class="text-xl font-bold serif">Ansiedade que não desliga</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">A rotina aperta, o trabalho cobra, o corpo avisa. Aqui a gente investiga o que esse sintoma quer dizer — não só como silenciá-lo.</p></div>
      <div class="reveal card p-8"><div class="text-3xl mb-3">🎭</div><h3 class="text-xl font-bold serif">Vivendo pra agradar</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Expectativas da família, do trabalho, do que "deveria" ser. Quando o papel imposto sufoca, a terapia abre espaço pra você se diferenciar.</p></div>
      <div class="reveal card p-8"><div class="text-3xl mb-3">🌌</div><h3 class="text-xl font-bold serif">Sensação de estar perdido</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Você se vê bem por fora e oco por dentro. A escuta junguiana ajuda a decifrar esse vazio e encontrar um caminho que faça sentido pra você.</p></div>
    </div>
  </section>

  <section id="ajudo" class="container py-24">
    <div class="reveal max-w-2xl"><div class="kicker mb-6">Como posso ajudar</div><h2 class="display text-5xl md:text-6xl">O que eu acompanho.</h2></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-8"><h3 class="serif text-2xl">Ansiedade & estresse do trabalho</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Pra quem chega em casa exausto, dorme mal e acorda já tenso. Olhamos a raiz do esgotamento, não só o sintoma.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Individuação & autoconhecimento</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">O processo central da abordagem junguiana: se diferenciar do que esperam de você e se aproximar de quem você é.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Cobranças familiares</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Pai, mãe, parceiro(a), filhos. Quando o papel familiar pesa mais do que cabe, criamos espaço pra você ouvir o seu próprio desejo.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Crises de sentido & transições</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Luto, mudanças de fase, decisões de vida. Atravessar com presença, sem atalhos.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Expressão criativa</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Música, desenho, escrita. Quando a palavra não dá conta, uso recursos expressivos pra dar voz ao que dói.</p></div>
      <div class="reveal card p-8"><h3 class="serif text-2xl">Sonhos & símbolos</h3><p class="text-[color:var(--muted)] mt-3 leading-relaxed">Material valioso do inconsciente. Trabalhamos o que aparece em sonhos, imagens e repetições.</p></div>
    </div>
  </section>

  <section id="sobre" class="container py-24 grid lg:grid-cols-2 gap-16 items-center">
    <div class="reveal frame"><img src="${PHOTO}" alt="Eduardo Silveira dos Santos — psicólogo clínico junguiano" class="w-full h-[520px] object-cover object-top"></div>
    <div class="reveal">
      <div class="kicker mb-6">Sobre mim</div>
      <h2 class="display text-5xl md:text-6xl">Uma escuta sem<br>roteiros prontos.</h2>
      <p class="text-[color:var(--muted)] text-lg mt-6 leading-relaxed">Sou Eduardo Silveira dos Santos, psicólogo clínico (${CRP}) com prática fundamentada na Psicologia Analítica de Jung. Atendo na minha clínica em Porto Alegre (rua Cesar Lombroso) e online — mantendo o mesmo cuidado e profundidade nos dois formatos.</p>
      <p class="text-[color:var(--muted)] text-lg mt-4 leading-relaxed">Trago também a bagagem de oficinas de criatividade e residenciais terapêuticos com música e artes. Isso me dá uma sensibilidade pra ajudar você a dar forma ao que, muitas vezes, é difícil traduzir em palavras.</p>
      <div class="hair my-8"></div>
      <div class="grid grid-cols-3 gap-6">
        <div><div class="display petroltext text-3xl">Jung</div><div class="text-xs text-[color:var(--muted)] mt-1">Psicologia Analítica</div></div>
        <div><div class="display petroltext text-3xl">POA</div><div class="text-xs text-[color:var(--muted)] mt-1">Presencial + online</div></div>
        <div><div class="display petroltext text-3xl">100%</div><div class="text-xs text-[color:var(--muted)] mt-1">Sigiloso</div></div>
      </div>
    </div>
  </section>

  <section id="como" class="container py-24">
    <div class="reveal max-w-2xl mx-auto text-center"><div class="kicker mb-6">Simples e acolhedor</div><h2 class="display text-5xl md:text-6xl">Como começamos.</h2></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-8"><div class="serif sagetext text-5xl">01</div><h3 class="serif text-2xl mt-3">Primeiro contato</h3><p class="text-[color:var(--muted)] mt-2 leading-relaxed">Você me chama no WhatsApp ou agenda direto pela Doctoralia. Combinamos horário, modalidade (online ou presencial) e tiramos suas dúvidas.</p></div>
      <div class="reveal card p-8"><div class="serif sagetext text-5xl">02</div><h3 class="serif text-2xl mt-3">Primeira escuta</h3><p class="text-[color:var(--muted)] mt-2 leading-relaxed">Um encontro sem roteiro: você conta o que te trouxe aqui, no seu ritmo. Eu escuto, devolvo e juntos vemos se faz sentido seguir.</p></div>
      <div class="reveal card p-8"><div class="serif sagetext text-5xl">03</div><h3 class="serif text-2xl mt-3">Seu processo</h3><p class="text-[color:var(--muted)] mt-2 leading-relaxed">Encontros regulares pra ir fundo no que aparece — sintomas, sonhos, escolhas — sempre respeitando o seu tempo de elaboração.</p></div>
    </div>
  </section>

  <section id="casos" class="container py-24">
    <div class="reveal max-w-2xl"><div class="kicker mb-6">Histórias da clínica</div><h2 class="display text-5xl md:text-6xl">Transformações reais.</h2><p class="text-[color:var(--muted)] mt-5 leading-relaxed">Casos clínicos compartilhados com autorização e com identidades preservadas. Não são depoimentos com nome e rosto — é um retrato honesto do que a escuta junguiana pode mover.</p></div>
    <div class="grid md:grid-cols-3 gap-5 mt-14">
      <div class="reveal card p-7">
        <div class="petroltext text-xs font-bold tracking-wider mb-3">CASO 01 · INDIVIDUAÇÃO</div>
        <h3 class="serif text-2xl">O resgate da autonomia familiar</h3>
        <p class="leading-relaxed mt-3 text-[color:var(--muted)]">Paciente adulta vivia sob forte subordinação à família do cônjuge, anulando vontades próprias. No processo, compreendeu sua identidade, ganhou segurança pra se separar e passou a traçar o próprio caminho.</p>
      </div>
      <div class="reveal card p-7">
        <div class="petroltext text-xs font-bold tracking-wider mb-3">CASO 02 · EXPRESSÃO</div>
        <h3 class="serif text-2xl">A angústia que virou música</h3>
        <p class="leading-relaxed mt-3 text-[color:var(--muted)]">Adolescente rotulada como "agressiva" pela família e escola. Num espaço sem julgamentos, desenhou suas dores e reconheceu que a agressividade era pedido de socorro. Canalizou o potencial pra música e hoje se dedica ao violino.</p>
      </div>
      <div class="reveal card p-7" style="background:var(--bg2)">
        <div class="petroltext text-xs font-bold tracking-wider mb-3">PRESENÇA VALIDADA</div>
        <h3 class="serif text-2xl">Também na Doctoralia</h3>
        <p class="leading-relaxed mt-3 text-[color:var(--muted)]">Perfil ativo na Doctoralia com agendamento aberto — a plataforma valida a atuação profissional do Psicólogo Eduardo Silveira dos Santos em Porto Alegre.</p>
        <a href="${DOCTORALIA}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 mt-5 font-bold petroltext" data-pending="doctoralia-url">Ver perfil →</a>
      </div>
    </div>
  </section>

  <section class="container py-24">
    <div class="reveal card p-10 md:p-16 max-w-3xl mx-auto text-center relative overflow-hidden">
      <div class="kicker mb-6 mx-auto">Dê o primeiro passo</div>
      <h2 class="display text-4xl md:text-5xl">Pedir ajuda é<br>um ato de coragem.</h2>
      <p class="text-[color:var(--muted)] mt-5 max-w-md mx-auto">Você não precisa estar em crise pra começar. Marque uma primeira conversa — sem compromisso de seguir — e veja se essa escuta faz sentido pra você.</p>
      <a href="${WA}" target="_blank" rel="noreferrer" class="btn btn-wa mt-8 text-lg">Agendar uma conversa →</a>
    </div>
  </section>

  <section class="container py-12"><div class="reveal card p-8 flex flex-col sm:flex-row items-center gap-6 max-w-3xl mx-auto" style="border:1px dashed var(--sage2)">
    <div class="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-3xl" style="background:rgba(74,107,93,.12)">🤝</div>
    <div><h3 class="serif text-2xl">Sigilo, ética e respeito ao seu tempo</h3><p class="text-[color:var(--muted)] mt-1 leading-relaxed">Tudo o que você compartilha é protegido pelo sigilo profissional, conforme o Código de Ética do Psicólogo. Aqui não tem fórmula pronta nem julgamento — só escuta atenta e o seu ritmo.</p></div>
  </div></section>

  <section id="faq" class="container py-24 max-w-3xl">
    <h2 class="reveal display text-5xl md:text-6xl mb-10 text-center">Perguntas frequentes</h2>
    <div class="reveal">
      <details class="faq"><summary>Vou ser julgado pelo que sinto ou faço? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Não. O consultório é justamente um espaço onde você pode narrar o que vive sem receita pronta sobre o que é "certo" ou "errado". A escuta é livre de julgamento — esse é o ponto de partida.</p></details>
      <details class="faq"><summary>Meu problema tem solução, ou vou ficar preso a isso? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Transformações reais acontecem. A escuta profunda dos sintomas abre portas pra novas possibilidades de vida — inclusive em quadros de esgotamento crônico que pareciam ser "o seu normal".</p></details>
      <details class="faq"><summary>E se eu não souber o que falar nas sessões? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Você não precisa chegar com um discurso pronto. A gente trabalha com o que aparece no momento — e, quando a palavra trava, posso usar recursos criativos e artísticos pra dar forma ao que está difícil de dizer.</p></details>
      <details class="faq"><summary>Terapia online funciona tão bem quanto a presencial? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Sim. A análise profunda do material que você traz independe da tela. O mesmo rigor e sensibilidade clínica do consultório presencial (Cesar Lombroso, Porto Alegre) se mantêm no atendimento online.</p></details>
      <details class="faq"><summary>A Psicologia Junguiana é abstrata demais pro meu estresse diário? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Pelo contrário: o aprofundamento junguiano serve pra entender a raiz do que te esgota no dia a dia — pra você se diferenciar das cobranças externas e viver com mais leveza na prática, não só no "mundo dos sonhos".</p></details>
      <details class="faq"><summary>Quanto custa a sessão? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Com transparência: o valor e as condições de pagamento são tratados de forma individualizada. No primeiro contato, alinhamos estrutura, frequência e modalidade (online ou presencial) do jeito mais confortável pra você.</p></details>
      <details class="faq"><summary>Como agendo? <span class="pl">+</span></summary><p class="pb-5 text-[color:var(--muted)] leading-relaxed">Pelo WhatsApp (51) 98448-5585 ou direto pela Doctoralia. Eu respondo pessoalmente.</p></details>
    </div>
  </section>

  <section class="container py-20">
    <div class="reveal max-w-xl mx-auto text-center"><div class="kicker mb-6 mx-auto">Fale comigo</div><h2 class="display text-5xl md:text-6xl">Quando quiser, estou aqui.</h2><p class="text-[color:var(--muted)] mt-5">Deixe seus dados ou me chame direto no WhatsApp. Respondo pessoalmente pra combinarmos uma primeira conversa.</p></div>
    <form class="reveal card p-7 md:p-9 max-w-xl mx-auto mt-10 space-y-4" onsubmit="return false">
      <input class="field" placeholder="Seu nome">
      <input class="field" placeholder="WhatsApp (com DDD)">
      <textarea class="field" rows="3" placeholder="O que te traz aqui? (à vontade pra escrever pouco)"></textarea>
      <a href="${WA}" target="_blank" rel="noreferrer" class="btn btn-wa w-full text-lg">Agendar pelo WhatsApp →</a>
      <a href="${DOCTORALIA}" target="_blank" rel="noreferrer" class="btn btn-petrol w-full" data-pending="doctoralia-url">Ou agendar na Doctoralia</a>
      <p class="text-xs text-center text-[color:var(--muted)]">🔒 Suas informações são tratadas com sigilo profissional.</p>
    </form>
  </section>

  <footer class="border-t border-[color:var(--line)]" style="background:#fff">
    <div class="container py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3"><span class="mark">E</span><span class="serif text-xl">Eduardo Silveira</span></div>
        <p class="text-sm text-[color:var(--muted)] mt-4 max-w-sm leading-relaxed">Psicoterapia clínica de orientação Junguiana. Online e presencial em Porto Alegre — um espaço seguro pra você se aproximar de quem realmente é.</p>
        <p class="text-xs text-[color:var(--muted)] mt-4">Eduardo Silveira dos Santos — Psicólogo · ${CRP}</p>
      </div>
      <div>
        <p class="text-xs font-bold uppercase tracking-wider mb-4">Navegação</p>
        <ul class="space-y-2 text-sm text-[color:var(--muted)]">
          <li><a href="#ajudo" class="hover:text-[color:var(--ink)]">Como ajudo</a></li>
          <li><a href="#sobre" class="hover:text-[color:var(--ink)]">Sobre mim</a></li>
          <li><a href="#casos" class="hover:text-[color:var(--ink)]">Casos</a></li>
          <li><a href="#faq" class="hover:text-[color:var(--ink)]">FAQ</a></li>
        </ul>
      </div>
      <div>
        <p class="text-xs font-bold uppercase tracking-wider mb-4">Contato</p>
        <ul class="space-y-2 text-sm text-[color:var(--muted)]">
          <li>📱 <a href="${WA}" target="_blank" rel="noreferrer" class="hover:text-[color:var(--ink)]">(51) 98448-5585</a></li>
          <li>📷 <a href="${INSTAGRAM}" target="_blank" rel="noreferrer" class="hover:text-[color:var(--ink)]">@eduardooliveirasilveirapsi</a></li>
          <li>🩺 <a href="${DOCTORALIA}" target="_blank" rel="noreferrer" class="hover:text-[color:var(--ink)]" data-pending="doctoralia-url">Doctoralia</a></li>
          <li>📍 Porto Alegre/RS · online em todo Brasil</li>
        </ul>
      </div>
    </div>
    <div class="container pb-8"><div class="hair mb-6"></div><div class="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[color:var(--muted)]"><span>© 2026 Eduardo Silveira dos Santos · ${CRP}</span><span>Atendimento ético conforme CFP</span></div></div>
  </footer>
</div>

<a href="${WA}" target="_blank" rel="noreferrer" class="wa"><span class="ic">●</span><span>Falar no WhatsApp</span></a>
`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eduardo Silveira — Psicólogo Junguiano em Porto Alegre · Online e presencial" },
      { name: "description", content: "Psicoterapia clínica de orientação Junguiana com Eduardo Silveira dos Santos. Escuta acolhedora e sem julgamentos para adultos, jovens e idosos. Atendimento online e presencial em Porto Alegre." },
      { property: "og:title", content: "Eduardo Silveira — Psicólogo Clínico Junguiano (POA)" },
      { property: "og:description", content: "Um espaço pra escutar quem você realmente é. Psicoterapia Junguiana online e presencial em Porto Alegre." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const onScroll = () => {
      const n = document.getElementById("nav");
      if (n) n.classList.toggle("s", window.scrollY > 20);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  );
}
