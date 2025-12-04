import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/components/ui/dialog";
import type * as React from "react";

export function CustomPlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:-translate-y-2 col-span-4 flex tablet:rotate-2 cursor-pointer flex-col rounded-2xl bg-surface p-4 transition-all duration-300 hover:rotate-6 hover:scale-95">
          <div className="flex items-center">
            <h3 className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 pl-2 font-medium text-green-500 text-sm">
              <i className="fi fi-sc-check-circle" />
              Project based
            </h3>
          </div>

          <div className="mt-4 font-heading font-medium text-xl">
            Custom ($1,000 - $10,000)
          </div>

          <p className="mt-5 text-balance text-foreground/60 leading-relaxed">
            If you need something different or one time purchase or help for
            website that way more complex
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h3 className="font-heading font-semibold text-xl leading-tight">
          Custom Project (One Time)
        </h3>

        <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
          If you need something different or one time purchase or help for
          website that way more complex
        </p>

        <ul className="mt-6 ml-1 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Full services (design, development, optimization, integrations,
            deployments, publish)
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Custom or 1-3 weeks turnaround
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Unlimited revisions
          </li>
        </ul>

        <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
          You can use this for one time purchase, that you may don't need
          something else. Or you have a big project plans.
        </p>

        <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
          Best if you need something that custom or single service at the time.
          You can upgrade this into monthly subscriptions if you need more
          custom work in a month.
        </p>
      </DialogContent>
    </Dialog>
  );
}
