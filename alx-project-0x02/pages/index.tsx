import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
export default function Home() {
  return (
    <div>
      <Header/>
      <h1>Welcome to the NextJs Typescript project</h1>

      <Card title="Good days" content="This describes the good days we have had so far"/>
    </div>
  );
}
