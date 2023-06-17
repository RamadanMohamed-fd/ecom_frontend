import { AiOutlineRight } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
const ListItem = (props) => {
  return (
    <div
      className={`flex justify-between   w-full pl-6 xl:pl-10 pr-4 items-center  `}
    >
      <h3 className="mr-4">{props.data.title}</h3>
      {props.data["sup"] && (
        <div>
          {props.show && <BiMinus className="text-lg xl:opacity-0" />}
          {!props.show && (
            <div className="xl:hidden block text-lg">
              <BiPlus />
            </div>
          )}
        </div>
      )}
      {props.data["sup1"] && (
        <div>
          {props.show && <BiMinus className="text-lg xl:opacity-0" />}
          {!props.show && (
            <div className="xl:hidden block text-lg">
              <BiPlus />
            </div>
          )}
        </div>
      )}
      <div className="xl:block hidden">
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default ListItem;
