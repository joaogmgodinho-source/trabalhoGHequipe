# Atividade Prática — Desenvolvimento Colaborativo com GitHub

## Contexto


Uma equipe de desenvolvimento recebeu a tarefa de criar uma página web para divulgação de um **evento fictício de tecnologia**.

O projeto será desenvolvido de forma colaborativa utilizando:

- HTML;
- CSS;
- Git;
- GitHub;
- Branches;
- Pull Requests;
- Merge;
- README.

Cada equipe será formada por **3 integrantes**.

Os três integrantes trabalharão em **um único repositório da equipe**, porém cada aluno deverá desenvolver uma parte diferente da página utilizando sua própria branch.

Ao final, as três partes deverão ser integradas à branch `main`, formando uma única página web.

---

# Objetivo da atividade

Aplicar na prática os conceitos de desenvolvimento colaborativo utilizando Git e GitHub.

Durante a atividade, a equipe deverá demonstrar que consegue:

- clonar um projeto existente;
- criar um novo repositório para a equipe;
- adicionar colaboradores;
- trabalhar com branches;
- realizar commits;
- enviar alterações para o GitHub;
- criar Pull Requests;
- revisar alterações;
- realizar merge;
- organizar HTML e CSS;
- documentar o projeto utilizando `README.md`.

---

# Situação proposta

A equipe deverá desenvolver uma página web para divulgação de um **evento fictício de tecnologia**.

O grupo poderá definir:

- nome do evento;
- tema;
- identidade visual;
- conteúdo;
- imagens;
- programação;
- palestras;
- workshops.

Alguns exemplos de temas:

- Inteligência Artificial;
- Desenvolvimento de Software;
- Games;
- Robótica;
- Automação;
- Cibersegurança;
- Desenvolvimento Web;
- Internet das Coisas;
- Inovação e Tecnologia.

---

# Organização da equipe

Cada equipe deverá possuir **3 integrantes**.

Todos os integrantes trabalharão sobre **o mesmo repositório da equipe**.

Cada integrante será responsável por uma branch diferente.

Exemplo:

```text
main
│
├── feature/header
├── feature/conteudo
└── feature/footer
```

Cada aluno deverá desenvolver sua parte, realizar commits e enviar sua branch para o GitHub.

---

# Etapa 1 — Clonar o projeto disponibilizado pelo professor

O professor disponibilizará um repositório contendo:

```text
index.html
style.css
README.md
```

O `README.md` inicial conterá todas as orientações da atividade.

Um integrante da equipe deverá clonar esse repositório:

```bash
git clone URL_DO_REPOSITORIO_DO_PROFESSOR
```

Depois deverá acessar a pasta:

```bash
cd nome-do-projeto
```

---

# Etapa 2 — Criar o repositório da equipe

O repositório disponibilizado pelo professor será utilizado apenas como **modelo inicial da atividade**.

Cada grupo deverá criar **seu próprio repositório no GitHub**.

Apenas um integrante precisa criar esse repositório.

Sugestão de nome:

```text
tech-event-equipe01
```

ou:

```text
evento-tecnologia-nome-da-equipe
```

O novo repositório deverá ser criado **vazio**, pois os arquivos já estarão disponíveis no projeto clonado.

---

# Etapa 3 — Conectar o projeto ao repositório da equipe

Após clonar o projeto do professor, o Git continuará apontando para o repositório original.

A equipe deverá remover essa conexão:

```bash
git remote remove origin
```

Depois deverá conectar o projeto ao novo repositório criado pela equipe:

```bash
git remote add origin URL_DO_REPOSITORIO_DA_EQUIPE
```

Para verificar:

```bash
git remote -v
```

O endereço apresentado deverá ser o repositório da própria equipe.

Depois, enviar a versão inicial:

```bash
git push -u origin main
```

A partir desse momento, o grupo deverá trabalhar **somente no repositório da equipe**.

---

# Etapa 4 — Adicionar os integrantes como colaboradores

O aluno responsável pela criação do repositório deverá adicionar os outros dois integrantes como colaboradores.

Assim, os três alunos poderão enviar alterações para o mesmo projeto.

Ao final dessa etapa teremos:

```text
REPOSITÓRIO DA EQUIPE
        │
        ├── Integrante 1
        ├── Integrante 2
        └── Integrante 3
```

Todos trabalhando no mesmo projeto.

---

# Etapa 5 — Os demais integrantes clonam o repositório da equipe

Depois que o repositório da equipe estiver configurado, os outros integrantes deverão cloná-lo em seus computadores.

```bash
git clone URL_DO_REPOSITORIO_DA_EQUIPE
```

Atenção:

**A partir deste momento, ninguém deverá continuar trabalhando no repositório do professor.**

Todo o desenvolvimento deverá acontecer no:

**repositório criado pela própria equipe.**

---

# Etapa 6 — Planejar a página

Antes de iniciar a programação, a equipe deverá conversar e definir um padrão visual.

O grupo deverá decidir:

- nome do evento;
- tema;
- cores;
- tipografia;
- imagens;
- estilo visual;
- conteúdo que será apresentado.

Essa definição é importante porque os três integrantes desenvolverão partes diferentes da mesma página.

Mesmo trabalhando separadamente, o resultado deverá possuir uma identidade visual única.

---

# Etapa 7 — Documentar a identidade visual no README

O arquivo:

```text
README.md
```

deverá ser atualizado pela equipe.

Deverá conter obrigatoriamente:

## Paleta de cores

Exemplo:

```text
Cor principal: #1E3A8A
Cor secundária: #3B82F6
Cor de fundo: #F8FAFC
Cor dos textos: #1F2937
```

## Tipografia

Exemplo:

```text
Títulos: Montserrat
Textos: Arial
```

## Imagens

Informar quais imagens foram utilizadas e onde são utilizadas.

Exemplo:

```text
Banner principal:
Imagem relacionada à inteligência artificial.

Cards:
Imagens relacionadas às palestras e workshops.
```

Caso as imagens sejam retiradas da internet, a equipe deverá informar também a fonte.

---

# Etapa 8 — Dividir o trabalho

Cada integrante deverá ficar responsável por uma parte da página.

## Integrante 1 — `feature/header`

Responsável por:

- cabeçalho;
- nome do evento;
- menu;
- banner principal;
- data;
- local;
- chamada principal.

Branch:

```bash
git switch -c feature/header
```

---

## Integrante 2 — `feature/conteudo`

Responsável pelo conteúdo principal.

Poderá desenvolver:

- apresentação do evento;
- seção "Sobre";
- palestras;
- workshops;
- programação;
- cards;
- convidados;
- informações do evento.

Branch:

```bash
git switch -c feature/conteudo
```

---

## Integrante 3 — `feature/footer`

Responsável pela parte final da página.

Poderá desenvolver:

- informações de contato;
- redes sociais;
- localização;
- patrocinadores;
- informações adicionais;
- rodapé.

Branch:

```bash
git switch -c feature/footer
```

---

# Importante

Apesar da divisão do trabalho, o resultado final deverá ser:

## UMA ÚNICA PÁGINA WEB

Não deverão ser criados três sites separados.

As três branches representam apenas a divisão das tarefas durante o desenvolvimento.

Ao final:

```text
feature/header
        ↓

feature/conteudo
        ↓

feature/footer
        ↓

      MAIN
        ↓

PÁGINA COMPLETA
```

---

# Etapa 9 — Desenvolver utilizando HTML e CSS

O projeto deverá possuir obrigatoriamente:

```text
index.html
style.css
README.md
```

O HTML deverá estar organizado.

Sempre que possível, utilizar elementos semânticos como:

```html
<header>
<nav>
<main>
<section>
<footer>
```

O CSS deverá seguir o padrão visual definido anteriormente pela equipe.

---

# Etapa 10 — Utilizar comentários no código

O projeto deverá possuir comentários identificando as principais partes.

Exemplo no HTML:

```html
<!-- Seção de programação do evento -->
<section id="programacao">

</section>
```

Exemplo no CSS:

```css
/* Cards das palestras */

.card {

}
```

Os comentários deverão ajudar os outros integrantes a compreenderem a organização do código.

---

# Etapa 11 — Realizar commits

Durante o desenvolvimento, cada integrante deverá registrar suas alterações.

Exemplo:

```bash
git add .
```

Depois:

```bash
git commit -m "cria cabecalho do evento"
```

Outro exemplo:

```bash
git commit -m "adiciona cards das palestras"
```

Ou:

```bash
git commit -m "cria rodape e contatos"
```

As mensagens deverão representar claramente o que foi realizado.

Evitar mensagens como:

```text
alteração
```

```text
teste
```

```text
coisas
```

```text
commit 1
```

---

# Etapa 12 — Enviar a branch para o GitHub

Depois de desenvolver e realizar os commits:

```bash
git push -u origin feature/header
```

Para outra branch:

```bash
git push -u origin feature/conteudo
```

E:

```bash
git push -u origin feature/footer
```

Cada integrante deverá enviar sua própria branch.

---

# Etapa 13 — Criar um Pull Request

Depois que sua parte estiver pronta, cada aluno deverá criar um **Pull Request**.

Exemplo:

```text
feature/header
       ↓
      main
```

O Pull Request deverá possuir um título que identifique a alteração.

Exemplo:

```text
Cria cabeçalho e menu principal
```

E uma pequena descrição.

Exemplo:

```text
Foi desenvolvido o cabeçalho da página contendo
o nome do evento, menu de navegação, data e local.
```

---

# Etapa 14 — Revisar o trabalho do colega

Antes do merge, outro integrante deverá analisar o Pull Request.

Verificar:

- o código funciona?
- a parte solicitada foi desenvolvida?
- o HTML está organizado?
- existem comentários?
- o CSS segue o padrão definido?
- as cores estão corretas?
- a tipografia está correta?
- a alteração interfere em outra parte do projeto?

O objetivo é que o próprio grupo realize uma pequena revisão antes da integração.

---

# Etapa 15 — Realizar o Merge

Depois da revisão, a branch poderá ser integrada à `main`.

O processo deverá acontecer com as três branches.

Ao final:

```text
feature/header ─────┐
                    │
feature/conteudo ───┼──→ main
                    │
feature/footer ─────┘
```

A `main` deverá conter a página completa.

---

# Etapa 16 — Atualizar o projeto local

Depois dos merges, todos os integrantes deverão atualizar sua versão local.

```bash
git switch main
```

Depois:

```bash
git pull origin main
```

Agora os três computadores deverão possuir a versão final integrada.

---

# Etapa 17 — Testar o projeto

Antes da entrega, a equipe deverá conferir a página completa.

Verificar:

- menu;
- textos;
- imagens;
- cores;
- tipografia;
- organização das seções;
- links;
- responsividade básica;
- integração entre as partes;
- comentários;
- funcionamento geral.

---

# Etapa 18 — Finalizar o README

O `README.md` final deverá conter:

## Identificação

- nome do projeto;
- nome do evento;
- integrantes da equipe.

## Descrição

Explicação sobre o evento e sobre o objetivo da página.

## Tecnologias utilizadas

Exemplo:

```text
HTML
CSS
Git
GitHub
```

## Paleta de cores

Informar cores e códigos utilizados.

## Tipografia

Informar as fontes utilizadas.

## Imagens

Informar quais imagens foram utilizadas e suas fontes quando necessário.

## Organização das branches

Exemplo:

```text
feature/header
Responsável: Nome do aluno

feature/conteudo
Responsável: Nome do aluno

feature/footer
Responsável: Nome do aluno
```

---

# Requisitos obrigatórios

O projeto deverá possuir:

- 1 página web completa;
- HTML;
- CSS;
- comentários no HTML;
- comentários no CSS;
- README atualizado;
- 3 integrantes;
- 3 branches de desenvolvimento;
- pelo menos uma branch desenvolvida por cada integrante;
- commits realizados pelos integrantes;
- Pull Requests;
- revisão das alterações;
- merge das branches na `main`;
- padrão de cores documentado;
- tipografia documentada;
- imagens documentadas;
- um único repositório compartilhado pela equipe.

---

# Entrega da atividade

A entrega será realizada através do **AVA**.

A equipe deverá enviar:

## Link do repositório da equipe no GitHub

Exemplo:

```text
https://github.com/usuario/tech-event-equipe01
```

Será realizado **um único envio por equipe**.

Todos os integrantes deverão estar identificados no arquivo `README.md`.

---

# Atenção

O link entregue deverá apontar para **o repositório criado pela equipe**.

Não deverá ser enviado:

- o repositório original do professor;
- apenas o link da página HTML;
- arquivo compactado;
- print da atividade.

O professor deverá conseguir acessar o repositório e verificar:

```text
Código
+
README
+
Branches
+
Commits
+
Pull Requests
+
Histórico de desenvolvimento
```

---

# Resultado esperado

Ao final da atividade, a equipe deverá possuir um único projeto integrado na branch `main`.

O histórico deverá demonstrar o processo de trabalho:

```text
REPOSITÓRIO INICIAL DO PROFESSOR
              ↓
            CLONE
              ↓
     REPOSITÓRIO DA EQUIPE
              ↓
    ADIÇÃO DOS COLABORADORES
              ↓
      DIVISÃO EM BRANCHES
              ↓
       DESENVOLVIMENTO
              ↓
           COMMITS
              ↓
             PUSH
              ↓
       PULL REQUESTS
              ↓
           REVISÃO
              ↓
            MERGE
              ↓
      PROJETO FINAL NA MAIN
              ↓
        ENTREGA NO AVA
```

O objetivo principal da atividade não é apenas produzir uma página visualmente bonita.

A equipe deverá demonstrar que conseguiu **organizar, dividir, versionar, revisar e integrar o desenvolvimento de uma página web utilizando Git e GitHub**.
