import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import date from "../../data.json";
export default function Notify() {
  const [userData, setUserData] = useState(date);
  const message = userData.find(
    (user) => user.type === "sent you a private message"
  );
  const read = userData.map((user) => user.read === true);
  const markAsRead = () => {
    const clone = [...userData].map((item) => {
      item.read = true;
      console.log(item.read);
      return item;
    });
    setUserData(clone);
  };
  const handleClick = (id) => {
    const clone = [...userData];
    clone[id].read = true;
    setUserData(clone);
  };
  // console.log(read[0]);
  return (
    <div className="bg-[#fff] w-[375px] sm:w-[500px] lg:w-[730px]   p-[16px] lg:p-[30px] rounded-[15px] m-auto">
      <header className="flex justify-between items-center mb-[30px]">
        <div className="flex items-center gap-2">
          <h1 className="text-[#1C202B] text-[20px] font-extrabold lg:text-[24px]">
            Notifications{" "}
          </h1>
          <span className="text-[#fff] text-[14px] w-[45px] h-[25px] px-[11px] py-[4px] rounded-[6px] bg-myBlue flex justify-center items-center">
            {userData.filter((item) => !item.read).length}
          </span>
        </div>
        <button
          onClick={markAsRead}
          className={` bg-[#fff] border-none text-[#5E6778] text-[16px] leading-normal font-[500] hover:text-myBlue`}
        >
          {read[0] ? "Unread All" : "Mark all as read"}
        </button>
      </header>

      {userData.map((item, i) => {
        return (
          <div key={uuidv4()}>
            {item === message ? (
              <div
                key={item.id}
                className=" w-[343px] h-[80px] lg:w-[670px] bg-[#fff] mb-[250px] sm:mb-[180px]  lg:mb-[120px] lg:pl-[13px] rounded-[8px] flex px-[16px] py-[18px] flex-col"
              >
                <div className="flex">
                  <img
                    className=" w-[45px] h-[45px] rounded-[45px] mr-[20px] "
                    src={`./images/avatar-${item.author
                      .replace(" ", "-")
                      .toLocaleLowerCase()}.webp`}
                    alt="user img"
                  />
                  <div>
                    <span className="mr-[6px] text-[#1C202B] text-[16px] font-extrabold">
                      {item.author}
                    </span>
                    <span className="mr-[6px] text-[#5E6778] text-[16px] font-[500]  ">
                      {item.type}
                    </span>
                    <div>
                      <p className="text-[#939CAD] text-[16px] font-[500] ">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={` mt-[25px] w-[263px] sm:w-[380px] lg:w-[566px] ml-[55px]  border-[1px]  border-[#DDE7EE] p-[20px] cursor-pointer rounded-[5px] text-[#5E6778] hover:bg-[#E5EFFA]`}
                >
                  <span>{item.content}</span>
                </div>
              </div>
            ) : (
              // cut
              <div
                onClick={() => handleClick(i)}
                className={`w-[343px] sm:w-[470px] lg:w-[670px]  mb-[8px] rounded-[8px] flex items-center px-[16px] py-[16px] lg:pl-[13px] lg:px-[1px] lg:py-[18px] ${
                  item.read ? "bg-transparent" : "bg-[#F7FAFD]"
                }`}
                key={item.id}
              >
                <img
                  className=" w-[39px] h-[39px] rounded-[45px] mr-[20px] border-[1px] border-solid border-[#DDE7EE]"
                  src={`./images/avatar-${item.author
                    .replace(" ", "-")
                    .toLocaleLowerCase()}.webp`}
                  alt="user img"
                />
                <div>
                  <div className=" sm:flex items-center">
                    <span className="mr-[6px] text-[#1C202B] text-[14px] lg:text-[16px] font-extrabold">
                      {item.author}
                    </span>
                    <span className="mr-[6px] text-[#5E6778] text-[14px] lg:text-[16px] font-[500] ">
                      {item.type}
                    </span>
                    {item.content.includes("webp") ? (
                      <img
                        className=" w-[45px] ml-[0px] lg:ml-[180px]"
                        src={item.content}
                      ></img>
                    ) : (
                      <span
                        className={`${
                          item.content === "Chess Club" ? " text-myBlue" : ""
                        }  font-extrabold mr-[3px] text-[#5E6778] text-[14px] lg:text-[16px] cursor-pointer hover:text-[#0A327B]`}
                      >
                        {item.content}
                      </span>
                    )}
                    {item.read === false && (
                      <div className="w-[8px] h-[8px] rounded-full bg-[#F65552] my-3"></div>
                    )}
                  </div>
                  <p className="text-[#939CAD] text-[16px] font-[500] ">
                    {item.time}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
