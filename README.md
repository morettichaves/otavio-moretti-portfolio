# Otávio Moretti — Portfólio

**Desenvolvedor Back-End Júnior · Niterói/RJ**

Portfólio para apresentar minha formação, projetos e decisões de implementação. Minha base é C#, .NET, SQL, MySQL e APIs REST, com formação Back-End pelo SENAI. Também estudo desenvolvimento web, automações, integrações e Visual Design Web.

O conceito que orienta a apresentação é **“Do problema real ao sistema que funciona.”** Os estudos de caso explicam o contexto, a solução, as funcionalidades e as tecnologias de cada entrega.

[Acessar o portfólio](https://otavio-moretti-portfolio.morettichaves.chatgpt.site/) · [Explorar o Laboratório Criativo](https://otavio-moretti-portfolio.morettichaves.chatgpt.site/laboratorio.html) · [Meu GitHub](https://github.com/morettichaves)

## Projetos apresentados

| Projeto | Problema e entrega | Contexto |
| --- | --- | --- |
| [Customer Management API](https://github.com/morettichaves/customer-management-api) | CRUD de clientes, MySQL, pagina??o, valida??o e autentica??o por chave de API. | Estudo em Python/FastAPI; 111 testes unit?rios e de integra??o aprovados, com 99,01% de cobertura do m?dulo da API nesta vers?o. |
| [JSilva Sonhos](https://jsilvasonhos.com.br/) | Catálogo de decoração com filtros, seleção de itens, carrinho de orçamento e continuidade pelo WhatsApp. Disponibilidade e reserva são confirmadas no atendimento. | Site publicado; desenvolvimento da identidade visual, HTML, CSS e JavaScript. |
| [Barbearia Prime Club](https://barbearia-prime-club.morettichaves.workers.dev/) | Escolha de serviços, profissionais e horários; fluxo de agendamento com proteção contra horários duplicados. | Demonstração com React, TypeScript, API HTTP, Cloudflare D1 e Drizzle ORM. |
| [Portal Geek](https://morettichaves.github.io/portal-geek/) | Identidade visual e experiência interativa para catálogo, comunidade, eventos e acesso aos canais do projeto. | Projeto acadêmico em HTML, CSS e JavaScript, com Visual Design, IA aplicada e apresentação no Canva. |
| [Buffet Dona Lurdes](https://morettichaves.github.io/buffet-dona-lourdes/) | Apresentação institucional, produtos, cardápio e caminhos para contato. | Projeto acadêmico com dados fictícios, desenvolvido em HTML, CSS e JavaScript. |

As apresentações completas estão na seção [Projetos do portfólio](https://otavio-moretti-portfolio.morettichaves.chatgpt.site/#projetos). APIs, automações e integrações futuras aparecem como **em construção**, sem serem anunciadas como entregas concluídas.

## Sobre este repositório

Este projeto é o site de apresentação do portfólio, implementado com **HTML, CSS e JavaScript**, sem framework. Os códigos das aplicações apresentadas são projetos separados; esta página não executa suas APIs ou bancos de dados.

- Navegação por Início, Soluções, Projetos, Trajetória e Contato.
- Estudos de caso com desafio, solução, funcionalidades e tecnologias.
- Layout responsivo, foco de teclado visível e textos alternativos nas imagens de conteúdo.
- Fundos decorativos em WebP para reduzir o volume de download.
- Laboratório Criativo com Portal Geek, identidade NEXA e estudos visuais com IA.
- Respeito à preferência de movimento reduzido nas transições do site.

O laboratório apresenta meu estudo de design e criação visual, enquanto o portfólio principal mantém o foco profissional em Back-End Júnior. Imagens ilustrativas geradas com IA são identificadas no conteúdo ou na documentação correspondente.

## Executar localmente

Não há dependências npm para instalar. A partir da pasta do projeto, com Python disponível:

```powershell
python -m http.server 8000
```

Abra [http://localhost:8000](http://localhost:8000). Para o laboratório, acesse `/laboratorio.html`. Encerre o servidor com `Ctrl+C`.

O conteúdo principal é estático. Fontes do Google, páginas incorporadas e links externos dependem de conexão com a internet.

## Gerar os arquivos de publicação

Com Node.js instalado, execute:

```powershell
node build.cjs
```

O script copia as páginas, estilos, scripts e imagens para `dist/`. Ele prepara os arquivos; não publica o site sozinho.

```text
index.html          Portfólio principal
styles.css          Sistema visual e responsividade
script.js           Destaque da seção ativa na navegação
laboratorio.html    Laboratório Criativo
laboratorio.css     Estilos do laboratório
laboratorio.js      Interações do laboratório
assets/             Fotos, capturas e artes dos projetos
docs/               Decisões e registros de revisão
build.cjs           Preparação dos arquivos estáticos
```

## Conferência antes de publicar

1. Conferir menu, títulos, imagens e botões no computador e no celular.
2. Navegar com `Tab` e verificar o foco de links, botões e detalhes expansíveis.
3. Conferir os links dos quatro projetos e do laboratório.
4. Testar a galeria NEXA e o portal incorporado, incluindo o link para abrir em outra aba.
5. Confirmar a leitura dos textos sobre os fundos e o carregamento das imagens.

Esses passos são um roteiro de validação; não representam uma certificação de acessibilidade ou teste automatizado completo.

## Contato

- [GitHub — morettichaves](https://github.com/morettichaves)
- [LinkedIn — Otávio Moretti](https://www.linkedin.com/in/ot%C3%A1vio-moretti/)
- [Instagram profissional — @otaviomoretti.dev](https://www.instagram.com/otaviomoretti.dev/)
- E-mail: morettichaves@gmail.com
