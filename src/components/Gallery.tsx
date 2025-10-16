import crowdImage from "@/assets/protest-crowd.jpg";
import factoryImage from "@/assets/protest-factory.jpg";
import signImage from "@/assets/protest-sign.jpg";

const images = [
  {
    src: crowdImage,
    alt: "Massive crowd of protesters in Gabes demanding action against pollution",
    caption: "Thousands gather to demand the closure of the GCT plant",
  },
  {
    src: factoryImage,
    alt: "Protesters near the chemical factory with smoke and tear gas in the air",
    caption: "Tear gas and burning tires fill the streets during protests",
  },
  {
    src: signImage,
    alt: "Child holding a 'Stop Pollution' sign at the protest",
    caption: "Young residents demand clean air and a safe future",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-foreground sm:text-5xl">
          Voices of Resistance
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          The people of Gabes are standing up against decades of environmental injustice
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
