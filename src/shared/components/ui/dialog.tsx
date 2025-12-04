import * as DialogPrimitive from "@radix-ui/react-dialog";
import type * as React from "react";
import { cx } from "tailwind-variants/lite";
import { ScrollArea } from "./scroll-area";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Overlay
  > | null>;
}) => (
  <DialogPrimitive.Overlay
    className={cx(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/20 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    ref={ref}
    {...props}
  />
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Content
  > | null>;
}) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-bottom-[48%] data-[state=open]:slide-in-from-bottom-[48%] group fixed top-[50%] left-[50%] z-50 grid tablet:w-full w-[90%] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-2xl border border-border bg-background p-1 duration-300 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      ref={ref}
      {...props}
    >
      <div className="flex h-full w-full flex-col rounded-xl p-6 transition-all duration-300">
        <DialogPrimitive.Title hidden />
        <ScrollArea className="max-h-[80vh] tablet:max-h-[60vh]">
          {children}
        </ScrollArea>
        <DialogPrimitive.Close className="absolute top-4 right-4 flex cursor-pointer items-center gap-2 rounded-full bg-secondary px-3 py-2 font-heading font-medium text-secondary-foreground text-sm transition-all duration-300 hover:scale-95">
          Close
          <i className="fi fi-br-cross-small text-sm" />
        </DialogPrimitive.Close>
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
};
