import { Heart, Share2, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: FileText,
    title: "Sign the Petition",
    description: "Add your voice to demand action from the Tunisian government",
    cta: "Sign Now",
  },
  {
    icon: Share2,
    title: "Spread Awareness",
    description: "Share this page and raise global awareness about Gabes",
    cta: "Share",
  },
  {
    icon: Heart,
    title: "Support Local NGOs",
    description: "Donate to organizations fighting for environmental justice in Tunisia",
    cta: "Donate",
  },
];

const TakeAction = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold sm:text-5xl">
          How You Can Help
        </h2>
        <p className="mb-12 text-center text-lg opacity-90">
          Every action counts. Stand in solidarity with the people of Gabes.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-center transition-all hover:bg-white/20 hover:scale-105"
              >
                <Icon className="mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">{action.title}</h3>
                <p className="mb-6 text-sm opacity-90">{action.description}</p>
                <Button
                  variant="secondary"
                  className="group gap-2"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  {action.cta}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
