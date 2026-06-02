import { FlipCardGallery } from "@/components/FlipCardGallery";
import { portfolioData } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair-display)]" style={{ color: "var(--color-primary)" }}>
          Cinematic Beauty Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the stunning before and after transformations. Click on any image to reveal the magic.
        </p>
      </header>

      <main className="flex flex-col gap-16">
        {portfolioData.map((category) => (
          <section key={category.id} className="scroll-mt-20" id={category.id}>
            <div className="mb-8 border-b pb-4">
              <h2 className="text-3xl font-semibold font-[family-name:var(--font-playfair-display)]">
                {category.title}
              </h2>
            </div>
            <FlipCardGallery transformations={category.transformations} />
          </section>
        ))}
      </main>

      <footer className="mt-20 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Cinematic Beauty. All rights reserved.</p>
      </footer>
    </div>
  );
}
