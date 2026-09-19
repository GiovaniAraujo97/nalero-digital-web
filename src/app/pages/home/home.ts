import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly languageService = inject(LanguageService);
  readonly heroFirstLine = computed(() => Array.from(this.languageService.isEnglish() ? 'Ideas that' : 'Ideias que se'));
  readonly heroSecondLine = computed(() => Array.from(this.languageService.isEnglish() ? 'become ' : 'tornam '));
  readonly heroAccent = computed(() => Array.from(this.languageService.isEnglish() ? 'presence.' : 'presença.'));

  readonly differentiators = computed(() => this.languageService.isEnglish() ? [
    { title: 'Code quality', text: 'Solid, scalable structures that are easy to evolve.' },
    { title: 'Performance', text: 'Fast experiences that respect your audience time.' },
    { title: 'Technical SEO', text: 'Every page prepared to be found and understood.' },
    { title: 'Security', text: 'Best practices from the first line to the final delivery.' },
    { title: 'Close support', text: 'A team that stays with your business after launch.' },
  ] : [
    { title: 'Qualidade de código', text: 'Estruturas sólidas, escaláveis e fáceis de evoluir.' },
    { title: 'Performance', text: 'Experiências ágeis que respeitam o tempo de quem acessa.' },
    { title: 'SEO técnico', text: 'Cada página preparada para ser encontrada e entendida.' },
    { title: 'Segurança', text: 'Boas práticas desde a primeira linha até a entrega.' },
    { title: 'Suporte próximo', text: 'Uma equipe que acompanha o seu negócio depois do lançamento.' },
  ]);

  readonly services = computed(() => this.languageService.isEnglish() ? [
    { category: 'Brand', title: 'An identity that leaves a mark.', items: ['Brand creation', 'Logo design'] },
    { category: 'Websites', title: 'Your business in the right place.', items: ['Institutional websites', 'Landing pages', 'Online stores'] },
    { category: 'Platforms', title: 'Experiences built to grow.', items: ['E-learning platforms', 'News portals', 'Event websites'] },
    { category: 'Performance', title: 'Technology without friction.', items: ['Technical audit', 'Performance optimization', 'Technical SEO'] },
  ] : [
    { category: 'Marca', title: 'Identidade que deixa marca.', items: ['Criação de marcas', 'Criação de logotipo'] },
    { category: 'Websites', title: 'Seu negócio no lugar certo.', items: ['Sites institucionais', 'Landing pages', 'Lojas virtuais'] },
    { category: 'Plataformas', title: 'Experiências feitas para crescer.', items: ['Plataformas EAD', 'Portais de notícias', 'Sites para eventos'] },
    { category: 'Performance', title: 'Tecnologia sem atrito.', items: ['Auditoria técnica', 'Otimização de performance', 'SEO técnico'] },
  ]);

  readonly process = computed(() => this.languageService.isEnglish()
    ? ['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Delivery']
    : ['Descoberta', 'Planejamento', 'Design', 'Desenvolvimento', 'Testes', 'Entrega']);

  readonly projects = computed(() => this.languageService.isEnglish() ? [
    { number: '01', category: 'Website / Business', title: 'RER Paletes', url: 'https://rer-paletes.vercel.app/', theme: 'project-yellow', shape: 'shape-one', image: '/portfolio-rerpaletes.png' },
    { number: '02', category: 'Website / Rentals', title: 'JMM Locacoes', url: 'https://jmm-locacoes.vercel.app/', theme: 'project-dark', shape: 'shape-two', image: '/portfolio-jmm-locacoes.png' },
    { number: '03', category: 'Website / Health', title: 'Dra. Alessandra Lemes', url: 'https://draalessandralemes.vercel.app/', theme: 'project-gray', shape: 'shape-three', image: '/portfolio-draalelemes.png' },
    { number: '04', category: 'Website / Gastronomy', title: 'Big Mike Fritas', url: 'https://bigmike-fritas-p2dn.vercel.app/', theme: 'project-yellow', shape: 'shape-one', image: '/portfolio-bigmikebatatas.png' },
  ] : [
    { number: '01', category: 'Website / Negócio', title: 'RER Paletes', url: 'https://rer-paletes.vercel.app/', theme: 'project-yellow', shape: 'shape-one', image: '/portfolio-rerpaletes.png' },
    { number: '02', category: 'Website / Locações', title: 'JMM Locações', url: 'https://jmm-locacoes.vercel.app/', theme: 'project-dark', shape: 'shape-two', image: '/portfolio-jmm-locacoes.png' },
    { number: '03', category: 'Website / Saúde', title: 'Dra. Alessandra Lemes', url: 'https://draalessandralemes.vercel.app/', theme: 'project-gray', shape: 'shape-three', image: '/portfolio-draalelemes.png' },
    { number: '04', category: 'Website / Gastronomia', title: 'Big Mike Fritas', url: 'https://bigmike-fritas-p2dn.vercel.app/', theme: 'project-yellow', shape: 'shape-one', image: '/portfolio-bigmikebatatas.png' },
  ]);

  readonly teamMembers = computed(() => this.languageService.isEnglish() ? [
    {
      name: 'Giovani Araujo',
      role: 'CEO',
      specialty: 'Front Specialist',
      description: 'Leads the strategic direction of the brand and creates the digital experience from the first idea to final execution.',
      initials: 'GA',
      image: '/img-giovani.png',
    },
    {
      name: 'Cosme de Assis',
      role: 'CTO',
      specialty: 'Quality of Software Specialist',
      description: 'Shapes the technical quality standard, validates the process and ensures every delivery is stable, clean and scalable.',
      initials: 'CA',
      image: '/img-cosme.jpg',
    },
  ] : [
    {
      name: 'Giovani Araujo',
      role: 'CEO',
      specialty: 'Especialista em Engenharia de Software',
      initials: 'GA',
      image: '/img-giovani.png',
    },
    {
      name: 'Cosme de Assis',
      role: 'CTO',
      specialty: 'Especialista em Qualidade de Software',
      initials: 'CA',
      image: '/img-cosme.jpg',
    },
  ]);
}
