import { Slot } from "@radix-ui/react-slot";
import type * as React from "react";
import { tv, type VariantProps } from "tailwind-variants/lite";

const buttonVariants = tv({
  base: "group relative flex cursor-pointer items-center justify-center gap-3 whitespace-nowrap font-heading font-medium text-sm leading-none! transition-all duration-300",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground!",
      outline: "border border-border bg-surface text-foreground",
      text: "text-foreground",
      secondary:
        "border border-transparent bg-secondary text-secondary-foreground hover:border-border hover:bg-secondary/60",
    },
    size: {
      base: "h-10 rounded-full px-4 text-[13px]",
      sm: "h-9 rounded-full px-3 text-xs",
      md: "h-12 rounded-full px-6",
      lg: "h-14 rounded-full px-7",
      icon: "h-10 w-10 rounded-2xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  ref,
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
