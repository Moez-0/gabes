import { Heart, Share2, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const TakeAction = () => {
  const { t } = useTranslation();

  const actions = [
    {
      icon: FileText,
      title: t('action.actions.petition.title'),
      description: t('action.actions.petition.description'),
      cta: t('action.actions.petition.cta'),
    },
    {
      icon: Share2,
      title: t('action.actions.share.title'),
      description: t('action.actions.share.description'),
      cta: t('action.actions.share.cta'),
    },
    {
      icon: Heart,
      title: t('action.actions.donate.title'),
      description: t('action.actions.donate.description'),
      cta: t('action.actions.donate.cta'),
    },
  ];
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold sm:text-5xl">
          {t('action.title')}
        </h2>
        <p className="mb-12 text-center text-lg opacity-90">
          {t('action.subtitle')}
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
