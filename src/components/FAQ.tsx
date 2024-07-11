import { getDelay } from "@/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "如何加入本工作室？",
    answer: "您只需要用QQ或邮件向云竹或MagicQiyi发送申请即可（联系方式详见成员列表），经过我们的审核后您即可进入我们的工作室。",
    value: "item-1",
  },
  {
    question: "本工作室对成员有什么要求？",
    answer: "本工作室广泛地接受不同领域的人才，只要您有着广义上开发相关的能力，您就会被我们的大家庭接受。",
    value: "item-2",
  },
  {
    question: "加入本工作室有什么好处？",
    answer: "1.您可享受到免费的服务器资源和域名资源 2.您可以在开发中不受约束 3.您可得到支持与帮助",
    value: "item-3",
  },
  {
    question: "本工作室是否对成员有严重限制？",
    answer: "本工作室不限制成员的人身自由与言论自由，只要您做的事符合中华人民共和国的法律及社会道德追求，您就可以自由地开发与研究",
    value: "item-4",
  },
  {
    question: "本工作室的宗旨是什么？",
    answer: "为人民服务！",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-down animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms`}}>
        常见{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          问题
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            className="animate-fade-right animate-ease-in-out"
            style={{ animationDelay: `${getDelay()}ms` }}
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4 animate-ease-in-out animate-fade-up" style={{ animationDelay: `${getDelay()}ms`}}>
        仍有问题？{" "}
        <a
          rel="noreferrer noopener"
          href="#newsletter"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          欢迎来联系我们
        </a>
      </h3>
    </section>
  );
};
