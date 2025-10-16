import { AlertTriangle, Users, Droplets } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "95%",
    label: "of Gabes' air pollution comes from GCT emissions",
  },
  {
    icon: Users,
    value: "120+",
    label: "people hospitalized in October 2025 due to toxic leaks",
  },
  {
    icon: Droplets,
    value: "Decades",
    label: "of toxic waste discharged into the Gulf of Gabes",
  },
];

const CrisisSection = () => {
  return (
    <section id="crisis" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-foreground sm:text-5xl">
          The Crisis in Gabes
        </h2>
        
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group rounded-lg border-2 border-primary bg-card p-6 text-center transition-all hover:shadow-xl hover:scale-105"
              >
                <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                <div className="mb-2 text-4xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            Gabes, Tunisia is facing an unprecedented environmental and health emergency. 
            The state-owned <strong>Chemical Group of Tunisia (GCT)</strong> phosphate-processing 
            plant has been poisoning the city for decades, causing severe air and water pollution.
          </p>
          
          <p>
            In October 2025, a major gas leak sent over <strong>120 people to hospitals</strong>, 
            including children who developed paralysis. Residents report increased respiratory problems, 
            cancer rates, and chronic health conditions linked to the toxic emissions.
          </p>

          <p>
            The plant processes raw phosphate into fertilizer, discharging toxic waste directly 
            into the <strong>Gulf of Gabes</strong>—one of the most polluted sites in the Mediterranean. 
            This pollution has devastated marine life, turned waters dark, and destroyed the livelihoods 
            of local fishermen.
          </p>

          <p>
            Despite government promises to relocate or modernize the plant, no meaningful action has 
            been taken. Tunisia's National Observatory for Agriculture has repeatedly warned that air 
            quality in Gabes exceeds WHO limits, with dangerous levels of <strong>sulfur dioxide</strong> and <strong>ammonia</strong>.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            "Our entire lives have been ruined by the smells and smoke we inhale every day. 
            We want this complex dismantled, and we will not stop until it happens."
            <span className="block mt-2 text-sm">— Hanen, 30-year-old Gabes resident</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default CrisisSection;
