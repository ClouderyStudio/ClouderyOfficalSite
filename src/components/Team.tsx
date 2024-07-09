import {getDelay} from "@/utils.ts";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageCirclePlus } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://q1.qlogo.cn/g?b=qq&nk=2457483710&s=100",
    name: "云竹",
    position: "创始人",
    description: "你好，这里是 YZ ，24岁，是学生，对有趣的世界和可能有趣的你感到好奇，热爱Tech和ACG文化，正在尝试从事互联网产品/Web开发相关工作。",
    socialNetworks: [ // icon改一改  bydqq 得找个加好友api
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:2457483710@qq.com",
      },
    ],
  },
  {
    imageUrl: "https://q1.qlogo.cn/g?b=qq&nk=2675256772&s=100",
    name: "MagicQiyi",
    position: "创始人",
    description: "我是柒屹，同时也是云术工作室重要成员之一，屹立不倒。从事互联网事业及Web开发工作，也在搞关于Java的一些东西",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:2675256772@qq.com",
      },
    ],
  },
  {
    imageUrl: "https://q1.qlogo.cn/g?b=qq&nk=953595252&s=100",
    name: "信念",
    position: "云术生存战争服务器服主",
    description: "暂时没有描述",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:953595252@qq.com",
      },
    ],
  },
  {
    imageUrl: `https://q1.qlogo.cn/g?b=qq&nk=3582126020&s=100`,
    name: "屑北",
    position: "MC服务器研发人",
    description: "暂时没有描述",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:3582126020@qq.com",
      },
    ],
  },
  {
    imageUrl: `https://q1.qlogo.cn/g?b=qq&nk=2770161886&s=100`,
    name: "一只小小安",
    position: "IDC项目负责人",
    description: "暂时没有描述",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:2770161886@qq.com",
      },
    ],
  },
  {
    imageUrl: `https://q1.qlogo.cn/g?b=qq&nk=1263115878&s=100`,
    name: "咕噜",
    position: "凌御大陆服务器负责人",
    description: "暂时没有描述",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:1263115878@qq.com",
      },
    ],
  },
  {
    imageUrl: `https://q1.qlogo.cn/g?b=qq&nk=2171587486&s=100`,
    name: "吴詞",
    position: "IDC项目负责人",
    description: "暂时没有描述",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:2171587486@qq.com",
      },
    ],
  },
  {
    imageUrl: `https://q1.qlogo.cn/g?b=qq&nk=3014786442&s=100`,
    name: "Zero",
    position: "群聊挂载人", // http://vip.xg.frp.one:18950/ 记得先保存内容再看 Ctrl+S保存  ok
    description: "暂时没有描述",
    socialNetworks: [  // 我要睡觉了 困死了 你慢慢写啊awa  qwq
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:3014786442@qq.com",
      },
    ],
  },
  {
    imageUrl: `https://q1.qlogo.cn/g?b=qq&nk=3067315092&s=100`,
    name: "C6H608",
    position: "114514", // e，这人干什么的
    description: "暂时没有描述",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:3067315092@qq.com",
      },
    ],
  },
  {
    imageUrl: `https://q1.qlogo.cn/g?b=qq&nk=1704853359&s=100`,
    name: "",
    position: "专业安卓逆向、开发",
    description: "暂时没有描述",
    socialNetworks: [
      {
        name: "QQ",
        url: "http://linkedin.com"
      },
      {
        name: "Email",
        url: "mailto:1704853359@qq.com",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "QQ":
        return <MessageCirclePlus />;

      case "Email":
        return <Mail />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold animate-ease-in-out text-center animate-fade-down" style={{ animationDelay: `${getDelay()}ms` }}> 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          我们的{" "}
        </span>
        团队成员
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground animate-fade-down animate-ease-in-out text-center" style={{ animationDelay: `${getDelay()}ms` }}>
        一群志远的青俊与质雅的淑女
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks, description }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center animate-fade-right animate-ease-in-out"
              style={{ animationDelay: `${getDelay()}ms` }}
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                {description}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
