import { AlertTriangle, Users, Droplets } from "lucide-react";
import { useTranslation } from 'react-i18next';

const CrisisSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: AlertTriangle,
      value: t('crisis.stats.pollution'),
      label: t('crisis.stats.pollutionLabel'),
    },
    {
      icon: Users,
      value: t('crisis.stats.hospitalized'),
      label: t('crisis.stats.hospitalizedLabel'),
    },
    {
      icon: Droplets,
      value: t('crisis.stats.decades'),
      label: t('crisis.stats.decadesLabel'),
    },
  ];
  return (
    <section id="crisis" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-foreground sm:text-5xl">
          {t('crisis.title')}
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
          <p dangerouslySetInnerHTML={{ __html: t('crisis.content.paragraph1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('crisis.content.paragraph2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('crisis.content.paragraph3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('crisis.content.paragraph4') }} />

          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            "{t('crisis.content.quote')}"
            <span className="block mt-2 text-sm">{t('crisis.content.quoteAttribution')}</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default CrisisSection;
