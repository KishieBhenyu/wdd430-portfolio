import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Hi, I&apos;m Kishie Bhenyu
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          I am a web and computer programming student passionate about building
          useful, responsive, and user-friendly web applications.
        </p>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold">My Projects</h2>
        <ProjectList />
      </section>
    </main>
  );
}