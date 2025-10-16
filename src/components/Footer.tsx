import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-foreground py-8 px-4 text-background">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="mb-2 text-lg font-semibold">{t('footer.title')}</p>
        <p className="text-sm opacity-80">
          {t('footer.subtitle')}
        </p>
        <p className="mt-4 text-xs opacity-60">
          {t('footer.dedication')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
