import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";
import {getDelay} from "@/utils.ts";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "前端服务",
    description:
      "云术工作室致力于为广大用户提供一站式的互联网服务，其中包括免费域名、强大的CDN（如Cloudflare）服务，以及高性能的虚拟主机网站服务。",
    icon: <ChartIcon />,
  },
  {
    title: "游戏服务",
    description:
      "云术工作室旗下的服务器以其卓越的性能和稳定性，为广大用户提供了流畅、有趣且充满互动性的多人游玩体验。",
    icon: <WalletIcon />,
  },
  {
    title: "开源项目",
    description:
      "云术工作室秉持着开放与共享的理念，将我们的所有项目均已开源并发布在Github上。我们深信开源能够促进技术的交流与进步，因此，我们诚挚地邀请所有人来查看、学习、借鉴我们的项目。",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32 animate-ease-in-out animate-fade-down"
    style={{
      animationDelay: `${getDelay()}ms`
    }}>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            工作室{" "}
            </span>
            服务
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            我们可以为你带来这些服务
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
