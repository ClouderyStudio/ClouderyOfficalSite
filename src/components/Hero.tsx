import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { TypeAnimation } from "react-type-animation";
import {getDelay} from "@/App.tsx";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 animate-fade-down animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              漂泊
            </span>
            互联网之海的小船
          </h1>
          <br/>
          <h2 className="inline">
            <span className="bg-gradient-to-r from-green-200 to-emerald-800 text-transparent bg-clip-text">
          <TypeAnimation
              sequence={[
                  500,
                  '云术工作室',
                  1200,
                  '<Cloudery />',
                  1000,
              ]}
              cursor={true}
              speed={8}
              repeat={Infinity}
          />
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          始于2022年，争做一个完美的互联网技术团队
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
            <a href="#about"><Button className="w-full md:w-1/3">向下阅读</Button></a>

          <a
            rel="noreferrer noopener"
            href="https://github.com/ClouderyStudio"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
