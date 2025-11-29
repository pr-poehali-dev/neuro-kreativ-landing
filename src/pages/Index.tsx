import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tariffs = [
    {
      name: 'Быстрый вход',
      hours: '9 часов',
      audience: 'Новички, первые шаги',
      goal: 'Дать базу и "вау-эффект", показать пользу ИИ',
      price: '18 000',
      color: 'neon-blue',
      features: ['Основы работы с ИИ', 'Практические кейсы', 'Поддержка в чате', 'Сертификат']
    },
    {
      name: 'Стандарт',
      hours: '75 часов',
      audience: 'Освоить профессию с нуля до заработка на фрилансе',
      goal: 'Полный рабочий набор нейрокреатора как специалиста',
      price: '150 000',
      color: 'neon-green',
      popular: true,
      features: ['Всё из "Быстрый вход"', 'Глубокое изучение инструментов', 'Портфолио проектов', 'Помощь с фрилансом', 'Менторство 3 месяца']
    },
    {
      name: 'PRO / Суперкурс',
      hours: '93 часа',
      audience: 'Премиум-специалисты, уникальность работ',
      goal: 'Креативность + визуал + коммерция',
      price: '186 000',
      color: 'neon-orange',
      features: ['Всё из "Стандарт"', 'Авторские решения', 'Премиум-инструменты', 'Личный коуч', 'Доступ к закрытому комьюнити', 'Пожизненная поддержка']
    }
  ];

  const benefits = [
    { icon: 'Zap', title: 'Быстрый старт', description: 'От нуля до первых результатов за неделю' },
    { icon: 'Target', title: 'Практика', description: 'Реальные кейсы и проекты, а не теория' },
    { icon: 'Users', title: 'Комьюнити', description: 'Сообщество единомышленников и нетворкинг' },
    { icon: 'Award', title: 'Сертификат', description: 'Подтверждение ваших компетенций' },
    { icon: 'TrendingUp', title: 'Рост дохода', description: 'Реальные навыки для заработка' },
    { icon: 'Sparkles', title: 'Уникальность', description: 'Создавайте то, что выделяет вас' }
  ];

  const testimonials = [
    { name: 'Анна Смирнова', role: 'Дизайнер', text: 'Прошла курс "Стандарт" и уже через 2 месяца начала получать заказы на фрилансе. Невероятно!' },
    { name: 'Дмитрий Козлов', role: 'Маркетолог', text: 'Курс открыл для меня новый мир возможностей. Теперь создаю контент в 10 раз быстрее!' },
    { name: 'Елена Петрова', role: 'Предприниматель', text: 'PRO-курс стоил каждого рубля. Теперь я могу создавать уникальный визуал для своего бизнеса.' }
  ];

  const faqs = [
    { q: 'Нужны ли технические навыки?', a: 'Нет! Курс рассчитан на людей без технического опыта. Мы начинаем с самых азов.' },
    { q: 'Какое оборудование нужно?', a: 'Достаточно обычного компьютера или ноутбука с доступом в интернет.' },
    { q: 'Есть ли поддержка после курса?', a: 'Да! В зависимости от тарифа вы получаете от 3 месяцев до пожизненной поддержки.' },
    { q: 'Можно ли оплатить в рассрочку?', a: 'Да, мы предоставляем гибкие условия оплаты. Свяжитесь с нами для деталей.' },
    { q: 'Что если мне не подойдет?', a: 'Первые 7 дней — гарантия возврата денег без объяснения причин.' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="matrix-bg fixed inset-0 z-0 opacity-10" />
      
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neon-green/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold font-mono text-neon-green">
              <span className="text-shadow-neon">&lt;AI.КУРС/&gt;</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['hero', 'about', 'tariffs', 'benefits', 'testimonials', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-neon-green ${
                    activeSection === section ? 'text-neon-green' : 'text-gray-400'
                  }`}
                >
                  {section === 'hero' ? 'Главная' : 
                   section === 'about' ? 'О курсе' :
                   section === 'tariffs' ? 'Тарифы' :
                   section === 'benefits' ? 'Преимущества' :
                   section === 'testimonials' ? 'Отзывы' :
                   section === 'faq' ? 'FAQ' :
                   'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono">
              <span className="text-neon-green text-shadow-neon">МАТРИЦА</span>
              <br />
              <span className="text-white">КОДА И</span>
              <br />
              <span className="text-neon-blue text-shadow-neon">КРЕАТИВНОСТИ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Освойте нейросети и станьте востребованным специалистом в мире AI
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-neon-green hover:bg-neon-green/80 text-black font-bold glow-green"
                onClick={() => scrollToSection('tariffs')}
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Выбрать тариф
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono">
            <span className="text-neon-green text-shadow-neon">О КУРСЕ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-dark-bg border-neon-green/30 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-neon-green flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Программа обучения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300">
                <p>• Основы работы с нейросетями (ChatGPT, Midjourney, DALL-E)</p>
                <p>• Продвинутые техники промптинга</p>
                <p>• Создание визуального контента</p>
                <p>• Автоматизация рутинных задач</p>
                <p>• Монетизация навыков</p>
                <p>• Построение личного бренда</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-bg border-neon-blue/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-neon-blue flex items-center gap-2">
                  <Icon name="Trophy" size={24} />
                  Результаты после курса
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300">
                <p>✓ Портфолио из 10+ проектов</p>
                <p>✓ Навыки работы с топ-инструментами</p>
                <p>✓ Понимание монетизации</p>
                <p>✓ Сертификат о прохождении</p>
                <p>✓ Доступ к комьюнити</p>
                <p>✓ Готовность к фрилансу</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 relative z-10 bg-darker-bg/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
            <span className="text-neon-orange text-shadow-neon">ТАРИФЫ</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Выберите свой путь в мир нейросетей</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tariffs.map((tariff, idx) => (
              <Card 
                key={idx}
                className={`bg-dark-bg border-${tariff.color}/50 relative overflow-hidden hover:scale-105 transition-transform duration-300 ${
                  tariff.popular ? 'ring-2 ring-neon-green' : ''
                }`}
              >
                {tariff.popular && (
                  <div className="absolute top-4 right-4 bg-neon-green text-black px-3 py-1 rounded-full text-sm font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardHeader>
                  <CardTitle className={`text-${tariff.color} text-2xl font-mono`}>
                    {tariff.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    <span className="font-mono text-lg">{tariff.hours}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-300">
                    <p className="font-semibold text-white mb-1">Для кого:</p>
                    <p>{tariff.audience}</p>
                  </div>
                  <div className="text-sm text-gray-300">
                    <p className="font-semibold text-white mb-1">Цель:</p>
                    <p>{tariff.goal}</p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-3xl font-bold text-white mb-4 font-mono">
                      {tariff.price} ₽
                    </p>
                    <ul className="space-y-2">
                      {tariff.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <Icon name="Check" size={16} className={`text-${tariff.color} mt-1 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full bg-${tariff.color} hover:bg-${tariff.color}/80 text-black font-bold glow-${tariff.color.split('-')[1]}`}
                    onClick={() => scrollToSection('contact')}
                  >
                    Записаться
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono">
            <span className="text-neon-blue text-shadow-neon">ПРЕИМУЩЕСТВА</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx}
                className="bg-dark-bg border-neon-green/20 hover:border-neon-green/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} className="text-neon-green" size={24} />
                  </div>
                  <CardTitle className="text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="speaker" className="py-20 relative z-10 bg-darker-bg/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono">
            <span className="text-neon-orange text-shadow-neon">О СПИКЕРЕ</span>
          </h2>
          <Card className="max-w-4xl mx-auto bg-dark-bg border-neon-orange/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-orange to-neon-green flex items-center justify-center text-6xl">
                  🎓
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">Александр Иванов</h3>
                  <p className="text-gray-300 mb-4">
                    Эксперт в области нейросетей с 5-летним опытом работы. Автор более 100 успешных проектов 
                    с использованием AI. Спикер на международных конференциях по искусственному интеллекту.
                  </p>
                  <div className="space-y-2 text-gray-400">
                    <p>• 1000+ выпускников курсов</p>
                    <p>• 50+ корпоративных клиентов</p>
                    <p>• Сертифицированный специалист OpenAI</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono">
            <span className="text-neon-green text-shadow-neon">ОТЗЫВЫ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-dark-bg border-neon-blue/20">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-green flex items-center justify-center">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-neon-blue text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 relative z-10 bg-darker-bg/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono">
            <span className="text-neon-orange text-shadow-neon">FAQ</span>
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-neon-green/20">
                <AccordionTrigger className="text-white hover:text-neon-green text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
            <span className="text-neon-blue text-shadow-neon">КОНТАКТЫ</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Есть вопросы? Свяжитесь с нами!</p>
          
          <Card className="max-w-2xl mx-auto bg-dark-bg border-neon-blue/30">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-darker-bg border-gray-700 text-white focus:border-neon-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-darker-bg border-gray-700 text-white focus:border-neon-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, что вас интересует..." 
                    className="bg-darker-bg border-gray-700 text-white focus:border-neon-green min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-neon-green hover:bg-neon-green/80 text-black font-bold glow-green"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-700 grid md:grid-cols-2 gap-4 text-center">
                <div>
                  <Icon name="Mail" className="mx-auto mb-2 text-neon-blue" size={24} />
                  <p className="text-gray-400">info@ai-course.ru</p>
                </div>
                <div>
                  <Icon name="Phone" className="mx-auto mb-2 text-neon-green" size={24} />
                  <p className="text-gray-400">+7 (999) 123-45-67</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 relative z-10 border-t border-neon-green/20 bg-black">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="font-mono">© 2024 AI.КУРС | Матрица кода и креативности</p>
          <p className="text-sm mt-2">Все права защищены</p>
        </div>
      </footer>

      <style>{`
        .matrix-bg {
          background: linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.05) 25%, rgba(16, 185, 129, 0.05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.05) 75%, rgba(16, 185, 129, 0.05) 76%, transparent 77%, transparent),
                      linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.05) 25%, rgba(16, 185, 129, 0.05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.05) 75%, rgba(16, 185, 129, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          animation: matrix-scroll 20s linear infinite;
        }
        
        @keyframes matrix-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>
    </div>
  );
};

export default Index;
