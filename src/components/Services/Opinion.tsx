import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Opinion = ({
  text,
  avatar,
  name,
  animal,
}: {
  text: string;
  avatar: string;
  name: string;
  animal: string;
}) => {
  return (
    <div className="w-full max-w-md min-h-[200px] rounded-[25px] p-[20px] bg-white shadow-[8px_8px_14px_gray] mx-auto flex flex-col justify-between">
      <div>
        <p className="mb-2">⭐⭐⭐⭐⭐</p>
        <p className="mb-4">
          <i>{text}</i>
        </p>
      </div>
      <div className="flex flex-row items-center mt-auto">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-[15px]">
          <strong>{name}</strong>
          <p className="text-sm text-gray-600">Propriétaire de {animal}</p>
        </div>
      </div>
    </div>
  );
};

export default Opinion;