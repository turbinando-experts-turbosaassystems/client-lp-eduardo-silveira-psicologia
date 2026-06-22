## Objetivo

Transformar a landing page genérica de terapeuta em uma página personalizada para **Eduardo Silveira dos Santos — Psicólogo Clínico Junguiano**, mantendo 100% do layout, estrutura e seções atuais. Toda a mudança fica em `src/routes/index.tsx` (string `BODY` + `CSS`) e em assets.

## Mudanças por seção

**Paleta (no `:root` do CSS embutido)**
- `--bg` → `#F7F5F0` (off-white areia)
- `--bg2` → `#EDEAE3` (superfície elevada)
- `--ink` → `#1A1A2E` (texto principal)
- `--muted` → `#5A6B7A` (texto secundário)
- `--sage`/`--sage2` → `#4A6B5D` (CTA verde oliva, com tom levemente mais claro pro gradiente)
- Cor de apoio para títulos/menu → `#2C4A5E` (azul petróleo) aplicada nos `kicker`, `sagetext` de números e marca
- Botão WhatsApp mantém verde do WhatsApp (padrão da marca); CTA secundário usa `#4A6B5D`
- Garante contraste WCAG AA

**Foto**
- Upload `user-uploads://perfil.jpg` vira asset via `lovable-assets` e entra:
  - Hero (frame principal à direita)
  - Seção "Sobre mim"
- Imagens de stock restantes (se houver) trocadas por fotos condizentes com terapia junguiana / Porto Alegre (tons sóbrios, natureza, livros)

**Nav**
- Marca: monograma "E" + "Eduardo Silveira"
- CTA do topo: "Agendar no WhatsApp" → `https://wa.me/5551984485585`

**Hero (`#topo`)**
- Kicker: "Psicoterapia Junguiana · Online e presencial em Porto Alegre"
- H1: "Um espaço pra escutar quem você *realmente* é."
- Sub: copy curta sobre individuação, escuta sem julgamentos, jovens/adultos/idosos
- 2 CTAs lado a lado (conforme pedido):
  1. WhatsApp `https://wa.me/5551984485585` — "Agendar pelo WhatsApp"
  2. Doctoralia — "Agendar na Doctoralia" *(URL pendente — placeholder `#` com `data-pending`)*
- Selo CRP abaixo dos CTAs: **CRP [pendente]** + "Sigilo profissional" + "Online ou presencial"

**"Tá tudo bem não estar bem" (dores)**
- 3 cards reescritos pra dores do público-alvo do Eduardo:
  - Ansiedade e estresse da rotina/trabalho
  - Vivendo pra agradar / cobranças externas
  - Sintomas sem significado claro (raiz junguiana)

**"Como ajudo" — 6 temas**
Reescritos pro nicho junguiano:
- Ansiedade & estresse do trabalho
- Individuação & autoconhecimento profundo
- Cobranças familiares e expectativas sociais
- Luto, transições e crises de sentido
- Expressão criativa e simbólica (arte/música como recurso)
- Sonhos, símbolos e inconsciente

**"Sobre mim"**
- Foto do Eduardo
- Texto: formação Junguiana, atuação em consultório (Porto Alegre — referência à Cesar Lombroso), experiência em oficinas de criatividade e residenciais terapêuticos
- 3 stats: `CRP [pendente] / Abordagem Junguiana / Híbrido (online + presencial)`

**"Como começamos"** — 3 passos reescritos no tom acolhedor do Eduardo (contato no WhatsApp → primeira escuta → processo no seu ritmo).

**Depoimentos**
Substituídos pelos 2 casos reais informados (sem inventar números/estrelas):
- "Resgate da autonomia familiar" (paciente adulta)
- "Expressão e canalização da angústia" (adolescente → violino)
- 3º card = "Presença validada" mencionando Doctoralia (sem estrelas falsas — vira card institucional com selo)
Aviso "casos clínicos compartilhados com autorização e identidades preservadas".

**CTA do meio** — "Pedir ajuda é um ato de coragem" reescrito com a voz do guia compreensivo.

**Faixa de sigilo** — mantida, copy ajustada.

**FAQ** — substituídas pelas 5 objeções fornecidas (julgamento, "tem solução?", "e se eu travar?", online vs presencial, junguiana é abstrata demais?) + uma sobre valores ("tratado individualmente no primeiro contato").

**Formulário de contato**
- Mesma estrutura; CTA do form aponta pro WhatsApp do Eduardo
- Adicionar link "ou fale na Doctoralia" (pendente URL)

**Rodapé**
- Nome + CRP [pendente]
- Contato: WhatsApp 51 98448-5585 · Instagram @eduardooliveirasilveirapsi · "Atendimento online e presencial em Porto Alegre/RS"
- (E-mail pendente — incluído se você confirmar)

**Botão flutuante WhatsApp** + link `wa.me/5551984485585` em todos os CTAs.

**Meta `<title>`**: "Eduardo Silveira — Psicólogo Junguiano em Porto Alegre · Online e presencial" + meta description coerente.

## Detalhes técnicos

- Edição única em `src/routes/index.tsx` (strings `CSS` e `BODY` + meta `head`).
- Foto: `lovable-assets create --file /mnt/user-uploads/perfil.jpg` → import do JSON → `src/img` no hero/sobre.
- Sem mudança de dependências, rotas ou arquitetura.
- Mantidas todas as classes, animações `reveal`, navbar fixa, FAQ `<details>`, botão flutuante.

## Pendências (vou marcar com placeholder visível no código)

- **CRP completo** (ex.: CRP 07/xxxxx) — aparece no hero, sobre, rodapé
- **URL exata da Doctoralia** — botão do hero e link no form
- **E-mail de contato** — opcional, pra rodapé (se não, deixo só Instagram + WhatsApp)
- **Confirmar handle Instagram**: você passou `@eduardooliveirasilveirapsi` mas o e-mail do contato fala `oliveira` no meio — confirmar grafia
- **Foto adicional opcional**: imagem do consultório/ambiente (hoje uso stock condizente na seção sobre se você não tiver)
