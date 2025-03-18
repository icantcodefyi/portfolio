"use client";

export default function Resume() {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const pdfBuffer = await fetch("/AniruddhResume.pdf").then((res) =>
      res.arrayBuffer()
    );
    const blob = new Blob([pdfBuffer], { type: "application/pdf" });
    const blobURL = URL.createObjectURL(blob);
    window.open(blobURL);
  };

  return (
    <div
      className="text-neutral-600 text-sm hover:underline cursor-pointer"
      onClick={handleClick}
    >
      Resume
    </div>
  );
}
