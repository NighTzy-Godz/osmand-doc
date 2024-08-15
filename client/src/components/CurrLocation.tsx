import { FaHome } from "react-icons/fa";

interface CurrLocationProps {
  location: string;
}

function CurrLocation({ location }: CurrLocationProps) {
  return (
    <div className="mb-5 gap-3 flex items-center">
      <FaHome className="w-4 h-4 text-textColor" />
      {location && (
        <>
          <p className="text-textColor text-xs">{">"}</p>
          <p className="text-mainColor px-3 py-2 text-xs rounded-xl bg-navColor">
            {location}
          </p>
        </>
      )}
    </div>
  );
}

export default CurrLocation;
