import { HeroData } from "./hero.types";

interface HeroContentProps {
  hero: HeroData;
}

export default function HeroContent({ hero }: HeroContentProps) {
  return (
    <div className="space-y-6">
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        New Collection
      </span>

      <h1 className="text-5xl font-bold leading-tight">{hero.title}</h1>

      <p className="text-lg text-gray-500 dark:text-gray-400">
        {hero.subtitle}
      </p>

      <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
        {hero.buttonText}
      </button>
    </div>
  );
}
