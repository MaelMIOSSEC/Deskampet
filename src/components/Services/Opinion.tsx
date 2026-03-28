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
    <div className="w-[500px] h-[200px] rounded-[25px] p-[15px] bg-white shadow-[8px_8px_14px_gray]">
      <p>⭐⭐⭐⭐⭐</p>
      <p>
        <i>{text}</i>
      </p>
      <div className="flex flex-row">
        <Avatar>
          <AvatarImage src={avatar} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-[15px]">
          <strong>{name}</strong>
          <p>Propriétaire de {animal}</p>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
