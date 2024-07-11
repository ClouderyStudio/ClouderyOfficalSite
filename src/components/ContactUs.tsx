import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { getDelay, sendEmail } from "@/utils.ts";
import { toast } from './ui/use-toast'

export const ContactUs = () => {
  const handleSubmit = async () => {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const content = (document.getElementById("content") as HTMLInputElement).value;
    sendEmail(name, email, content)
    toast({
      title: '提交成功',
      description: '您的信息已成功提交，我们会尽快回复您。',
    })
  }
  return (
    <section id="contact" className="animate-fade-right animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          联系
          </span>
          {" "}我们
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          我们很乐意收到您的来信，无论是关于我们的产品、服务还是其他任何问题。请填写以下表格，我们会尽快回复您。
        </p>

        <form
          action="#"
          id="contact-form"
          className="grid flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardTitle className="pl-6 py-4">邮箱</CardTitle>
            <CardContent>
              <Input
                title="邮箱"
                type="email"
                placeholder="114514@qq.com"
                className="bg-muted/50 dark:bg-muted/80 w-[150px]"
                id="email"
                required={true}
              />
            </CardContent>
          </Card>
          <Card>
            <CardTitle className="pl-6 py-4">名称</CardTitle>
            <CardContent>
              <Input
                title="名称"
                type="text"
                placeholder="我们该如何称呼您？"
                className="bg-muted/50 dark:bg-muted/80 w-[150px]"
                id="name"
                required={true}
              />
            </CardContent>
          </Card>
          </div>
          <Card>
            <CardTitle className="pl-6 py-4">内容</CardTitle>
            <CardContent>
              <Input
                title="内容"
                type="text"
                placeholder="反馈内容"
                className="bg-muted/50 dark:bg-muted/80 w-[350px] lg:w-[350px] mx-auto"
                id="content"
                required={true}
              />
            </CardContent>
          </Card>
          <Button className="bg-primary text-white hover:bg-primary/80 w-full md:w-1/2 mx-auto" type="submit">提交</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
