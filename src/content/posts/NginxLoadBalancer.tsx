'use client'

import Image from 'next/image'
import { useLang } from '@/context/LangContext'
import { BLOG_IMAGES } from '@/data/blogImages'

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '8px',
}

const imgWrap: React.CSSProperties = {
  margin: '2rem 0',
  border: '0.5px solid var(--border)',
  borderRadius: '8px',
  overflow: 'hidden',
  background: 'var(--bg2)',
}

function PostImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={imgWrap}>
      <Image src={src} alt={alt} width={1280} height={720} style={imgStyle} sizes="(max-width: 720px) 100vw, 720px" />
    </div>
  )
}

const content = {
  pt: (
    <>
      <p>Essa vai ser a documentação oficial do meu projeto de estudos focando em infraestrutura, mais especificamente, dominar o Nginx.</p>

      <p>Recentemente, dando uma olhada no mercado, vi várias vagas pedindo conhecimentos em Apache e Nginx. O Apache nem tanto hoje em dia, mas o Nginx está em todo lugar. Em 2024, eu já tinha tentado usar o Nginx em uma aplicação minha e falhei miseravelmente. Não entendia o conceito e não consegui implementar direito. Mas agora o jogo virou.</p>

      <p>Se a gente for simplificar, esses caras são os "recepcionistas" das requisições web. Eles ficam na porta de entrada da sua aplicação decidindo para onde o tráfego vai.</p>

      <h2>Apache vs. Nginx: O Choque de Gerações</h2>

      <p>Eles são escolhas de ferramentas concorrentes, mas de gerações diferentes:</p>

      <p><strong>Apache:</strong> Criado nos anos 90, é o "tiozão" da internet. Super flexível, robusto e amigável, brilhou muito na era de ouro do PHP e do WordPress. O grande problema dele é a arquitetura: para cada pessoa que acessa o seu site, o Apache cria um processo novo na memória do servidor. Se entram mil pessoas de uma vez, ele cria mil processos e a sua memória RAM vai pro espaço.</p>

      <p><strong>Nginx (Lê-se "Engine-X"):</strong> É o padrão moderno e de alta performance, criado justamente para resolver esse vazamento de memória do Apache. Ele trabalha de forma assíncrona e orientada a eventos. Um único processo do Nginx consegue lidar com milhares de conexões simultâneas usando quase nada de RAM. É por isso que, para stacks modernas (Python, Go, Node), o Nginx é praticamente um monopólio.</p>

      <h2>Nuvem, IaaS e a Sopa de Letrinhas</h2>

      <p>Para quem estuda System Design (e não Design System — minha cabeça de ex-desenvolvedor front-end ainda dá uns bugs com isso de vez em quando!), o Nginx brilha quando falamos de Load Balance (Balanceamento de Carga) e DevOps.</p>

      <p>O ponto é que muita gente hoje em dia programa há anos e nunca precisou encostar num Nginx. Por quê? Porque o mercado abstraiu muito a infraestrutura. Nós temos basicamente três grandes camadas de serviço:</p>

      <p><strong>SaaS (Software as a Service):</strong> O mais "family friendly", pronto para o usuário final.</p>

      <p><strong>PaaS (Platform as a Service):</strong> Onde a maioria dos devs mora. Vercel, Render, Heroku... Você joga o código lá e eles resolvem a infraestrutura mágica por trás.</p>

      <p><strong>IaaS (Infrastructure as a Service):</strong> Aqui a brincadeira fica séria. Você aluga a infraestrutura crua e o "DevOps" é você.</p>

      <p>Para usar o Nginx de verdade, a gente precisa descer pro IaaS. Precisamos de uma VPS (Virtual Private Server), que é só um nome chique para "computador alugado" (aliás, quem foi o gênio que inventou de chamar o computador dos outros de "Nuvem"?). Você vai na AWS, Azure ou naquela alemã famosa, a Hetzner, e aluga uma máquina.</p>

      <p><em>Nota mental sobre o mercado: antigamente se falava muito do GCP (Google Cloud Platform), mas hoje em dia as vagas parecem massivamente divididas entre AWS e Azure. Para os meus laboratórios, devo focar em Azure ou fazer tudo local mesmo usando Docker.</em></p>

      <h2>A Anatomia de uma Requisição: Servers, Proxies e App Servers</h2>

      <p>Vamos imaginar que a minha aplicação cresceu. Eu não posso ter um único contêiner rodando meu site, senão ele cai. Eu preciso de clones. Imagina que eu tenho réplicas rodando a minha API. Como o usuário acessa isso? É aqui que a arquitetura se divide em vários papéis. Dá uma olhada nesse fluxograma que preparei para ilustrar exatamente o ciclo de vida dessa requisição:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.fluxRequest} alt="Fluxo de uma requisição web passando por Nginx, Proxy Reverso e App Servers" />

      <p><strong>O Server Físico (A VPS):</strong> O computador real que alugamos.</p>

      <p><strong>O Web Server (Nginx):</strong> Fica em um contêiner isolado, bem na frente, recebendo a pancada da internet. Ele não entende código Python, não sabe o que é uma variável e não lê banco de dados. Ele só recebe pacotes e entrega pacotes. Nele, configuramos o Reverse Proxy e o Load Balance.</p>

      <p><strong>O App Server (Uvicorn, no caso do Python):</strong> Fica dentro de cada um dos contêineres da nossa API. Ele é o tradutor. Ele recebe a requisição limpa que veio do Nginx e diz: "Python, executa essa função aqui e me dá a resposta".</p>

      <p>O Nginx fica na linha de frente distribuindo as cartas. E o mais legal: essa arquitetura simples de colocar o Nginx na frente já é a primeira grande linha de defesa contra os famosos ataques DDoS (Negação de Serviço).</p>

      <h2>Quando eu realmente preciso usar o Nginx? (A Escala de 1 a 5)</h2>

      <p>Muita gente acha que Load Balance e Nginx são coisas só pra Netflix. Mas a internet tem "níveis de poder" bem definidos:</p>

      <p><strong>Categoria 1 — O Projeto Fantasma (Hobby/Portfólio):</strong> De 0 a 1.000 acessos por mês. Uma maquininha minúscula (ou Vercel/Render). Tudo roda na mesma caixa (Web Server, App, Banco de dados). Custo: $0 a $10/mês.</p>

      <p><strong>Categoria 2 — A Padaria de Bairro (SaaS Iniciante):</strong> O negócio validou e dá dinheiro. Mil a 50 mil acessos por dia. Duas a quatro máquinas. O banco de dados já sai do servidor principal. O Nginx já aparece aqui na frente dividindo a carga entre dois ou três servidores da aplicação. Custo: $50 a $300/mês.</p>

      <p><strong>Categoria 3 — Startup em Tração (App Nacional):</strong> Picos cruéis de acesso (ex: Ifood na hora do almoço). Milhões de requisições por dia. O servidor fixo morre e entra o Auto Scaling (a nuvem liga e desliga máquinas sozinha). Começamos a usar Filas (RabbitMQ/SQS), Cache em memória (Redis) e o Load Balance passa a ser gerenciado pela própria nuvem (AWS ALB). Custo: $2k a $15k/mês.</p>

      <p><strong>Categoria 4 — O Unicórnio (Gigantes como Nubank/Uber):</strong> O sistema não pode cair, senão sai no G1. Bilhões de requisições. Entra a arquitetura de Microsserviços (o login roda em 50 servidores, o pagamento em outros 50). Bancos relacionais começam a não dar conta, entram os NoSQL (DynamoDB, Cassandra) e mensageria pesada (Kafka). Custo: $100k a $1M/mês.</p>

      <p><strong>Categoria 5 — Os Titãs (Google, Meta, Netflix):</strong> Fronteira da física. O problema não é software, é a velocidade da luz nos cabos submarinos. Eles não usam quase nada de prateleira. Têm servidores dentro da sua operadora local (Edge Computing) e sincronizam bancos de dados com relógios atômicos. Custo: Centenas de milhões.</p>

      <h2>O Laboratório Prático (Mão na Massa)</h2>

      <p>Para não tomar um bloqueio de cartão de crédito testando carga na nuvem, montei o laboratório 100% local com Docker Compose. A arquitetura ficou assim:</p>

      <p>3 Contêineres de réplica da minha API (FastAPI + Uvicorn). 1 Contêiner Nginx na frente atuando como Proxy Reverso e Load Balancer. Prometheus + Grafana para monitoramento. Locust para teste de estresse (mandar pancada de requisições).</p>

      <h3>Monitoramento: O Segredo do cAdvisor</h3>

      <p>O Grafana por padrão não mostra quanto de RAM e CPU seus contêineres estão gastando. Para isso, precisamos de uma ferramenta do Google chamada cAdvisor (Container Advisor). Ele é um agente, escrito em Go, que fica espionando a temperatura (CPU/RAM) de todos os contêineres e formata isso pro Prometheus ler.</p>

      <p>Descobri que contêineres não têm limite próprio por padrão; o limite deles é o gargalo da sua máquina física. Dá uma olhada no painel que eu montei. Nele dá pra ver que a minha API de teste tem um consumo baixíssimo (uns 40MB de RAM por contêiner), mesmo consumindo parte dos 12 núcleos da máquina. Ter essa visão no Grafana é sensacional:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.grafana} alt="Dashboard do Grafana com cAdvisor mostrando CPU e RAM dos contêineres" />

      <h3>Estressando com o Locust (O conceito de Ramp Up)</h3>

      <p>O Locust tem duas configurações principais: o número total de usuários (o limite da carga) e o Ramp Up. O Ramp Up é a taxa de subida: quantos usuários entram por segundo. Quanto maior o Ramp Up, mais brusca é a pancada, porque a carga total é atingida muito rápido.</p>

      <p>Para os testes, configurei uma carga bacana com uma subida controlada:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.locust} alt="Interface do Locust configurando o teste de carga com Ramp Up" />

      <p>Escolher um Ramp Up menor (subir de forma gradual) é ótimo para criar uma linha de estresse longa, dando tempo para você ver no Grafana o segundo exato em que o servidor começa a "pedir água" e gargalar.</p>

      <h3>A Mágica da Latência P95</h3>

      <p>No Grafana, a métrica de ouro não é a "Latência Média", é o P95 (Percentil 95). Ele mostra o tempo de resposta que 95% dos usuários tiveram. A gente usa isso porque a Média é mentirosa: se 99 clientes carregam o site em 10ms, mas 1 cliente perde o sinal do 3G no túnel e demora 5 segundos, a média joga o tempo de todo mundo lá pra cima. O P95 corta os 5% de "outliers azarados" e te mostra a realidade do seu servidor de forma limpa. Empresas insanas por performance usam o P99.</p>

      <p>Nesse meu dashboard focado no Load Balancer, as requisições estão perfeitamente divididas entre as 3 APIs, e a latência P95 se mantém super saudável:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.grafanaBasic} alt="Dashboard do Grafana mostrando requisições divididas entre 3 APIs e latência P95" />

      <h2>E o Kubernetes?</h2>

      <p>O K8s é state-of-the-art para empresas da Categoria 3 pra cima. Em vez de você configurar servidor por servidor, o K8s é o "cérebro" que gerencia centenas de VPSs agrupadas e faz a auto-cura (se a máquina pegar fogo, ele sobe o contêiner em outra). É complexo e pesado (gasta uns 2GB de RAM só para existir). Para projetos pequenos e médios, o Docker Compose dá conta com maestria.</p>

      <h2>Dissecando o nginx.conf</h2>

      <p>Para provar que o Nginx não é um bicho de sete cabeças, olha como a configuração real do Load Balance e do Proxy Reverso fica enxuta no código:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.configNginx} alt="Arquivo nginx.conf com configuração de upstream, load balance e proxy reverso" />

      <p>Aqui está a tradução visual exata do que esse bloco de código está fazendo:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.loadBalancerReverseProxy} alt="Diagrama visual explicando como o nginx.conf mapeia o Load Balancer e o Proxy Reverso" />

      <p>O <code>upstream</code> cria um grupo com as nossas APIs. O <code>least_conn</code> é o algoritmo de distribuição inteligente: ele joga a próxima requisição para a API que estiver mais desocupada — melhor que o <code>round_robin</code> que só distribui em círculo, ou o <code>ip_hash</code> que prende o usuário na mesma máquina. Os nomes <code>api-1</code>, etc., são resolvidos pelo próprio DNS interno do Docker.</p>

      <p>O bloco <code>server</code> é o Web Server em si, escutando a porta 80. O <code>proxy_pass</code> é a mágica: ele pega o que chegou e joga para o nosso grupo de APIs lá em cima. O cliente só vê o Nginx e nem sonha que existem 3 APIs por trás.</p>

      <p>Essas linhas de <code>proxy_set_header</code> são vitais. Se a gente não passar isso, a API vai achar que quem fez a requisição foi o IP do próprio Nginx. Esses headers garantem que o IP real do cliente chegue lá no back-end para gerar logs e autenticações corretas.</p>

      <h2>Conclusão: Nginx é Web Server ou Proxy Reverso?</h2>

      <p>Uma dúvida comum: "Se o Proxy Reverso já é o Web Server mais seguro, eu só uso ele, certo?" Depende! O Nginx é Fullstack. Ele pode atuar de três formas na mesma máquina:</p>

      <p><strong>Só Web Server:</strong> Para um blog HTML/CSS estático. Usa-se a diretiva <code>root /pasta</code> no <code>location</code>. Ele entrega arquivos do HD na velocidade da luz.</p>

      <p><strong>Só Proxy Reverso:</strong> O nosso laboratório acima. O Nginx atua só como o escudo/roteador repassando tráfego pro Python processar.</p>

      <p><strong>Híbrido (O cenário real Fullstack):</strong> No mesmo <code>nginx.conf</code>, você pode ter um <code>location /</code> servindo os arquivos estáticos do seu front-end em React, e um <code>location /api/</code> fazendo o <code>proxy_pass</code> pro seu back-end em FastAPI.</p>

      <p>No fim do dia, ver aquele gráfico de requisições do Grafana dividindo perfeitamente as linhas de tráfego entre os meus três contêineres foi como ver as engrenagens de uma máquina colossal rodando em sincronia perfeita. Aprender a orquestrar tudo isso não é apenas escrever linhas de código, é entender como a nossa aplicação ganha vida, resiste ao caos e escala para enfrentar o mundo real. É desbravar um território novo onde você deixa de ser só o construtor da peça e passa a ser o arquiteto do ecossistema inteiro.</p>

      <p>E que venham os próximos desafios! RabbitMQ e Kafka já estão na mira.</p>
    </>
  ),
  en: (
    <>
      <p>This is the official documentation of my infrastructure study project, specifically focused on mastering Nginx.</p>

      <p>Recently, while browsing the job market, I noticed many openings requiring knowledge of Apache and Nginx. Apache not so much these days, but Nginx is literally everywhere. Back in 2024, I had already tried using Nginx in one of my applications and failed miserably. I didn't understand the concept and couldn't implement it properly. But now the game has changed.</p>

      <p>If we simplify it, these tools are the "receptionists" of web requests. They sit at the entry door of your application deciding where the traffic goes.</p>

      <h2>Apache vs. Nginx: A Clash of Generations</h2>

      <p>They are competing tool choices, but from different generations:</p>

      <p><strong>Apache:</strong> Created in the 90s, it's the internet's "old guard." Super flexible, robust and friendly — it shone in the golden era of PHP and WordPress. The big problem is its architecture: for every person who accesses your site, Apache creates a new process in server memory. If a thousand people arrive at once, it creates a thousand processes and your RAM goes through the roof.</p>

      <p><strong>Nginx (pronounced "Engine-X"):</strong> The modern high-performance standard, created specifically to solve Apache's memory problem. It works asynchronously and event-driven. A single Nginx process can handle thousands of simultaneous connections using almost no RAM. That's why, for modern stacks (Python, Go, Node), Nginx is practically a monopoly.</p>

      <h2>Cloud, IaaS and the Acronym Soup</h2>

      <p>For anyone studying System Design (not Design System — my ex-frontend developer brain still glitches on that one sometimes!), Nginx shines when we talk about Load Balancing and DevOps.</p>

      <p>The point is that many developers today have been coding for years and never needed to touch an Nginx. Why? Because the market has heavily abstracted infrastructure. We basically have three major service layers:</p>

      <p><strong>SaaS (Software as a Service):</strong> The most "family friendly" — ready for the end user.</p>

      <p><strong>PaaS (Platform as a Service):</strong> Where most devs live. Vercel, Render, Heroku... You push the code there and they handle the magic infrastructure behind it.</p>

      <p><strong>IaaS (Infrastructure as a Service):</strong> Here things get serious. You rent raw infrastructure and you are the DevOps.</p>

      <p>To use Nginx for real, we need to go down to IaaS. We need a VPS (Virtual Private Server), which is just a fancy name for "rented computer" (by the way, who was the genius who decided to call someone else's computer "The Cloud"?). You go to AWS, Azure or that famous German one, Hetzner, and rent a machine.</p>

      <p><em>Market note: people used to talk a lot about GCP (Google Cloud Platform), but job listings nowadays seem massively split between AWS and Azure. For my labs, I should focus on Azure or just do everything locally using Docker.</em></p>

      <h2>The Anatomy of a Request: Servers, Proxies and App Servers</h2>

      <p>Let's imagine my application has grown. I can't have a single container running my site, or it will crash. I need clones — replicas running my API. How does the user access this? This is where the architecture splits into several roles. Check out this flowchart I put together to illustrate exactly the lifecycle of a request:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.fluxRequest} alt="Web request flow going through Nginx, Reverse Proxy and App Servers" />

      <p><strong>The Physical Server (The VPS):</strong> The actual computer we rented.</p>

      <p><strong>The Web Server (Nginx):</strong> Sits in an isolated container, right at the front, taking the internet's beating. It doesn't understand Python code, doesn't know what a variable is and doesn't read databases. It only receives packets and delivers packets. In it, we configure the Reverse Proxy and Load Balancing.</p>

      <p><strong>The App Server (Uvicorn, in Python's case):</strong> Sits inside each of our API containers. It's the translator. It receives the clean request from Nginx and says: "Python, run this function here and give me the response."</p>

      <p>Nginx stays on the front line distributing the load. And the coolest part: this simple architecture of putting Nginx in front is already the first major line of defense against the famous DDoS (Denial of Service) attacks.</p>

      <h2>When Do I Actually Need Nginx? (The Scale of 1 to 5)</h2>

      <p>Many people think Load Balancing and Nginx are only for Netflix. But the internet has well-defined "power levels":</p>

      <p><strong>Category 1 — The Ghost Project (Hobby/Portfolio):</strong> 0 to 1,000 visits per month. A tiny machine (or Vercel/Render). Everything runs in the same box (Web Server, App, Database). Cost: $0 to $10/month.</p>

      <p><strong>Category 2 — The Neighborhood Bakery (Early SaaS):</strong> The business is validated and making money. 1k to 50k visits per day. Two to four machines. The database moves off the main server. Nginx already appears here in front splitting the load between two or three app servers. Cost: $50 to $300/month.</p>

      <p><strong>Category 3 — Startup in Traction (National App):</strong> Brutal access peaks (e.g., Ifood at lunch). Millions of requests per day. Fixed servers die and Auto Scaling kicks in (the cloud spins machines up and down automatically). We start using Queues (RabbitMQ/SQS), in-memory Cache (Redis), and Load Balancing is handled by the cloud itself (AWS ALB). Cost: $2k to $15k/month.</p>

      <p><strong>Category 4 — The Unicorn (Giants like Nubank/Uber):</strong> The system cannot go down or it makes the news. Billions of requests. Microservices architecture kicks in (login runs on 50 servers, payments on another 50). Relational databases start struggling, NoSQL (DynamoDB, Cassandra) and heavy messaging (Kafka) enter the picture. Cost: $100k to $1M/month.</p>

      <p><strong>Category 5 — The Titans (Google, Meta, Netflix):</strong> Physical frontier. The problem isn't software, it's the speed of light in submarine cables. They barely use off-the-shelf anything. They have servers inside your local ISP (Edge Computing) and synchronize databases with atomic clocks. Cost: Hundreds of millions.</p>

      <h2>The Practical Lab (Getting Your Hands Dirty)</h2>

      <p>To avoid credit card charges from cloud load testing, I set up the lab 100% locally with Docker Compose. The architecture looks like this:</p>

      <p>3 replica containers of my API (FastAPI + Uvicorn). 1 Nginx container in front acting as Reverse Proxy and Load Balancer. Prometheus + Grafana for monitoring. Locust for stress testing (hammering the requests).</p>

      <h3>Monitoring: The cAdvisor Secret</h3>

      <p>Grafana by default doesn't show how much RAM and CPU your containers are using. For that, we need a Google tool called cAdvisor (Container Advisor). It's an agent, written in Go, that keeps spying on the temperature (CPU/RAM) of all containers and formats that for Prometheus to read.</p>

      <p>I discovered that containers don't have their own limits by default; their limit is the bottleneck of your physical machine. Check out the dashboard I built. You can see that my test API has very low consumption (around 40MB of RAM per container), even consuming part of the 12 cores of the machine. Having this view in Grafana is amazing:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.grafana} alt="Grafana dashboard with cAdvisor showing CPU and RAM per container" />

      <h3>Stress Testing with Locust (The Ramp Up Concept)</h3>

      <p>Locust has two main settings: the total number of users (the load ceiling) and the Ramp Up. Ramp Up is the climb rate: how many users enter per second. The higher the Ramp Up, the more abrupt the hit — because the full load is reached very quickly.</p>

      <p>For the tests, I set up a solid load with a controlled ramp:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.locust} alt="Locust interface configuring the load test with Ramp Up" />

      <p>Choosing a lower Ramp Up (ramping up gradually) is great for creating a long stress curve, giving you time to see in Grafana the exact second when the server starts to struggle and bottleneck.</p>

      <h3>The Magic of P95 Latency</h3>

      <p>In Grafana, the gold metric isn't "Average Latency" — it's P95 (95th Percentile). It shows the response time that 95% of users experienced. We use this because the Average is a liar: if 99 clients load the site in 10ms, but 1 client loses their 3G signal in a tunnel and takes 5 seconds, the average drags everyone's time upward. P95 cuts the 5% of "unlucky outliers" and shows you your server's reality in a clean way. Performance-obsessed companies use P99.</p>

      <p>In my Load Balancer-focused dashboard, requests are perfectly split across the 3 APIs, and P95 latency stays super healthy:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.grafanaBasic} alt="Grafana dashboard showing requests split across 3 APIs and P95 latency" />

      <h2>What About Kubernetes?</h2>

      <p>K8s is state-of-the-art for Category 3+ companies. Instead of configuring server by server, K8s is the "brain" that manages hundreds of grouped VPSs and does self-healing (if the machine catches fire, it spins the container up on another one). It's complex and heavy (uses about 2GB of RAM just to exist). For small and medium projects, Docker Compose handles it masterfully.</p>

      <h2>Dissecting nginx.conf</h2>

      <p>To prove that Nginx isn't a seven-headed monster, look at how clean the actual Load Balance and Reverse Proxy configuration is:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.configNginx} alt="nginx.conf file with upstream, load balance and reverse proxy configuration" />

      <p>Here's the exact visual translation of what that block of code is doing:</p>

      <PostImage src={BLOG_IMAGES.nginxLoadBalancer.loadBalancerReverseProxy} alt="Visual diagram explaining how nginx.conf maps to the Load Balancer and Reverse Proxy" />

      <p>The <code>upstream</code> block creates a group with our APIs. <code>least_conn</code> is the smart distribution algorithm: it sends the next request to whichever API is least busy — better than <code>round_robin</code> which just distributes in circles, or <code>ip_hash</code> which locks users to the same machine. The names <code>api-1</code>, etc., are resolved by Docker's own internal DNS.</p>

      <p>The <code>server</code> block is the Web Server itself, listening on port 80. <code>proxy_pass</code> is the magic: it takes what arrived and throws it to our API group above. The client only sees Nginx and has no idea there are 3 APIs behind it.</p>

      <p>Those <code>proxy_set_header</code> lines are vital. Without them, the API would think the request came from Nginx's own IP. These headers ensure the real client IP reaches the back-end for proper logging and authentication.</p>

      <h2>Conclusion: Is Nginx a Web Server or a Reverse Proxy?</h2>

      <p>A common question: "If the Reverse Proxy is already the safer Web Server, I just use that, right?" It depends! Nginx is Fullstack. It can act in three ways on the same machine:</p>

      <p><strong>Web Server only:</strong> For a static HTML/CSS blog. Use the <code>root /folder</code> directive in <code>location</code>. It delivers files from the hard drive at the speed of light.</p>

      <p><strong>Reverse Proxy only:</strong> Our lab above. Nginx acts only as the shield/router forwarding traffic to Python to process.</p>

      <p><strong>Hybrid (The real Fullstack scenario):</strong> In the same <code>nginx.conf</code>, you can have a <code>location /</code> serving your React front-end static files, and a <code>location /api/</code> doing <code>proxy_pass</code> to your FastAPI back-end.</p>

      <p>At the end of the day, seeing that Grafana request graph perfectly splitting the traffic lines across my three containers was like watching the gears of a colossal machine running in perfect sync. Learning to orchestrate all of this isn't just writing lines of code — it's understanding how our application comes to life, resists chaos, and scales to face the real world. It's venturing into new territory where you stop being just the builder of a single piece and become the architect of the entire ecosystem.</p>

      <p>And bring on the next challenges! RabbitMQ and Kafka are already in my sights.</p>
    </>
  ),
}

export default function NginxLoadBalancer() {
  const { lang } = useLang()
  return (
    <>
      <style>{`
        .post-body p { margin-bottom: 1.6rem; }
        .post-body h2 {
          font-family: var(--font-cyber);
          font-size: 22px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.01em;
          margin: 2.8rem 0 1rem;
          line-height: 1.25;
        }
        .post-body h3 {
          font-family: var(--font-cyber);
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
          margin: 2rem 0 0.8rem;
        }
        .post-body strong { color: var(--text); }
        .post-body em { color: var(--text3); }
        .post-body code {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--blue);
          background: color-mix(in srgb, var(--blue) 10%, transparent);
          padding: 1px 6px;
          border-radius: 4px;
        }
      `}</style>
      <div className="post-body" style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.95, textAlign: 'justify' }}>
        {content[lang]}
      </div>
    </>
  )
}
