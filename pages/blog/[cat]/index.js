import Link from "next/link";
import Navigation from "../../components/navigation";

const blog = () => {
  return (
    <>
      <Navigation />
      <div className=" flex flex-col items-center justify-center w-screen h-screen px-8 py-10 xl:px-96 gap-10 bg-slate-50">
        <div className="z-10 flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold tracking-tight">Article List</h1>
        </div>
        <div className="flex flex-row gap-12">
          <Link href="/blog/article/learn-article">Article 1</Link>
          <Link href="/blog/article/what-article">Article 2</Link>
          <Link href="/blog/article/this-article">Article 3</Link>
          <Link href="/blog/article/news-article">Article 4</Link>
        </div>
        <hr className="bg-gray-100 w-full h-0.5" />
      </div>
    </>
  );
};

export default blog;
