import { portfolio } from "@/data/portfolio";
import { GateMenu } from "@/components/gate-menu";

const { person } = portfolio;

export const metadata = {
  description: person.seoDescription,
};

export default function Home() {
  return <GateMenu />;
}
