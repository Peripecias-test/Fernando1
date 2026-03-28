/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Zap, 
  Settings, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Activity,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

const WHATSAPP_LINK = "https://wa.me/5511975416833?text=Olá%2C%20gostaria%20de%20um%20orçamento!";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: isHome ? '#' : '/' },
    { name: 'Sobre', href: isHome ? '#sobre' : '/#sobre' },
    { name: 'Serviços', href: isHome ? '#servicos' : '/#servicos' },
    { name: 'Fornecedores', href: isHome ? '#fornecedores' : '/#fornecedores' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Contato', href: isHome ? '#contato' : '/#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src={scrolled || !isHome ? "https://lh3.googleusercontent.com/d/1kKDpIoP3DaVf9JgE7L1LO7NlRfD6MVDa" : "https://lh3.googleusercontent.com/d/1A230k5kHxz0uDxii-PnYf1iM5rBQajpl"} 
              alt="Nexxor Controle e Automação" 
              className={`${(scrolled && isHome) ? 'h-20 sm:h-24 md:h-32' : 'h-16 sm:h-20 md:h-28'} w-auto object-contain transition-all duration-300`}
              referrerPolicy="no-referrer"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') || (link.href.startsWith('/') && link.href.includes('#')) ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      scrolled || !isHome ? 'text-gray-700 hover:text-blue-900' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      scrolled || !isHome ? 'text-gray-700 hover:text-blue-900' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
              >
                Orçamento
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled || !isHome ? 'text-blue-900' : 'text-white'
              } hover:bg-white/10 focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                link.href.startsWith('#') || (link.href.startsWith('/') && link.href.includes('#')) ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-500 text-white px-3 py-3 rounded-md text-base font-bold mt-4"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
          alt="Industrial Automation"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
            Especialistas em Painéis Elétricos
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 font-display">
            Especialista em <span className="text-orange-500">Automação Industrial,</span> <span className="text-white">painéis elétricos e infraestrutura elétrica</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-10 leading-relaxed font-sans">
            Nossos serviços têm o objetivo de seguir as normas técnicas e padrões de segurança, atuando diretamente em adequação NR12, infraestrutura elétrica industrial e todo o processo de Automação Industrial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/20"
            >
              Faça um orçamento
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold transition-all text-center"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-sm border-t border-white/10 py-4 hidden xl:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {[
            { label: 'Anos de Experiência', value: '+12' },
            { label: '100% no local', value: 'Projetos Executados' },
            { label: 'Excelência', value: 'Foco em' },
            { label: 'Personalizado', value: 'Atendimento' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-orange-500 text-2xl font-bold font-display">{stat.value}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-4 font-sans">Sobre a Nexxor Controle e Automação</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
              Especializada em soluções elétricas e automação para o setor industrial.
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-sans">
              Atuamos no desenvolvimento de projetos elétricos, montagem de painéis de comando e automação de processos, sempre com foco em qualidade, segurança e eficiência. Nosso trabalho é baseado em experiência técnica, organização e compromisso em entregar soluções confiáveis e de alto desempenho para cada cliente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: '+12 anos', desc: 'de experiência técnica acumulada' },
                { title: 'Projetos elétricos', desc: 'de acordo com a normas vigentes' },
                { title: 'Instalações elétricas', desc: 'com efiência' },
                { title: 'Compromisso', desc: 'com qualidade, prazos e segurança' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 font-display">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/d/1dpBGpZb3GU1cSUltN0ILXyQ_P88aIUfQ"
                alt="Nexxor Controle e Automação Team working"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 text-white p-8 rounded-2xl shadow-xl hidden sm:block overflow-hidden">
              <img 
                src="https://a.1stdibscdn.com/louis-vuitton-illusion-leather-keepall50-for-sale-picture-15/v_4783/v_151991321648224294394/aJVAN8wY_master.jpg?width=768"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-900/40"></div>
              <div className="relative z-10">
                <p className="text-4xl font-bold text-orange-500 mb-1 font-display">2021</p>
                <p className="text-sm uppercase tracking-widest font-medium font-sans">Fundação da Empresa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Suppliers = () => {
  return (
    <section id="fornecedores" className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-2 font-sans">Nossos Parceiros</h2>
          <h3 className="text-2xl font-bold text-gray-900 font-display">Principais Fornecedores</h3>
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-12 flex-wrap">
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <img 
              src="https://tse2.mm.bing.net/th/id/OIP.ZtjeiBK6sTu2IhqEZjxq4AHaFL?rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="WEG Logo" 
              className="h-10 sm:h-14 md:h-20 w-auto transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <img 
              src="https://logos-world.net/wp-content/uploads/2020/11/Siemens-Logo.png" 
              alt="Siemens Logo" 
              className="h-10 sm:h-14 md:h-20 w-auto transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <img 
              src="https://companieslogo.com/img/orig/SU.PA_BIG-8cd10b23.png?t=1648148280" 
              alt="schneider Logo" 
              className="h-10 sm:h-14 md:h-20 w-auto transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <img 
              src="https://skmtech.com.br/wp-content/uploads/2019/11/Altus-Logo-Novo.png" 
              alt="Altus Logo" 
              className="h-10 sm:h-14 md:h-20 w-auto transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <img 
              src="https://vectorseek.com/wp-content/uploads/2023/09/Phoenix-Contact-Logo-Vector.svg-.png" 
              alt="Phoenix Logo" 
              className="h-10 sm:h-14 md:h-20 w-auto transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <img 
              src="https://th.bing.com/th/id/R.81b5fdece0d37ee9632550ac23225be7?rik=RdQi4isyJpSDaQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f03%2fabb_logo.png&ehk=TbDcOOCf1sGqYke8%2f88adthDu5cI7ltARcZPmYVGezw%3d&risl=&pid=ImgRaw&r=0" 
              alt="ABB Logo" 
              className="h-10 sm:h-14 md:h-20 w-auto transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const questions = [
    {
      q: "Sua empresa precisa de mão de obra qualificada?",
      a: "A Nexxor Controle e Automação oferece profissionais qualificados que buscam trabalhar em conjunto com as normas técnicas."
    },
    {
      q: "Quer evitar obras atrasadas e disperdicio de material?",
      a: "Nossas empresa busca trabalhar com planejamento eficiênte, estratégico para alcançar o objetivo de ótima satisfação dos nossos clientes."
    }
  ];
    

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-4 font-sans">Dúvidas Frequentes</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-display">
              Tem dúvidas sobre paineis elétricos ou instalações elétricas?
            </h3>
            <p className="text-gray-600 mb-10 text-lg font-sans">
              A Nexxor Controle e Automação oferece serviços especializados em Automação Industrial, montagem de paineis, projetos elétricos, manutenção e modernização de máquina com maior produtividade, segurança e qualidade.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2"
            >
              Falar com um técnico
              <ChevronRight size={20} />
            </a>
          </motion.div>

          <div className="space-y-6">
            {questions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-display">{item.q}</h4>
                <p className="text-gray-600 font-sans leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Montagem de Estruturas',
      desc: 'Executamos montagens conforme normas exigidas, com validação técnica e foco em segurança e durabilidade.',
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      image: "https://lh3.googleusercontent.com/d/1WE1AkcXCRthZvl56G_zK3FrsH4DXRHl1"
    },
    {
      title: 'Barramento',
      desc: 'Instalação de barramentos elétricos com alta confiabilidade para condução de grandes cargas com eficiência e organização.',
      icon: <Zap className="text-orange-500" size={32} />,
      image: "https://i.imgur.com/pvK0TX5.jpeg"
    },
    {
      title: 'Painel de automação',
      desc: 'Montagem de painel de acordo com as normas NBR.',
      icon: <Settings className="text-orange-500" size={32} />,
      image: "https://i.imgur.com/YBD0Vji.jpeg"
    },
    {
      title: 'Painel de controle de bombas',
      desc: 'Painel elétrico utilizado para ligar, proteger e automatizar o funcionamento de irrigação, estações de bombeamento entre outros.',
      icon: <Layers className="text-orange-500" size={32} />,
      image: "https://i.imgur.com/6p757T4.jpeg"
    },
    {
      title: 'Painel elétrico de distribuição',
      desc: 'Montagem painel elétrico de distribuição, controle e proteção personalizados para ambientes industriais.',
      icon: <Cpu className="text-orange-500" size={32} />,
      image: "https://i.imgur.com/NBaVbDk.jpeg"
    },
    {
      title: 'Painel elétrico NR12',
      desc: 'Conjunto de dispositivo elétrico de comando, Proteção e Segurança instalados em máquina ou sistemas industriais.',
      icon: <Activity className="text-orange-500" size={32} />,
      image: "https://i.imgur.com/dfxWH9i.jpeg"
    },
    {
      title: 'Projetos elétricos',
      desc: 'Conjunto de desenhos elétricos multifilar, lista de materiais, distribuição de circuitos e detalhamento de painéis elétricos.',
      icon: <Activity className="text-orange-500" size={32} />,
      image: "https://hotmart.s3.amazonaws.com/product_pictures/fdff85ae-ba78-42b3-a53a-dff38f00b2c1/EPLAN.PNG"
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-4 font-sans">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
            Desenvolvemos soluções completas em automação industrial que elevam a eficiência produtiva, garantem segurança operacional e contribuem para a sustentabilidade.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-display">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed font-sans">
                  {service.desc}
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 font-bold flex items-center gap-2 hover:text-orange-500 transition-colors font-sans"
                >
                  Saiba mais <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="1" />
          <line x1="200" y1="50" x2="200" y2="350" stroke="white" strokeWidth="1" />
          <line x1="50" y1="200" x2="350" y2="200" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Precisa de um orçamento rápido?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Entre em contato com a Nexxor Controle e Automação e faça seu orçamento conosco.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
          >
            Falar com um Especialista
            <Phone size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/">
              <img 
                src="https://lh3.googleusercontent.com/d/14jG5r0ygxP6GLpK3dM0zA670YGfoE4Hp" 
                alt="Nexxor Controle e Automação" 
                className="h-24 w-auto object-contain mb-6"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Desde 2021 entregando excelência em montagens elétricas industriais e soluções de automação para empresas de alto padrão.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-4">Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/#servicos" className="hover:text-orange-500 transition-colors">Execução de Projetos</a></li>
              <li><a href="/#servicos" className="hover:text-orange-500 transition-colors">Montagem Certificada</a></li>
              <li><a href="/#servicos" className="hover:text-orange-500 transition-colors">Barramento</a></li>
              <li><a href="/#servicos" className="hover:text-orange-500 transition-colors">Cabine Primária</a></li>
              <li><a href="/#servicos" className="hover:text-orange-500 transition-colors">Quadros Elétricos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-4">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Início</Link></li>
              <li><a href="/#sobre" className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
              <li><Link to="/portfolio" className="hover:text-orange-500 transition-colors font-bold text-orange-400">Nosso Trabalho</Link></li>
              <li><a href="/#contato" className="hover:text-orange-500 transition-colors">Contato</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Orçamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-4">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Telefone</p>
                  <p className="font-medium">+55 11 97541-6833</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-400 mb-1">E-mail</p>
                  <p className="font-medium">Femiguel1996@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Localização</p>
                  <p className="font-medium">São Paulo - SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Copyright © 2026 Todos direitos reservados Nexxor Controle e Automação</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
};

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Painéis de Comando Industrial",
      category: "Automação",
      image: "https://i.imgur.com/dfxWH9i.jpeg",
      description: "Montagem completa de painéis de comando para linha de produção automotiva."
    },
    {
      title: "Adequação NR12",
      category: "Segurança",
      image: "https://i.imgur.com/OHd9Wdq.jpeg",
      description: "Implementação de sistemas de segurança e adequação de máquinas conforme a norma NR12."
    },
    {
      title: "Sistemas de Barramento Blindado",
      category: "Distribuição",
      image: "https://i.imgur.com/pvK0TX5.jpeg",
      description: "Execução de barramentos para distribuição de energia em galpão logístico."
    },
    {
      title: "Painel de Distribuição QGBT",
      category: "Energia",
      image: "https://i.imgur.com/NBaVbDk.jpeg",
      description: "Montagem de quadros gerais de baixa tensão com foco em seletividade e proteção."
    },
    {
      title: "Automação de Processos",
      category: "Tecnologia",
      image: "https://i.imgur.com/6p757T4.jpeg",
      description: "Integração de CLPs e IHMs para controle de processos químicos."
    },
    {
      title: "Instalações Elétricas Prediais",
      category: "Comercial",
      image: "https://i.imgur.com/GYJtwlX.jpeg",
      description: "Infraestrutura elétrica completa para centro empresarial de alto padrão."
    }
  ];

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Venha conhecer o nosso trabalho</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Confira alguns dos projetos executados pela Nexxor Controle e Automação. Excelência técnica e compromisso com a qualidade em cada detalhe.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{project.title}</h3>
                <p className="text-gray-600 text-sm font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Gostou do que viu?</h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Estamos prontos para levar essa mesma excelência para a sua empresa. Entre em contato e solicite uma visita técnica.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
              >
                Solicitar Orçamento
                <ImageIcon size={20} />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Suppliers />
      <FAQ />
      <CTASection />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
