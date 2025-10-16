import { ArrowDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import heroImage from "@/assets/protest-crowd.jpg";
import LanguageSwitcher from './LanguageSwitcher';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {t('hero.title')}
        </h1>
        <p className="mb-8 max-w-2xl text-xl font-medium text-white/90 sm:text-2xl md:text-3xl">
          {t('hero.subtitle')}
        </p>
        <p className="mb-12 max-w-3xl text-base text-white/80 sm:text-lg md:text-xl">
          {t('hero.description')}
        </p>
        
        <button
          onClick={() => document.getElementById('crisis')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
        >
          {t('hero.learnMore')}
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
