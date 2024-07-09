import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {getDelay} from "@/utils.ts";

export const Newsletter = () => {

  return (
    <section id="newsletter" className="animate-fade-right animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
        加入我们的{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          每日资讯
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          获得更多信息
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          /* onSubmit={handleSubmit} */
        >
          <Input
            placeholder="114514@qq.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>提交</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
