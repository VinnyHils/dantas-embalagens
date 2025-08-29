import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'; // Assuming shadcn/ui accordion component
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Qual é o pedido mínimo?',
    answer:
      'Nosso pedido mínimo é de 1.000 unidades (um milheiro) para os sacos de papel multiuso. Isso nos permite oferecer o melhor preço de fábrica para você.',
  },
  {
    question: 'Vocês personalizam as embalagens com minha marca?',
    answer:
      'Atualmente, trabalhamos com o modelo padrão de saco de papel kraft na cor natural, sem personalização. Isso garante um custo mais baixo e pronta entrega.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'Para a região da Grande São Paulo, o prazo de entrega é de 2 a 5 dias úteis. Para outras regiões do Brasil, o prazo pode variar. Oferecemos frete grátis para pedidos acima de R$ 200.',
  },
  {
    question: 'O material é resistente a alimentos gordurosos?',
    answer:
      'Sim! Nossos sacos são feitos com papel de alta gramatura (80g/m²) que possui uma boa resistência a gordura, sendo ideal para alimentos como pipoca, churros, batatas fritas e outros lanches.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer:
      'Aceitamos pagamentos via Pix, boleto bancário e cartões de crédito em até 3x sem juros. As compras podem ser feitas diretamente pelo Mercado Livre ou via WhatsApp para um atendimento personalizado.',
  },
];

const Faq = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4 text-slate-800">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tire suas dúvidas mais comuns sobre nossos produtos e serviços.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 rounded-xl border-b-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-slate-800 hover:no-underline">
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-3 text-orange-600" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
