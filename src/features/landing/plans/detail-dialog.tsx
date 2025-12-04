import { Button } from "@shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/components/ui/dialog";
import type * as React from "react";

export function DetailDialog(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hover:-translate-y-1 transition-all duration-300"
          size={"lg"}
          variant={"text"}
        >
          See timelines
        </Button>
      </DialogTrigger>
      <DialogContent>
        <h3 className="font-heading font-semibold text-xl leading-tight">
          How long the project takes?
        </h3>

        <p className="mt-5 text-pretty text-foreground/60 leading-relaxed">
          We tried the best to make sure the project isn't take too long to
          complete. While ensuring the high quality and hit target, we make it
          to streamline the process.
        </p>

        <p className="mt-6 text-pretty font-medium leading-relaxed">
          Timelines:
        </p>

        <ul className="mt-3 ml-1 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Landing page: 3 days - 1 week
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Standard website: 1 - 2 weeks
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Complex website: 2 - 4 weeks
          </li>
          <li className="flex items-center gap-2">
            <i className="fi fi-sc-check-circle" />
            Ecommerces: 2 - 4 weeks
          </li>
        </ul>

        <p className="mt-6 text-pretty text-foreground/60 leading-relaxed">
          The project can take less or longer than expected, We always in time,
          so don't worry of bloated cost.
        </p>
      </DialogContent>
    </Dialog>
  );
}
