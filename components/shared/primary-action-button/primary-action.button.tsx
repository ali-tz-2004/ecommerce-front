import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type PrimaryActionButtonProps = ComponentProps<typeof Button>;

export default function PrimaryActionButton({
  className,
  children,
  ...props
}: PrimaryActionButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-primary/30 transition-colors",
        "hover:bg-primary hover:text-primary-foreground",
        "dark:hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
