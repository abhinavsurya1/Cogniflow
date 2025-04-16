
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const faqItems = [
  {
    question: "What is NeuroSyncAI and how does it work?",
    answer: "NeuroSyncAI is an advanced artificial intelligence platform that leverages neural networks to sync with your workflow, automate repetitive tasks, and provide data-driven insights. It works by analyzing your patterns, learning from your interactions, and continuously adapting to optimize your productivity."
  },
  {
    question: "How secure is my data with NeuroSyncAI?",
    answer: "We prioritize data security with end-to-end encryption, secure cloud storage, and strict access controls. Your data never leaves our secure servers, and we comply with GDPR, HIPAA, and other major data protection regulations. We never share or sell your information to third parties."
  },
  {
    question: "Can I upgrade or downgrade my subscription plan?",
    answer: "Yes, you can change your subscription plan at any time. When upgrading, you'll immediately gain access to additional features and be charged a prorated amount. When downgrading, the changes will take effect at the end of your current billing cycle."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features of our Pro plan. No credit card is required to start your trial. After the trial period, you can choose to subscribe to any of our plans or continue with the free plan with limited features."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support with varying response times based on your subscription tier. Pro and Elite plans include priority support with faster response times. Elite plans also offer dedicated account managers and personalized onboarding sessions."
  },
  {
    question: "Is there a limit to how many projects I can create?",
    answer: "The Free plan allows up to 3 projects, the Basic plan includes up to 10 projects, the Pro plan supports up to 30 projects, and the Elite plan offers unlimited projects. You can see detailed feature comparisons on our pricing page."
  }
];

const Faq = () => {
  return (
    <AnimatedSection className="container py-16" id="faq">
      <div className="text-center mb-12">
        <AnimatedText text="Frequently Asked Questions" className="text-3xl font-bold mb-4" />
        <AnimatedText 
          text="Everything you need to know about NeuroSyncAI" 
          className="text-muted-foreground max-w-lg mx-auto"
          delay={0.1}
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
              <AccordionTrigger className="text-left py-6 text-lg font-medium hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
};

export default Faq;
