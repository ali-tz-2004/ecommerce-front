import { Button } from "@/components/ui/button";
import { HeroData } from "./hero.types";

interface HeroContentProps {
  hero: HeroData;
}

export default function HeroContent({ hero }: HeroContentProps) {
  return (
    <div className="space-y-6">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
        New Collection
      </span>

      <h1 className="text-5xl font-bold leading-tight">{hero.title}</h1>

      <p className="text-lg text-muted-foreground">{hero.subtitle}</p>

      <Button size="lg">{hero.buttonText}</Button>
    </div>
  );
}
