import Image from "next/image";
import Card from "@/components/Card";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-lg font-bold"> hello this is from main page.tsx </h1>
      <Card title="CARD 1" description="THIS IS FIRST CARD" />
      <Card title="CARD 2" description="THIS IS SECOND CARD"/>
      <Card title="CARD 3" description="THIs IS THIRD CARD"/>
    </div>
  );
}
