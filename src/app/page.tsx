import { TestButton, TestCarousel, TestTable } from "@/component";

export default function Home() {
  return (
    <main className="mt-24 text-4xl text-center text-red-700">
      <TestButton /> <TestTable />
      <TestCarousel />
    </main>
  );
}
