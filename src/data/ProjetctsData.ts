import img1 from '../assets/IMG/checklist.png';
import img2 from '../assets/IMG/costs.png';
import img3 from '../assets/IMG/condoshop.png';

export const projectsData = [
    {
        id: 1,
        title: "CheckList de Viagem Inteligente",
        description: "Um aplicativo web criado para facilitar a organização de viagens de forma prática e personalizada. O usuário pode gerar múltiplos checklists, adicionar itens manualmente ou selecionar sugestões automáticas baseadas no clima e no destino pesquisado. Cada checklist também permite anotações personalizadas, garantindo que nenhum detalhe seja esquecido. O projeto reforça meus conhecimentos em lógica, estados globais, componentização e interação dinâmica com APIs.",
        github: 'https://github.com/RoberthVieira/Checklist-Viagem-Inteligente',
        demo: 'https://checklist-viagem-inteligente-tc94.vercel.app/',
        img: img1
    },
    {
        id: 2,
        title: 'Costs',
        description: 'Uma aplicação focada no gerenciamento de projetos e controle financeiro. Permite cadastrar projetos, definir orçamentos, adicionar serviços e acompanhar gastos em tempo real. Durante o desenvolvimento, aprofundei conceitos de formulários, navegação entre rotas, gerenciamento de estado e estruturação de aplicações front-end com foco em usabilidade e clareza.',
        github: 'https://github.com/RoberthVieira/Costs',
        demo: 'https://costs-ivory.vercel.app/',
        img: img2
    },
    {
        id: 3,
        title: 'CondoShop',
        description: 'CondoShop é um e-commerce fictício desenvolvido com React + TypeScript, criado para treinar boas práticas de componentização e arquitetura front-end. O projeto utiliza React Router para navegação, formulários validados com Zod e React Hook Form, além de estilização totalmente responsiva com TailwindCSS. Foi um dos meus projetos mais completos para consolidar rotas, validação e construção de interfaces modernas e escaláveis.',
        github: 'https://github.com/RoberthVieira/condoshop',
        demo: 'https://condoshop.vercel.app/',
        img: img3
    }
]