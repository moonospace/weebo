import { Button } from "@shared/components";
import { mergeClass } from "@shared/libs";

type GalleryItemProps = {
  item: { image: string; label: string };
  className?: string;
};

function GalleryItem({ item, className }: GalleryItemProps) {
  return (
    <div
      className={mergeClass(
        "absolute h-full w-full cursor-pointer overflow-hidden rounded-3xl border border-border border-dashed bg-background p-1 transition-all duration-500 hover:z-10 hover:scale-105",
        className
      )}
    >
      <img
        alt={item.label}
        className="h-full w-full rounded-2xl object-cover"
        src={item.image}
      />
    </div>
  );
}

function Gallery() {
  return (
    <div className="group relative mt-28 flex h-[240px] tablet:h-[360px] laptop:w-9/12 tablet:w-10/12 w-11/12 items-center justify-center">
      <GalleryItem
        className="-rotate-3 group-hover:-translate-y-1/12"
        item={{
          image: "/images/gallery-2.png",
          label: "Guna transport",
        }}
      />
      <GalleryItem
        className="rotate-6 group-hover:translate-y-2/12 group-hover:rotate-3"
        item={{
          image: "/images/gallery-1.png",
          label: "One thing theme",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center py-28 pt-16 tablet:pt-48"
      id="hero"
    >
      <span className="flex items-center gap-2 rounded-2xl bg-green-100 px-3 py-1.5 text-green-600 text-sm">
        <i className="fi fi-sr-heart" /> Favored by more than 10+ startups
      </span>

      <h2 className="mt-8 text-center font-medium tablet:text-5xl text-4xl leading-tight tracking-tight">
        Result based web
        <br />
        design partner
      </h2>

      <p className="mx-auto mt-12 tablet:w-7/12 w-full text-pretty text-center text-foreground/60 leading-7">
        Helping startups, agencies, and enterprises build their on demand
        websites to win the customers
      </p>

      <div className="mt-16 flex tablet:flex-row flex-col items-center gap-5">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300 hover:scale-95"
          size={"lg"}
          variant={"primary"}
        >
          <a
            href={"https://cal.com/nyomansunima/weebo-intro-call"}
            rel="noreferrer noopener"
            target="_blank"
          >
            Book a call
            <i className="fi fi-sc-check-circle" />
          </a>
        </Button>
      </div>

      <Gallery />
    </section>
  );
}
