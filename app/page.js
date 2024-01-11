import NavBar from "./components/Home/NavBar";
import NoticeBoard from "./components/Notice/NoticeBoard";

export default function Home() {
  return (
    <main className=" bg-white flex flex-col items-center justify-start h-screen w-screen">
      <NavBar />
      <NoticeBoard />
    </main>
  );
}
