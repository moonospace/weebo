import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/components/ui/dialog";
import type * as React from "react";

export function SubscriptionPlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:-translate-y-2 col-span-4 tablet:col-span-2 flex tablet:rotate-12 cursor-pointer flex-col rounded-2xl bg-surface p-4 transition-all duration-300 hover:rotate-6 hover:scale-95">
          <div className="flex items-center">
            <h3 className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 pl-2 font-medium text-blue-500 text-sm">
              <i className="fi fi-sc-check-circle" />
              Monthly flat rate
            </h3>
          </div>

          <div className="mt-4 font-heading font-medium text-xl">
            $5,250 / <span className="text-foreground/50">month</span>
          </div>

          <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
            For unlimited websites within a short period of time.
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h3 className="font-heading font-semibold text-xl leading-tight">
          Monthly Subscription ($5,250/month)
        </h3>

        <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
          Best if you need unlimited projects and ongoing supports for all of
          your website works all in one plan
        </p>

        <ul className="mt-6 ml-1 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Full services & supports (design, development, optimization,
            integrations, deployments, publish)
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            1-2 week turnaround
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Unlimited revisions
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            One project at the time
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Unlimited request
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Pause or cancel anytime
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
