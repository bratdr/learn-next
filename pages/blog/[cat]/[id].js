import Link from "next/link";
import Navigation from "../../components/navigation";

const article = () => {
  return (
    <>
      <Navigation />
      <div className=" flex flex-col items-center justify-center w-screen h-screen px-8 py-10 xl:px-96 gap-10 bg-slate-50">
        <div className="z-10 flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold tracking-tight">This Is Article</h1>
        </div>
        <Link href="/blog/article">Back To Article List</Link>
      </div>
    </>
  );
};

export default article;
