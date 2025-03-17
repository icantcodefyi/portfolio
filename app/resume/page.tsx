import BackButton from "@/components/shared/back";

export default function Resume() {
  return (
    <main className="min-h-screen py-10 px-4 container">
      <div className="max-w-[512px] mx-auto">
        <BackButton />
        <h1 className="my-4 text-3xl font-bold text-white">My Resume</h1>
        <div className="bg-neutral-800 p-4 rounded-lg shadow-lg mb-6">
          <div className="relative aspect-[8.5/11] w-full">
            <iframe
              src="/AniruddhResume.pdf"
              className="w-full h-full"
              title="Aniruddh's Resume"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
