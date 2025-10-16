import { BookOpen, Globe, Mail } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Official Reports",
    items: [
      "Tunisia National Observatory for Agriculture - Air Quality Reports",
      "GCT Environmental Audit (July 2025)",
      "World Health Organization - Air Quality Guidelines",
    ],
  },
  {
    icon: Globe,
    title: "Environmental Organizations",
    items: [
      "Tunisian Association for Environmental Protection",
      "Mediterranean Environmental Network",
      "Greenpeace Mediterranean",
    ],
  },
  {
    icon: Mail,
    title: "Contact & Learn More",
    items: [
      "Follow #StandWithGabes on social media",
      "Contact local environmental NGOs in Tunisia",
      "Email: info@standwithgabes.org (example)",
    ],
  },
];

const Resources = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl">
          Resources & Information
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div key={index} className="rounded-lg border bg-card p-6">
                <Icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-4 text-xl font-semibold text-card-foreground">
                  {resource.title}
                </h3>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border-2 border-accent bg-accent/5 p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-foreground">
            President Saied's Response
          </h3>
          <p className="text-muted-foreground">
            "Serious failures were found in maintenance and testing that led to gas leaks. 
            There will be no tolerance for those who neglected their duties. 
            The people of Gabes will receive their full rights."
          </p>
          <p className="mt-4 text-sm text-muted-foreground italic">
            — Tunisian President Kais Saied, October 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
