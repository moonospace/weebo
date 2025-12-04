import { Button } from "@shared/components/ui/button";
import type * as React from "react";

export function CTASection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="cta">
      <h2 className="mt-8 text-center font-medium tablet:text-5xl text-4xl leading-tight tracking-tight">
        Let's move on
        <br />
        get a spot
      </h2>

      <p className="mx-auto mt-10 tablet:w-7/12 w-full text-pretty text-center text-foreground/60 leading-7">
        We offer limited partner to work on. Secure your seat now and let us do
        your work.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          No shit
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          Quick meeting
        </span>
        <span className="hover:-translate-y-1 flex cursor-pointer items-center gap-2 text-foreground/60 text-sm transition-all duration-300">
          <i className="fi fi-sc-check-circle text-green-600" />
          Perfect spot
        </span>
      </div>

      <div className="mt-16 flex items-center gap-5">
        <Button
          asChild
          className="hover:-translate-y-1 transition-all duration-300 hover:scale-95"
          size={"lg"}
        >
          <a
            href={"https://cal.com/nyomansunima/weebo-intro-call"}
            rel="noreferrer noopener"
            target="_blank"
          >
            Get the spot now
            <i className="fi fi-sr-check-circle" />
          </a>
        </Button>
      </div>
    </section>
  );
}
