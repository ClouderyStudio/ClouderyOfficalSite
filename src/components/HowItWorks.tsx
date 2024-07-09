import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import {getDelay} from "@/utils.ts";
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MapIcon />,
    title: "社区运营",
    description:
      "由云术社区（包括论坛/讨论群等）的友友们会帮助我们解决一些小事情，减轻工作室的负担",
  },
  {
    icon: <PlaneIcon />,
    title: "成员运营",
    description:
      "工作室的成员和管理员会主动参加到工作室运营的相关活动中去",
  },
  {
    icon: <GiftIcon />,
    title: "接受捐赠",
    description:
      "我们同时接受捐赠，捐赠计划解决了我们的资金问题",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32 animate-fade-down animate-ease-in-out"
      style={{
        animationDelay: `${getDelay()}ms`,
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        我们如何{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          持之以恒地运营{" "}
        </span>
        工作室?
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        以下是工作室长久运营的秘诀(小点子
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
