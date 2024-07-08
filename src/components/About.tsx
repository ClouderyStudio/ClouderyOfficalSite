import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import {getDelay} from "@/App.tsx";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 animate-fade-down animate-ease-in-out"
      style={{ animationDelay: `${getDelay()}ms` }}
    >
      <div className="bg-muted/50 border rounded-lg py-12 shadow-2xl">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  关于
                </span>
                我们
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                云术工作室，由云竹与MagicQiyi联手创立，专注于前后端开发以及游戏服务。作为一个多元化的团队，我们旗下产品广泛涉猎多个领域，致力于为客户提供卓越的技术支持与创新的解决方案。通过我们的专业能力和丰富经验，云术工作室正努力成为行业内的佼佼者。
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
