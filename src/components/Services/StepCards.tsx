import { type LucideIcon } from "lucide-react";

const StepCards = ({ number, title, text, Icone }: { number: string; title: string; text: string, Icone: LucideIcon; }) => (
  <div className="relative border p-6 rounded-3xl w-full max-w-sm lg:w-64 lg:min-h-[16rem] mt-10 lg:mt-0 bg-white shadow-lg mx-auto">
    <h2 className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#5fb9a9] text-white font-bold">
      {number}
    </h2>
    <Icone size={30} className="block mx-auto mt-6" />
    
    {parseInt(number) < 4 && <hr className="hidden lg:block absolute top-24 -right-55 w-55 border-t-2 border-gray-300" />}
    
    <div className="pt-4 text-center">
      <p><b>{title}</b></p>
      <p className="mt-2 text-sm">{text}</p>
    </div>
  </div>
);

export default StepCards;