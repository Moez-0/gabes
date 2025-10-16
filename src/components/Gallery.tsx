import crowdImage from "@/assets/protest-crowd.jpg";
import factoryImage from "@/assets/protest-factory.jpg";
import signImage from "@/assets/protest-sign.jpg";
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    {
      src: crowdImage,
      alt: t('gallery.images.crowd.alt'),
      caption: t('gallery.images.crowd.caption'),
    },
    {
      src: factoryImage,
      alt: t('gallery.images.factory.alt'),
      caption: t('gallery.images.factory.caption'),
    },
    {
      src: signImage,
      alt: t('gallery.images.sign.alt'),
      caption: t('gallery.images.sign.caption'),
    },
  ];
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-foreground sm:text-5xl">
          {t('gallery.title')}
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          {t('gallery.subtitle')}
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-card shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
