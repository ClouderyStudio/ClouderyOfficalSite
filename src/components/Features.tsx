import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";
import {getDelay} from "@/utils.ts";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}
/* <========聊天区========>
hello whats wrong?
*/
const features: FeatureProps[] = [
  {
    title: "氛围友善",
    description:
      "我们以成员之间的友善互动为核心，营造了一个温馨、包容的工作室氛围。成员间相互尊重、乐于助人，使得新加入的成员能迅速融入，感受到家的温暖。",
    image: image4,
  },
  {
    title: "低门槛 高参与",
    description:
      "我们有着很低的门槛，无论是初学者还是大佬都能找到属于自己的位置，可以自由地参与各个项目的开发和讨论。我们大力倡导成员标新立异，发展创新思想，开创属于自己的一片天地。", 
    image: image3,
  },
  {
    title: "独立 稳定",
    description:
      "我们有着自己的独立服务器，保证项目具有99.99%的稳定性。工作室有完整自主的控制权，有着向前进步的决心。",
    image: image,
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8 animate-fade-down animate-ease-in-out"
      style={{
        animationDelay: `${getDelay()}ms`
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        工作室的{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          特点{" "}
        </span>
        在哪里?
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        独具一格的工作室就要有别开生面的特点
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
