import { Button } from "./ui/button";
import { getDelay } from "@/utils.ts";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32 animate-fade-down animate-ease-in-out"
      style={{
        animationDelay: `${getDelay()}ms`
      }}
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            所有你的
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              想法和概念{" "}
            </span>
            都在一个页面
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            需要这个页面吗
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};
