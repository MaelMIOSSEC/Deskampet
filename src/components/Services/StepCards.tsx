import { type LucideIcon } from "lucide-react";

const StepCards = ({ number, title, text, Icone }: { number: string; title: string; text: string, Icone: LucideIcon; }) => (
  <div className="relative border p-6 rounded-4xl w-64 h-64 mt-10 bg-white shadow-lg">
    <h2 className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#5fb9a9] text-white font-bold">
      {number}
    </h2>
    <Icone size={30} className="block mx-auto mt-3" />
    {parseInt(number) < 4 && <hr className="absolute top-28 left-63.5 w-58" />}
    <div className="pt-4 text-center">
      <p><b>{title}</b></p>
      <p>{text}</p>
    </div>
  </div>
);

export default StepCards;