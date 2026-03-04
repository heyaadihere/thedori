const BrandStory = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/5] bg-accent rounded overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs tracking-wider uppercase text-muted-foreground">Brand imagery</span>
            </div>
          </div>
          
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              The DORI Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-6">
              Designed for<br />the composed
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-light">
              <p>
                DORI is built on a simple belief: clothing should serve you, not compete with you. Our structured outerwear is designed for people who understand that real presence doesn't require volume.
              </p>
              <p>
                Every piece features reversible construction, contrast panels, and finishes that reward a closer look — details that speak to those who notice them.
              </p>
              <p>
                Intentional design. Quiet confidence. Built to move with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
