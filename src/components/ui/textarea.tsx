import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-36 w-full rounded-lg border border-line bg-void px-4 py-3 text-base text-fg transition-[border-color,box-shadow] duration-150 placeholder:text-faint focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
