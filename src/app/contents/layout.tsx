import AppHeader from '@/components/AppHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        />
        <AppHeader />
        <header className="text-white p-9">
          <h1 className="font-bold"></h1>
        </header>
        <main className="flex justify-around py-14">
          <article className="max-w-2xl prose prose-xl">{children}</article>
        </main>
    </>
  );
}