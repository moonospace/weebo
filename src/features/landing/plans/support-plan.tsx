import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/components/ui/dialog";
import type * as React from "react";

export function SupportPlan(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:-translate-y-2 hover:-rotate-6 tablet:-rotate-3 col-span-4 tablet:col-span-2 flex cursor-pointer flex-col rounded-2xl bg-surface p-4 transition-all duration-300 hover:scale-95">
          <div className="flex items-center">
            <h3 className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 pl-2 font-medium text-purple-500 text-sm">
              <i className="fi fi-sc-check-circle" />
              Support
            </h3>
          </div>

          <div className="mt-4 font-heading font-medium text-xl">
            $575 / <span className="text-foreground/50">month</span>
          </div>

          <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
            Best for ongoing maintenance and website help
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h3 className="font-heading font-semibold text-xl leading-tight">
          Support ($575/month)
        </h3>

        <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
          if you need full month support to manage, and standby helping your
          website alive with thousand of traffics.
        </p>

        <ul className="mt-6 ml-1 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Simple support (Optimization, audits, integrations, content update,
            deployments, backups)
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            2-3 days turnaround
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            One project at the time
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
