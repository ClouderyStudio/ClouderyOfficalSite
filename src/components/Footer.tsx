import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            云术工作室🪄
          </a>
          <br/>
          此网站使用<a className="text-primary transition-all border-primary">React + Shadcn/ui + Tailwindcss</a>构建<br/>
          我们<a className="text-primary transition-all border-primary" href="https://github.com/ClouderyStudio">开源</a> ❤
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">关注我们</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/ClouderyStudio"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">平台</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              网站
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              移动端
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              桌面端
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">关于</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              特色
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              赞助
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">社区</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://bbs.cloudery.cn"
              className="opacity-60 hover:opacity-100"
            >
              论坛
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://qm.qq.com/q/bCfy4iO6D6"
              className="opacity-60 hover:opacity-100"
            >
              QQ群
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; Copyright 2024{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://cloudery.cn/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Cloudery Studio
          </a>
          , all rights reserved.
        </h3>
      </section>
    </footer>
  );
};
