import Image from "next/image";

const products = [
  {
    image:
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp",
    desktopClassName: "left-1/2 top-0 z-30 w-80 -translate-x-1/2",
  },
  {
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp",
    desktopClassName: "right-0 top-20 z-20 w-40 rotate-12",
  },
  {
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    desktopClassName: "left-0 bottom-4 z-10 w-44 -rotate-12",
  },
  {
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp",
    desktopClassName: "right-12 bottom-0 z-20 w-48 rotate-6",
  },
];

export default function HeroImage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 lg:hidden">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex aspect-square items-center justify-center rounded-3xl bg-card p-6"
          >
            <Image
              src={product.image}
              alt=""
              width={220}
              height={220}
              className="h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="relative hidden h-155 lg:block">
        <div className="hidden dark:block">
          <div className="absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-muted blur-3xl" />
        </div>

        {products.map((product, index) => (
          <div key={index} className={`absolute ${product.desktopClassName}`}>
            <Image
              src={product.image}
              alt=""
              width={400}
              height={400}
              className="drop-shadow-2xl transition duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </>
  );
}
