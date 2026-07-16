warning: in the working copy of 'public/index.html', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/public/index.html b/public/index.html[m
[1mindex f4f07f6..fcd3936 100644[m
[1m--- a/public/index.html[m
[1m+++ b/public/index.html[m
[36m@@ -12,22 +12,22 @@[m
   <meta name="geo.placename" content="Porto Alegre">[m
   <meta name="geo.position" content="-30.0346;-51.2177">[m
   <meta name="ICBM" content="-30.0346, -51.2177">[m
[31m-  <meta name="theme-color" content="#0B0B0F" media="(prefers-color-scheme: dark)">[m
[31m-  <meta name="theme-color" content="#f4f0e8" media="(prefers-color-scheme: light)">[m
[32m+[m[32m  <meta name="theme-color" content="#12241A" media="(prefers-color-scheme: dark)">[m
[32m+[m[32m  <meta name="theme-color" content="#F5F2EB" media="(prefers-color-scheme: light)">[m
   <meta property="og:title" content="Eduardo Silveira — Psicólogo Junguiano em Porto Alegre">[m
   <meta property="og:description" content="Psicoterapia clínica de orientação Junguiana para adultos. Atendimento online e presencial em Porto Alegre. CRP 07/36443.">[m
   <meta property="og:type" content="website">[m
   <meta property="og:url" content="https://eduardo-silveira-psc.netlify.app/">[m
[31m-  <meta property="og:image" content="/eduardo-perfil.jpg">[m
[32m+[m[32m  <meta property="og:image" content="/eduardo-hero.jpg">[m
   <meta property="og:image:alt" content="Eduardo Silveira dos Santos, psicólogo clínico junguiano em Porto Alegre">[m
   <meta property="og:locale" content="pt_BR">[m
   <meta name="twitter:card" content="summary_large_image">[m
   <meta name="twitter:title" content="Eduardo Silveira — Psicólogo Junguiano em Porto Alegre">[m
   <meta name="twitter:description" content="Psicoterapia clínica de orientação Junguiana para adultos. Atendimento online e presencial em Porto Alegre.">[m
[31m-  <meta name="twitter:image" content="/eduardo-perfil.jpg">[m
[31m-  <link rel="canonical" href="https://eduardosilveirapsi.com/">[m
[31m-  <link rel="icon" type="image/jpeg" href="eduardo-perfil.jpg">[m
[31m-  <link rel="apple-touch-icon" href="eduardo-perfil.jpg">[m
[32m+[m[32m  <meta name="twitter:image" content="/eduardo-hero.jpg">[m
[32m+[m[32m  <link rel="canonical" href="https://eduardo-silveira-psc.netlify.app/">[m
[32m+[m[32m  <link rel="icon" type="image/jpeg" href="eduardo-hero.jpg">[m
[32m+[m[32m  <link rel="apple-touch-icon" href="eduardo-hero.jpg">[m
   <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">[m
   <link rel="alternate" type="application/rss+xml" title="Eduardo Silveira - RSS" href="/sitemap.xml">[m
 [m
[36m@@ -42,7 +42,7 @@[m
     "name": "Eduardo Silveira dos Santos — Psicólogo Junguiano",[m
     "description": "Psicoterapia clínica de orientação Junguiana para adultos. Atendimento online e presencial em Porto Alegre com Eduardo Silveira dos Santos, CRP 07/36443.",[m
     "url": "https://eduardo-silveira-psc.netlify.app/",[m
[31m-    "image": "https://eduardo-silveira-psc.netlify.app/eduardo-perfil.jpg",[m
[32m+[m[32m    "image": "https://eduardo-silveira-psc.netlify.app/eduardo-hero.jpg",[m
     "telephone": "+5551984485585",[m
     "priceRange": "R$",[m
     "address": {[m
[36m@@ -138,46 +138,71 @@[m
     ul { list-style: none; }[m
 [m
     :root {[m
[31m-      --bg: #0B0B0F;[m
[31m-      --bg-card: #141418;[m
[31m-      --bg-elevated: #1A1A20;[m
[31m-      --border: rgba(200,170,120,0.08);[m
[31m-      --border-hover: rgba(200,170,120,0.18);[m
[31m-      --gold: #C9A96E;[m
[31m-      --gold-dim: rgba(201,169,110,0.6);[m
[31m-      --gold-bright: #E2C992;[m
[31m-      --cream: #E8E4DD;[m
[31m-      --muted: #8A8680;[m
[31m-      --muted-light: #A09C96;[m
[31m-      --petrol: #6B8FA3;[m
[31m-      --sage: #7A9E8C;[m
[32m+[m[32m      --bg: #F5F2EB;[m
[32m+[m[32m      --bg-card: #EBE7DD;[m
[32m+[m[32m      --bg-elevated: #E0DACD;[m
[32m+[m[32m      --border: rgba(30, 41, 34, 0.08);[m
[32m+[m[32m      --border-hover: rgba(30, 41, 34, 0.16);[m
[32m+[m[32m      --gold: #6B5A3E;[m
[32m+[m[32m      --gold-dim: rgba(107, 90, 62, 0.6);[m
[32m+[m[32m      --gold-bright: #8B7355;[m
[32m+[m[32m      --cream: #1E2922;[m
[32m+[m[32m      --muted: #5C6B60;[m
[32m+[m[32m      --muted-light: #738578;[m
[32m+[m[32m      --petrol: #4A6A7A;[m
[32m+[m[32m      --sage: #1E5D42;[m
       --serif: 'Cormorant Garamond', Georgia, serif;[m
       --sans: 'DM Sans', system-ui, sans-serif;[m
       --max-w: 1100px;[m
       --section-py: clamp(90px, 12vw, 160px);[m
[31m-      --nav-scroll-bg: rgba(11,11,15,0.85);[m
[31m-      --nav-bg: rgba(11,11,15,0.65);[m
[32m+[m[32m      --nav-bg: rgba(245, 242, 235, 0.75);[m
[32m+[m[32m      --nav-scroll-bg: rgba(245, 242, 235, 0.92);[m
[32m+[m[32m      --shadow-nav: 0 8px 32px rgba(30, 41, 34, 0.06);[m
[32m+[m[32m      --shadow-card: 0 8px 24px rgba(30, 41, 34, 0.04);[m
[32m+[m[32m      --shadow-card-hover: 0 16px 36px rgba(30, 41, 34, 0.08);[m
[32m+[m[32m      --shadow-hero: 0 40px 80px rgba(30, 41, 34, 0.12);[m
[32m+[m[32m      --btn-cta-bg: #1E5D42;[m
[32m+[m[32m      --btn-cta-color: #F5F2EB;[m
[32m+[m[32m      --btn-cta-shadow: rgba(30, 93, 66, 0.2);[m
[32m+[m[32m      --badge-bg: rgba(30, 93, 66, 0.05);[m
[32m+[m[32m      --badge-border: rgba(30, 93, 66, 0.12);[m
[32m+[m[32m      --badge-color: var(--sage);[m
[32m+[m[32m      --kicker-color: var(--sage);[m
[32m+[m[32m      --kicker-border: rgba(30, 93, 66, 0.12);[m
[32m+[m[32m      --kicker-bg: rgba(30, 93, 66, 0.04);[m
     }[m
 [m
[31m-    .light-mode {[m
[31m-      --bg: #f4f0e8;[m
[31m-      --bg-card: #e8e3d8;[m
[31m-      --bg-elevated: #ddd8cc;[m
[31m-      --border: rgba(44,40,32,0.10);[m
[31m-      --border-hover: rgba(44,40,32,0.22);[m
[31m-      --gold: #6b5a3e;[m
[31m-      --gold-dim: rgba(107,90,62,0.6);[m
[31m-      --gold-bright: #8b7355;[m
[31m-      --cream: #1e1c18;[m
[31m-      --muted: #5a5548;[m
[31m-      --muted-light: #7a7568;[m
[31m-      --petrol: #4a6a7a;[m
[31m-      --sage: #5a7a6c;[m
[31m-      --nav-scroll-bg: rgba(244,240,232,0.88);[m
[31m-      --nav-bg: rgba(244,240,232,0.82);[m
[31m-      --toggle-bg: #ede9df;[m
[31m-      --toggle-track-bg: #c5c0b8;[m
[31m-      --toggle-label-color: #4a453d;[m
[32m+[m[32m    .sec-green {[m
[32m+[m[32m      --bg: #12241A;[m
[32m+[m[32m      --bg-card: #1A3023;[m
[32m+[m[32m      --bg-elevated: #213C2B;[m
[32m+[m[32m      --border: rgba(245, 242, 235, 0.08);[m
[32m+[m[32m      --border-hover: rgba(245, 242, 235, 0.18);[m
[32m+[m[32m      --gold: #C9A96E;[m
[32m+[m[32m      --gold-dim: rgba(201, 169, 110, 0.6);[m
[32m+[m[32m      --gold-bright: #E2C992;[m
[32m+[m[32m      --cream: #F5F2EB;[m
[32m+[m[32m      --muted: #A3B3A7;[m
[32m+[m[32m      --muted-light: #C0CDC3;[m
[32m+[m[32m      --petrol: #6B8FA3;[m
[32m+[m[32m      --sage: #2E7D56;[m
[32m+[m[32m      --nav-bg: rgba(18, 36, 26, 0.75);[m
[32m+[m[32m      --nav-scroll-bg: rgba(18, 36, 26, 0.92);[m
[32m+[m[32m      --shadow-nav: 0 8px 32px rgba(0, 0, 0, 0.4);[m
[32m+[m[32m      --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.15);[m
[32m+[m[32m      --shadow-card-hover: 0 20px 48px rgba(0, 0, 0, 0.35);[m
[32m+[m[32m      --shadow-hero: 0 60px 120px rgba(0, 0, 0, 0.5);[m
[32m+[m[32m      --btn-cta-bg: linear-gradient(135deg, var(--gold), #BCA068);[m
[32m+[m[32m      --btn-cta-color: #12241A;[m
[32m+[m[32m      --btn-cta-shadow: rgba(201, 169, 110, 0.2);[m
[32m+[m[32m      --badge-bg: rgba(201, 169, 110, 0.06);[m
[32m+[m[32m      --badge-border: rgba(201, 169, 110, 0.15);[m
[32m+[m[32m      --badge-color: var(--gold-bright);[m
[32m+[m[32m      --kicker-color: var(--gold);[m
[32m+[m[32m      --kicker-border: rgba(201, 169, 110, 0.15);[m
[32m+[m[32m      --kicker-bg: rgba(201, 169, 110, 0.06);[m
[32m+[m[32m      background: var(--bg);[m
[32m+[m[32m      color: var(--cream);[m
     }[m
 [m
     body {[m
[36m@@ -217,18 +242,18 @@[m
     .nav-in { max-width: var(--max-w); margin: 0 auto; padding: 0 28px; }[m
     .nav-bar {[m
       display: flex; align-items: center; justify-content: space-between; height: 62px; padding: 0 22px;[m
[31m-      background: var(--nav-bg, rgba(11,11,15,0.65)); -webkit-backdrop-filter: saturate(1.4) blur(20px); backdrop-filter: saturate(1.4) blur(20px);[m
[32m+[m[32m      background: var(--nav-bg); -webkit-backdrop-filter: saturate(1.4) blur(20px); backdrop-filter: saturate(1.4) blur(20px);[m
       border: 1px solid var(--border); border-radius: 18px;[m
[31m-      box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03);[m
[32m+[m[32m      box-shadow: var(--shadow-nav), inset 0 1px 0 rgba(255,255,255,0.03);[m
       transition: background .3s, border-color .3s;[m
     }[m
[31m-    .nav.s .nav-bar { background: var(--nav-scroll-bg, rgba(11,11,15,0.85)); }[m
[32m+[m[32m    .nav.s .nav-bar { background: var(--nav-scroll-bg); }[m
     .nav-logo { display: flex; align-items: center; gap: 11px; }[m
     .nav-mark {[m
       width: 34px; height: 34px; border-radius: 10px;[m
[31m-      background: linear-gradient(135deg, var(--gold), #A07D3F);[m
[32m+[m[32m      background: linear-gradient(135deg, var(--gold), var(--gold-bright));[m
       display: flex; align-items: center; justify-content: center;[m
[31m-      color: #0B0B0F; font-weight: 700; font-family: var(--serif); font-size: 15px;[m
[32m+[m[32m      color: var(--bg); font-weight: 700; font-family: var(--serif); font-size: 15px;[m
     }[m
     .nav-name { font-family: var(--serif); font-size: 17px; font-weight: 500; color: var(--cream); letter-spacing: 0.01em; }[m
     .nav-links { display: flex; align-items: center; gap: 26px; font-size: 13px; color: var(--muted); }[m
[36m@@ -237,56 +262,24 @@[m
     .nav-cta {[m
       display: inline-flex; align-items: center; gap: 8px;[m
       padding: 10px 20px; border-radius: 12px;[m
[31m-      background: linear-gradient(135deg, var(--gold), #A07D3F);[m
[31m-      color: #0B0B0F; font-weight: 700; font-size: 13px;[m
[31m-      box-shadow: 0 8px 24px rgba(201,169,110,0.2);[m
[32m+[m[32m      background: var(--btn-cta-bg);[m
[32m+[m[32m      color: var(--btn-cta-color); font-weight: 700; font-size: 13px;[m
[32m+[m[32m      box-shadow: 0 8px 24px var(--btn-cta-shadow);[m
       transition: transform .25s, box-shadow .25s;[m
     }[m
[31m-    .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(201,169,110,0.3); }[m
[32m+[m[32m    .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 32px var(--btn-cta-shadow); }[m
     .nav-mob { display: none; background: none; border: none; cursor: pointer; padding: 8px; }[m
     .hamb { display: flex; flex-direction: column; gap: 5px; width: 20px; }[m
     .hamb span { display: block; height: 1.5px; background: var(--cream); border-radius: 2px; transition: .3s; }[m
 [m
[31m-    .theme-toggle {[m
[31m-      display: flex; align-items: center; gap: 7px;[m
[31m-      padding: 5px 12px 5px 8px; border-radius: 999px;[m
[31m-      border: 1px solid var(--border-hover);[m
[31m-      background: var(--toggle-bg, var(--bg-elevated)); cursor: pointer;[m
[31m-      transition: all 0.35s cubic-bezier(0.4,0,0.2,1);[m
[31m-      flex-shrink: 0;[m
[31m-    }[m
[31m-    .theme-toggle:hover { border-color: var(--gold); }[m
[31m-    .toggle-track {[m
[31m-      position: relative; display: inline-flex; align-items: center;[m
[31m-      width: 36px; height: 20px; border-radius: 999px;[m
[31m-      background: var(--toggle-track-bg, var(--border)); border: 1px solid var(--border-hover);[m
[31m-      transition: all 0.35s cubic-bezier(0.4,0,0.2,1); flex-shrink: 0;[m
[31m-    }[m
[31m-    .toggle-thumb {[m
[31m-      position: absolute; left: 3px;[m
[31m-      width: 14px; height: 14px; border-radius: 50%;[m
[31m-      background: var(--gold); box-shadow: 0 1px 4px rgba(0,0,0,0.3);[m
[31m-      transition: left 0.28s cubic-bezier(0.4,0,0.2,1);[m
[31m-    }[m
[31m-    .toggle-thumb.right { left: 19px; }[m
[31m-    .toggle-label {[m
[31m-      font-family: var(--sans); font-size: 10px; font-weight: 600;[m
[31m-      color: var(--muted); letter-spacing: 0.07em; text-transform: uppercase;[m
[31m-      transition: color 0.35s; position: relative; z-index: 100;[m
[31m-    }[m
[31m-[m
[31m-    html.light-mode .toggle-label { color: #3d3830 !important; }[m
[31m-    html:not(.light-mode) .toggle-label { color: #8A8680 !important; }[m
[31m-[m
[31m-    html.light-mode .theme-toggle { background: #e6e1d6 !important; border-color: rgba(44,40,32,0.25) !important; box-shadow: 0 2px 8px rgba(44,40,32,0.1); }[m
[31m-    html.light-mode .toggle-track { background: #c5c0b8 !important; }[m
[31m-    html.light-mode .toggle-thumb { background: #6b5a3e !important; }[m
 [m
     /* ===== KICKER ===== */[m
     .kicker {[m
       display: inline-flex; align-items: center; gap: 8px;[m
       font-size: 11px; letter-spacing: 0.12em; font-weight: 600; text-transform: uppercase;[m
[31m-      color: var(--gold); border: 1px solid rgba(201,169,110,0.2); background: rgba(201,169,110,0.06);[m
[32m+[m[32m      color: var(--kicker-color, var(--gold));[m
[32m+[m[32m      border: 1px solid var(--kicker-border, rgba(30, 93, 66, 0.12));[m
[32m+[m[32m      background: var(--kicker-bg, rgba(30, 93, 66, 0.04));[m
       padding: 8px 16px; border-radius: 999px;[m
     }[m
 [m
[36m@@ -299,11 +292,11 @@[m
     }[m
     .btn:hover { transform: translateY(-2px); }[m
     .btn-gold {[m
[31m-      background: linear-gradient(135deg, var(--gold), #A07D3F);[m
[31m-      color: #0B0B0F;[m
[31m-      box-shadow: 0 16px 40px rgba(201,169,110,0.2);[m
[32m+[m[32m      background: var(--btn-cta-bg);[m
[32m+[m[32m      color: var(--btn-cta-color);[m
[32m+[m[32m      box-shadow: 0 16px 40px var(--btn-cta-shadow);[m
     }[m
[31m-    .btn-gold:hover { box-shadow: 0 20px 48px rgba(201,169,110,0.3); }[m
[32m+[m[32m    .btn-gold:hover { box-shadow: 0 20px 48px var(--btn-cta-shadow); }[m
     .btn-wa {[m
       background: linear-gradient(135deg, #25D366, #128C7E);[m
       color: #fff;[m
[36m@@ -327,18 +320,20 @@[m
     .hero-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }[m
     .badge {[m
       display: inline-flex; align-items: center; gap: 8px;[m
[31m-      background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.12);[m
[31m-      padding: 8px 14px; border-radius: 999px; font-size: 12px; color: var(--gold-dim); font-weight: 500;[m
[32m+[m[32m      background: var(--badge-bg, rgba(30, 93, 66, 0.05));[m
[32m+[m[32m      border: 1px solid var(--badge-border, rgba(30, 93, 66, 0.12));[m
[32m+[m[32m      padding: 8px 14px; border-radius: 999px; font-size: 12px;[m
[32m+[m[32m      color: var(--badge-color, var(--sage)); font-weight: 500;[m
     }[m
     .badge svg { opacity: 0.7; }[m
     .hero-photo { position: relative; }[m
     .hero-frame {[m
       position: relative; border-radius: 20px; overflow: hidden;[m
[31m-      box-shadow: 0 60px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.08);[m
[32m+[m[32m      box-shadow: var(--shadow-hero, 0 40px 80px rgba(30,41,34,0.12)), 0 0 0 1px var(--border);[m
     }[m
     .hero-frame img { width: 100%; height: 560px; object-fit: cover; object-position: top; }[m
     .hero-ring {[m
[31m-      position: absolute; border-radius: 50%; border: 1px solid rgba(201,169,110,0.08); pointer-events: none;[m
[32m+[m[32m      position: absolute; border-radius: 50%; border: 1px solid var(--border); pointer-events: none;[m
     }[m
     .ring-1 { width: 320px; height: 320px; top: -50px; right: -70px; }[m
     .ring-2 { width: 200px; height: 200px; bottom: -40px; left: -50px; border-color: rgba(122,158,140,0.1); }[m
[36m@@ -355,8 +350,9 @@[m
     .card {[m
       background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; padding: 32px;[m
       transition: transform .35s cubic-bezier(.16,1,.3,1), border-color .35s, box-shadow .35s;[m
[32m+[m[32m      box-shadow: var(--shadow-card);[m
     }[m
[31m-    .card:hover { transform: translateY(-6px); border-color: var(--border-hover); box-shadow: 0 24px 60px rgba(0,0,0,0.3); }[m
[32m+[m[32m    .card:hover { transform: translateY(-6px); border-color: var(--border-hover); box-shadow: var(--shadow-card-hover); }[m
     .card-icon { font-size: 28px; margin-bottom: 14px; opacity: 0.8; }[m
     .card-title { font-family: var(--serif); font-size: 22px; font-weight: 500; color: var(--cream); }[m
     .card-text { color: var(--muted); margin-top: 10px; line-height: 1.7; font-size: 14px; font-weight: 300; }[m
[36m@@ -365,7 +361,7 @@[m
 [m
     /* ===== ABOUT ===== */[m
     .about-g { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }[m
[31m-    .about-img { border-radius: 20px; overflow: hidden; box-shadow: 0 50px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,169,110,0.06); }[m
[32m+[m[32m    .about-img { border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-hero), 0 0 0 1px var(--border); }[m
     .about-img img { width: 100%; height: 520px; object-fit: cover; object-position: top; }[m
     .about-text p { color: var(--muted-light); font-size: 15px; line-height: 1.8; margin-bottom: 14px; font-weight: 300; }[m
     .about-text strong { color: var(--gold); font-weight: 500; }[m
[36m@@ -540,9 +536,9 @@[m
     .mod-card { text-align: center; padding: 32px 24px; }[m
     .mod-icon {[m
       width: 64px; height: 64px; border-radius: 50%;[m
[31m-      background: linear-gradient(135deg, var(--gold), #A07D3F);[m
[32m+[m[32m      background: linear-gradient(135deg, var(--gold), var(--gold-bright));[m
       display: flex; align-items: center; justify-content: center;[m
[31m-      margin: 0 auto 16px; font-size: 28px; color: #0B0B0F;[m
[32m+[m[32m      margin: 0 auto 16px; font-size: 28px; color: var(--bg);[m
     }[m
     .mod-label { display: inline-block; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--gold-dim); margin-top: 12px; font-weight: 600; }[m
 [m
[36m@@ -554,7 +550,7 @@[m
 [m
     /* ===== CTA INTERMEDIÁRIO ===== */[m
     .cta-inter {[m
[31m-      background: linear-gradient(135deg, #C9A96E, #A07D3F);[m
[32m+[m[32m      background: linear-gradient(135deg, var(--gold), var(--gold-bright));[m
       border-radius: 20px; padding: clamp(40px, 6vw, 64px);[m
       text-align: center; position: relative; overflow: hidden;[m
     }[m
[36m@@ -563,10 +559,10 @@[m
       background: radial-gradient(circle at 50% 120%, rgba(0,0,0,0.15), transparent 70%);[m
     }[m
     .cta-inter > * { position: relative; z-index: 1; }[m
[31m-    .cta-inter h2 { font-size: clamp(1.8rem, 3.5vw, 2.5rem); color: #0B0B0F; margin-bottom: 12px; }[m
[31m-    .cta-inter p { color: rgba(11,11,15,0.7); font-size: 1rem; max-width: 440px; margin: 0 auto 28px; line-height: 1.7; }[m
[31m-    .cta-inter .btn { background: #0B0B0F; color: #E8E4DD; }[m
[31m-    .cta-inter .btn:hover { background: #1a1a20; box-shadow: 0 16px 40px rgba(0,0,0,0.25); }[m
[32m+[m[32m    .cta-inter h2 { font-size: clamp(1.8rem, 3.5vw, 2.5rem); color: var(--bg); margin-bottom: 12px; }[m
[32m+[m[32m    .cta-inter p { color: rgba(30,41,34,0.75); font-size: 1rem; max-width: 440px; margin: 0 auto 28px; line-height: 1.7; }[m
[32m+[m[32m    .cta-inter .btn { background: var(--bg); color: var(--cream); }[m
[32m+[m[32m    .cta-inter .btn:hover { background: #2D3A30; color: #FFF; box-shadow: 0 16px 40px rgba(0,0,0,0.25); }[m
 [m
     /* ===== FORM VALIDATION ===== */[m
     .field.error { border-color: #c0392b; }[m
[36m@@ -624,12 +620,7 @@[m
           <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>[m
           Agendar[m
         </a>[m
[31m-        <button id="theme-toggle" class="theme-toggle" aria-label="Alternar tema claro/escuro" title="Alternar tema">[m
[31m-          <span class="toggle-track">[m
[31m-            <span class="toggle-thumb" id="toggle-thumb"></span>[m
[31m-          </span>[m
[31m-          <span class="toggle-label" id="toggle-label">Claro</span>[m
[31m-        </button>[m
[32m+[m
         <button class="nav-mob" id="menuB" aria-label="Menu">[m
           <div class="hamb"><span></span><span></span><span></span></div>[m
         </button>[m
[36m@@ -685,7 +676,7 @@[m
           <div class="hero-ring ring-1" aria-hidden="true"></div>[m
           <div class="hero-ring ring-2" aria-hidden="true"></div>[m
           <div class="hero-frame">[m
[31m-            <img src="eduardo-perfil.jpg" alt="Eduardo Silveira dos Santos — psicólogo clínico com abordagem Junguiana em Porto Alegre" width="560" height="560" loading="eager">[m
[32m+[m[32m            <img src="eduardo-hero.jpg" alt="Eduardo Silveira dos Santos — psicólogo clínico com abordagem Junguiana em Porto Alegre" width="560" height="560" loading="eager">[m
           </div>[m
         </div>[m
       </div>[m
[36m@@ -725,7 +716,7 @@[m
   </section>[m
 [m
   <!-- ===== COMO AJUDO ===== -->[m
[31m-  <section class="sec" id="ajudo" aria-labelledby="ajudo-h" style="background:var(--bg-card)">[m
[32m+[m[32m  <section class="sec sec-green" id="ajudo" aria-labelledby="ajudo-h">[m
     <div class="container">[m
       <div class="sec-head r">[m
         <span class="kicker">Como posso ajudar</span>[m
[36m@@ -765,7 +756,7 @@[m
     <div class="container">[m
       <div class="about-g">[m
         <div class="about-img r">[m
[31m-          <img src="eduardo-perfil.jpg" alt="Eduardo Silveira dos Santos — psicólogo clínico junguiano em Porto Alegre" width="520" height="520" loading="lazy">[m
[32m+[m[32m          <img src="eduardo-sobre.jpg" alt="Eduardo Silveira dos Santos — psicólogo clínico junguiano em Porto Alegre" width="520" height="520" loading="lazy">[m
         </div>[m
         <div>[m
           <div class="r"><span class="kicker">Sobre mim</span></div>[m
[36m@@ -814,7 +805,7 @@[m
   </section>[m
 [m
   <!-- ===== MODALIDADES ===== -->[m
[31m-  <section class="sec" id="modalidades" aria-labelledby="mod-h">[m
[32m+[m[32m  <section class="sec sec-green" id="modalidades" aria-labelledby="mod-h">[m
     <div class="container">[m
       <div class="sec-head center r">[m
         <span class="kicker">Presencial e online</span>[m
[36m@@ -941,7 +932,7 @@[m
   </section>[m
 [m
   <!-- ===== AUTORIDADE ===== -->[m
[31m-  <section class="sec" id="autoridade" aria-labelledby="auth-h" style="background:var(--bg-card)">[m
[32m+[m[32m  <section class="sec sec-green" id="autoridade" aria-labelledby="auth-h">[m
     <div class="container">[m
       <div class="sec-head center r">[m
         <span class="kicker">Formação e atuação</span>[m
[36m@@ -1058,7 +1049,7 @@[m
   </section>[m
 [m
   <!-- ===== CTA ===== -->[m
[31m-  <section class="sec" aria-labelledby="cta-h">[m
[32m+[m[32m  <section class="sec sec-green" aria-labelledby="cta-h">[m
     <div class="container">[m
       <div class="cta-box r">[m
         <span class="kicker" style="margin:0 auto 20px">Dê o primeiro passo</span>[m
[36m@@ -1131,7 +1122,7 @@[m
   </section>[m
 [m
   <!-- ===== CONTATO ===== -->[m
[31m-  <section class="sec" id="contato" aria-labelledby="contato-h">[m
[32m+[m[32m  <section class="sec sec-green" id="contato" aria-labelledby="contato-h">[m
     <div class="container">[m
       <div class="sec-head center r">[m
         <span class="kicker">Fale comigo</span>[m
[36m@@ -1167,7 +1158,7 @@[m
   </section>[m
 [m
   <!-- ===== FOOTER ===== -->[m
[31m-  <footer class="foot">[m
[32m+[m[32m  <footer class="foot sec-green">[m
     <div class="container">[m
       <div class="foot-g">[m
         <div class="foot-brand">[m
[36m@@ -1302,30 +1293,7 @@[m
     });[m
   });[m
 [m
[31m-  // Theme toggle[m
[31m-  var isDark = true;[m
[31m-  var savedTheme = localStorage.getItem('theme');[m
[31m-  if (savedTheme === 'light') {[m
[31m-    isDark = false;[m
[31m-    document.documentElement.classList.add('light-mode');[m
[31m-    document.getElementById('toggle-thumb').classList.add('right');[m
[31m-    document.getElementById('toggle-label').textContent = 'Escuro';[m
[31m-  }[m
[31m-  document.getElementById('theme-toggle').addEventListener('click', function() {[m
[31m-    isDark = !isDark;[m
[31m-    document.documentElement.classList.toggle('light-mode', !isDark);[m
[31m-    var thumb = document.getElementById('toggle-thumb');[m
[31m-    var label = document.getElementById('toggle-label');[m
[31m-    if (isDark) {[m
[31m-      thumb.classList.remove('right');[m
[31m-      label.textContent = 'Claro';[m
[31m-      localStorage.setItem('theme', 'dark');[m
[31m-    } else {[m
[31m-      thumb.classList.add('right');[m
[31m-      label.textContent = 'Escuro';[m
[31m-      localStorage.setItem('theme', 'light');[m
[31m-    }[m
[31m-  });[m
[32m+[m
 </script>[m
 </body>[m
 </html>[m
