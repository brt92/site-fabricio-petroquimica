import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Page } from './types';
import { SERVICES, COMPANY_INFO, Icons } from './constants';

// Definição dos caminhos das imagens como strings
// Certifique-se que a pasta 'assets' está na raiz do projeto
const fachadaPrincipal = '/assets/fachada-principal.jpg';
const recepcaoImg = '/assets/recepcao.jpg';
const fachadaLateral = '/assets/fachada-lateral.jpg';
const interiorImg = '/assets/interior.jpg';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const handleContactClick = () => {
    setCurrentPage(Page.CONTACT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Page Components ---

  const HeroSection = () => (
    <div className="relative bg-fabricio-dark h-[600px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: `url(${fachadaPrincipal})`, 
          filter: 'brightness(0.35)' 
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-fabricio-blue/80 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block bg-fabricio-yellow text-fabricio-blue font-bold px-3 py-1 mb-6 text-sm tracking-wide rounded-sm">
            INOVAÇÃO EM PLÁSTICOS
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Referência em Micronização e Beneficiamento de Plásticos
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl">
            Tecnologia, qualidade e sustentabilidade no fornecimento de matéria-prima no coração do III Polo Petroquímico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
                onClick={() => setCurrentPage(Page.ABOUT)}
                className="bg-fabricio-yellow text-fabricio-blue px-8 py-4 rounded font-bold text-lg hover:bg-white transition-colors shadow-lg"
            >
              Conheça a Empresa
            </button>
            <button 
                onClick={handleContactClick}
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-fabricio-blue transition-colors shadow-lg"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const HomeAboutSection = () => (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative group">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-fabricio-yellow rounded-tl-3xl -z-10 transition-transform group-hover:scale-110"></div>
                <img 
                    src={recepcaoImg} 
                    alt="Recepção Fabrício Petroquímica" 
                    className="rounded-xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-fabricio-blue/10 rounded-br-3xl -z-10 transition-transform group-hover:scale-110"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-fabricio-blue text-sm font-bold tracking-widest uppercase mb-2">Sobre a Empresa</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Excelência no III Polo Petroquímico</h3>
            <div className="w-20 h-1 bg-fabricio-yellow mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Fabrício Indústria Petroquímica é uma empresa moderna localizada junto ao III Polo Petroquímico, em Triunfo-RS. Com 6.000 m² de área construída, atuamos com excelência na recuperação, micronização e industrialização de plásticos pós-indústria.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Nosso diferencial está na tecnologia, na qualidade dos processos, no laboratório próprio e no compromisso com a economia circular, transformando resíduos em soluções de valor.
            </p>
            <button onClick={() => setCurrentPage(Page.ABOUT)} className="text-fabricio-blue font-bold hover:text-fabricio-yellow transition-colors flex items-center group">
                Saiba mais sobre nós <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const HomeServicesSection = () => (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-fabricio-blue font-bold uppercase tracking-wider text-sm">O que fazemos</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Nossas Soluções</h2>
            <div className="w-16 h-1 bg-fabricio-yellow mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-fabricio-blue group">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-fabricio-blue mb-6 group-hover:bg-fabricio-blue group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <button onClick={() => setCurrentPage(Page.SERVICES)} className="text-sm font-bold text-fabricio-blue hover:text-blue-800">
                  Ver detalhes →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const HomeQualitySection = () => (
    <div className="py-20 bg-fabricio-blue text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <Icons.Factory /> {/* Placeholder for large bg icon */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-6">Qualidade e Infraestrutura de Ponta</h2>
                <p className="text-blue-100 text-lg mb-8">
                    Garantimos a excelência de nossos produtos através de um rigoroso controle de qualidade e uma estrutura industrial completa de 6.000m².
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <div className="bg-fabricio-yellow p-1 rounded-full mr-3 text-fabricio-blue"><Icons.Check /></div>
                        <span className="font-medium">Laboratório completo para testes mecânicos e físico-químicos</span>
                    </li>
                    <li className="flex items-center">
                        <div className="bg-fabricio-yellow p-1 rounded-full mr-3 text-fabricio-blue"><Icons.Check /></div>
                        <span className="font-medium">Frota própria garantindo agilidade logística</span>
                    </li>
                    <li className="flex items-center">
                        <div className="bg-fabricio-yellow p-1 rounded-full mr-3 text-fabricio-blue"><Icons.Check /></div>
                        <span className="font-medium">Rigoroso Sistema de Gestão da Qualidade</span>
                    </li>
                    <li className="flex items-center">
                        <div className="bg-fabricio-yellow p-1 rounded-full mr-3 text-fabricio-blue"><Icons.Check /></div>
                        <span className="font-medium">Equipe técnica altamente especializada</span>
                    </li>
                </ul>
                <button onClick={() => setCurrentPage(Page.QUALITY)} className="mt-10 bg-white text-fabricio-blue px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                    Conheça Nossa Estrutura
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src={fachadaLateral} alt="Fachada Lateral" className="rounded-lg shadow-lg transform translate-y-4 w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                <img src="https://picsum.photos/seed/truck1/400/300" alt="Logística" className="rounded-lg shadow-lg transform -translate-y-4 w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                <img src="https://picsum.photos/seed/lab1/400/300" alt="Laboratório" className="rounded-lg shadow-lg transform translate-y-4 w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                <img src={interiorImg} alt="Interior" className="rounded-lg shadow-lg transform -translate-y-4 w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
        </div>
      </div>
    </div>
  );

  const HomeEnvironmentalSection = () => (
    <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <Icons.Recycle />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compromisso Ambiental</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                A Fabrício Indústria Petroquímica está comprometida com a economia circular. 
                Transformamos resíduos pós-indústria em novos recursos, reduzindo o impacto ambiental 
                e promovendo a sustentabilidade na cadeia produtiva do plástico.
            </p>
        </div>
    </div>
  );

  const QuickContactSection = () => (
      <div className="bg-gray-900 py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-3xl font-bold mb-4">Fale Conosco</h2>
                      <p className="text-gray-400 mb-8">
                          Tem alguma dúvida ou precisa de um orçamento? Preencha o formulário ao lado e nossa equipe entrará em contato rapidamente.
                      </p>
                      <div className="flex items-center space-x-4 text-gray-300 mb-2">
                        <span>{COMPANY_INFO.phone}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-300">
                        <span>{COMPANY_INFO.email}</span>
                      </div>
                  </div>
                  <form className="bg-white p-6 rounded-lg shadow-xl text-gray-800" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="Nome" className="w-full bg-white text-gray-900 border border-gray-300 p-3 rounded focus:ring-2 focus:ring-fabricio-blue focus:outline-none" />
                        <input type="text" placeholder="Empresa" className="w-full bg-white text-gray-900 border border-gray-300 p-3 rounded focus:ring-2 focus:ring-fabricio-blue focus:outline-none" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="tel" placeholder="Telefone" className="w-full bg-white text-gray-900 border border-gray-300 p-3 rounded focus:ring-2 focus:ring-fabricio-blue focus:outline-none" />
                        <input type="email" placeholder="E-mail" className="w-full bg-white text-gray-900 border border-gray-300 p-3 rounded focus:ring-2 focus:ring-fabricio-blue focus:outline-none" />
                      </div>
                      <textarea rows={4} placeholder="Mensagem" className="w-full bg-white text-gray-900 border border-gray-300 p-3 rounded mb-4 focus:ring-2 focus:ring-fabricio-blue focus:outline-none"></textarea>
                      <button className="w-full bg-fabricio-blue text-white font-bold py-3 rounded hover:bg-blue-900 transition-colors">
                          Enviar Mensagem
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

  // --- About Page ---

  const AboutPage = () => (
      <div className="bg-white">
          <div className="relative bg-fabricio-dark py-24 text-center text-white overflow-hidden">
             {/* Background Image for Page Header */}
             <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${fachadaLateral})`, 
                  filter: 'blur(2px) brightness(0.3)' 
                }}
             />
             <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4">Sobre a Empresa</h1>
                <p className="text-xl text-gray-200">Conheça nossa história e valores</p>
             </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="prose max-w-none text-gray-600">
                  <div className="flex flex-col md:flex-row gap-12 mb-12">
                      <div className="md:w-1/2">
                          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
                          <p className="text-lg leading-relaxed">
                              {COMPANY_INFO.history}
                          </p>
                          <p className="text-lg leading-relaxed mt-4">
                              Fundada em 2013, consolidamos nossa posição no mercado através de investimentos constantes em tecnologia e capacitação, sempre focados em oferecer o melhor para o setor plástico.
                          </p>
                      </div>
                      <div className="md:w-1/2">
                           <img src={fachadaPrincipal} alt="Fachada Fabrício Petroquímica" className="rounded-xl shadow-lg w-full h-80 object-cover" />
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                      <div className="bg-blue-50 p-8 rounded-xl border-t-4 border-fabricio-blue shadow-sm hover:-translate-y-1 transition-transform">
                          <h3 className="text-xl font-bold text-fabricio-blue mb-4">Missão</h3>
                          <p>Fornecer matéria-prima plástica reciclada de alta qualidade, com inovação, responsabilidade técnica e compromisso ambiental.</p>
                      </div>
                      <div className="bg-blue-50 p-8 rounded-xl border-t-4 border-fabricio-blue shadow-sm hover:-translate-y-1 transition-transform">
                          <h3 className="text-xl font-bold text-fabricio-blue mb-4">Visão</h3>
                          <p>Ser referência nacional em micronização e beneficiamento de plásticos pós-indústria.</p>
                      </div>
                      <div className="bg-blue-50 p-8 rounded-xl border-t-4 border-fabricio-blue shadow-sm hover:-translate-y-1 transition-transform">
                          <h3 className="text-xl font-bold text-fabricio-blue mb-4">Valores</h3>
                          <ul className="list-disc pl-5 space-y-2">
                              <li>Qualidade</li>
                              <li>Segurança</li>
                              <li>Sustentabilidade</li>
                              <li>Ética e transparência</li>
                              <li>Melhoria contínua</li>
                          </ul>
                      </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Diferenciais</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <ul className="space-y-3">
                          <li className="flex items-center"><div className="text-fabricio-blue mr-2"><Icons.Check /></div><span className="ml-2">Laboratório próprio para testes</span></li>
                          <li className="flex items-center"><div className="text-fabricio-blue mr-2"><Icons.Check /></div><span className="ml-2">Frota própria para logística</span></li>
                          <li className="flex items-center"><div className="text-fabricio-blue mr-2"><Icons.Check /></div><span className="ml-2">Equipe altamente capacitada</span></li>
                      </ul>
                      <ul className="space-y-3">
                          <li className="flex items-center"><div className="text-fabricio-blue mr-2"><Icons.Check /></div><span className="ml-2">Padrões rigorosos de qualidade</span></li>
                          <li className="flex items-center"><div className="text-fabricio-blue mr-2"><Icons.Check /></div><span className="ml-2">Localização privilegiada (III Polo)</span></li>
                          <li className="flex items-center"><div className="text-fabricio-blue mr-2"><Icons.Check /></div><span className="ml-2">Alta capacidade produtiva</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );

  // --- Services Page ---

  const ServicesPage = () => (
      <div className="bg-white">
        <div className="bg-fabricio-blue py-20 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Serviços e Produtos</h1>
            <p className="text-xl text-blue-200">Soluções completas para a indústria plástica</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <img src="https://picsum.photos/seed/powder/600/400" alt="Micronização" className="rounded-lg shadow-xl w-full" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-fabricio-blue mb-4">Micronização de Plásticos</h2>
                    <div className="w-12 h-1 bg-fabricio-yellow mb-6"></div>
                    <p className="text-gray-600 text-lg mb-6">
                        Transformação de materiais plásticos em pós finos de alta qualidade. Nosso processo garante alta precisão granulométrica e padronização, essenciais para aplicações exigentes como a rotomoldagem.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Controle rigoroso de granulometria</li>
                        <li>• Alta fluidez do material</li>
                        <li>• Adaptação às necessidades do cliente</li>
                    </ul>
                </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="md:w-1/2">
                    <img src="https://picsum.photos/seed/recyclebin/600/400" alt="Recuperação" className="rounded-lg shadow-xl w-full" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-fabricio-blue mb-4">Recuperação Pós-Indústria</h2>
                    <div className="w-12 h-1 bg-fabricio-yellow mb-6"></div>
                    <p className="text-gray-600 text-lg mb-6">
                        Reprocessamento de resíduos industriais, transformando-os em matéria-prima reutilizável com alto valor técnico. Atuamos na economia circular, devolvendo ao ciclo produtivo materiais que seriam descartados.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Triagem e classificação eficiente</li>
                        <li>• Lavagem e secagem técnica</li>
                        <li>• Extrusão e regranulação</li>
                    </ul>
                </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <img src="https://picsum.photos/seed/molding/600/400" alt="Industrialização" className="rounded-lg shadow-xl w-full" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-fabricio-blue mb-4">Industrialização e Beneficiamento</h2>
                    <div className="w-12 h-1 bg-fabricio-yellow mb-6"></div>
                    <p className="text-gray-600 text-lg mb-6">
                        Produção de insumos customizados para diversos processos de transformação plástica. Desenvolvemos soluções sob medida conforme as especificações técnicas do cliente.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded text-center font-bold text-gray-700 border border-gray-200">Injeção</div>
                        <div className="bg-gray-50 p-4 rounded text-center font-bold text-gray-700 border border-gray-200">Extrusão</div>
                        <div className="bg-gray-50 p-4 rounded text-center font-bold text-gray-700 border border-gray-200">Sopro</div>
                        <div className="bg-gray-50 p-4 rounded text-center font-bold text-gray-700 border border-gray-200">Rotomoldagem</div>
                    </div>
                </div>
            </div>
        </div>
        <QuickContactSection />
      </div>
  );

  // --- Quality Page ---

  const QualityPage = () => (
      <div className="bg-white">
          <div className="bg-gray-900 py-20 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Qualidade e Infraestrutura</h1>
            <p className="text-xl text-gray-400">Tecnologia e processos para garantir o melhor produto</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Laboratory */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-fabricio-blue mb-8 text-center">Laboratório Próprio</h2>
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 border border-gray-100">
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-lg text-gray-700">
                            Nosso laboratório é equipado para realizar uma bateria completa de testes, garantindo a integridade, padronização e reprodutibilidade dos materiais.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="mt-1 bg-green-500 rounded-full p-1.5 mr-3 flex-shrink-0"></div>
                                <div>
                                    <span className="font-bold text-gray-900 block">Ensaios Mecânicos</span>
                                    <span className="text-gray-600">Resistência, impacto e tração.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 bg-green-500 rounded-full p-1.5 mr-3 flex-shrink-0"></div>
                                <div>
                                    <span className="font-bold text-gray-900 block">Ensaios Físico-Químicos</span>
                                    <span className="text-gray-600">Densidade, fluidez (MFI) e umidade.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 bg-green-500 rounded-full p-1.5 mr-3 flex-shrink-0"></div>
                                <div>
                                    <span className="font-bold text-gray-900 block">Controle de Granulometria</span>
                                    <span className="text-gray-600">Precisão absoluta para pós micronizados.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://picsum.photos/seed/science/600/400" alt="Laboratório" className="rounded-xl shadow-md w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Infrastructure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-fabricio-yellow mb-4"><Icons.Factory /></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Estrutura Industrial</h3>
                    <p className="text-gray-600 mb-4">
                        Contamos com <strong className="text-fabricio-blue">6.000 m² de área construída</strong>, abrigando maquinário moderno e processos otimizados.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li>• Armazenamento técnico e seguro</li>
                        <li>• Linhas de produção dedicadas</li>
                        <li>• Layout focado em eficiência</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-fabricio-yellow mb-4"><Icons.Truck /></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Logística e Frota</h3>
                    <p className="text-gray-600 mb-4">
                        Possuímos <strong className="text-fabricio-blue">frota própria</strong>, o que nos permite agilidade na coleta de resíduos e na entrega de produtos finais.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li>• Transporte seguro e monitorado</li>
                        <li>• Cumprimento rigoroso de prazos</li>
                        <li>• Flexibilidade logística</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  );

  // --- Contact Page ---

  const ContactPage = () => (
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-fabricio-blue py-16 text-center text-white">
            <h1 className="text-4xl font-bold">Fale Conosco</h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Info Card */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-fabricio-blue">
                        <h3 className="text-xl font-bold text-fabricio-blue mb-4">Informações de Contato</h3>
                        <div className="space-y-4 text-gray-600">
                            <p><strong>Endereço:</strong><br/>{COMPANY_INFO.address}</p>
                            <p><strong>CEP:</strong> {COMPANY_INFO.cep}</p>
                            <p><strong>Telefone:</strong><br/>{COMPANY_INFO.phone}</p>
                            <p><strong>E-mail:</strong><br/>{COMPANY_INFO.email}</p>
                            <p><strong>Horário:</strong><br/>{COMPANY_INFO.hours}</p>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                    <input type="text" className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-fabricio-blue focus:border-fabricio-blue outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                                    <input type="text" className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-fabricio-blue focus:border-fabricio-blue outline-none transition-all" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                    <input type="email" className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-fabricio-blue focus:border-fabricio-blue outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                    <input type="tel" className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-fabricio-blue focus:border-fabricio-blue outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                                <select className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-fabricio-blue focus:border-fabricio-blue outline-none transition-all">
                                    <option>Orçamento</option>
                                    <option>Dúvida Técnica</option>
                                    <option>Parceria</option>
                                    <option>Outros</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                                <textarea rows={5} className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-fabricio-blue focus:border-fabricio-blue outline-none transition-all"></textarea>
                            </div>
                            <button className="bg-fabricio-blue text-white font-bold py-3 px-8 rounded hover:bg-blue-900 transition-colors shadow-lg">
                                Enviar Contato
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="mt-12 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 px-2">Nossa Localização</h3>
                <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden relative">
                     {/* Placeholder for Google Map iframe */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.366272769756!2d-51.3978!3d-29.9375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU2JzE1LjAiUyA1McKwMjMnNTIuMSJX!5e0!3m2!1sen!2sbr!4v1635789000000!5m2!1sen!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy"
                        title="Mapa de Localização"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
  );

  return (
    <div className="min-h-screen flex flex-col pt-20 font-sans">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === Page.HOME && (
            <>
                <HeroSection />
                <HomeAboutSection />
                <HomeServicesSection />
                <HomeQualitySection />
                <HomeEnvironmentalSection />
                <QuickContactSection />
            </>
        )}
        {currentPage === Page.ABOUT && <AboutPage />}
        {currentPage === Page.SERVICES && <ServicesPage />}
        {currentPage === Page.QUALITY && <QualityPage />}
        {currentPage === Page.CONTACT && <ContactPage />}
      </main>

      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;