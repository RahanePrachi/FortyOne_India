import React from "react";
import Card from "./Card";
const NationalBoard = ({ boardMember }) => {
  return (
    <div className="flex flex-col ">

      <div className="w-full bg-gradient-to-t from-green-200 via-transparent to-orange-200  flex items-center justify-center text-center h-[70vh] mb-2 ">
        <p className="font-montserrat font-extrabold text-[58px] leading-[80px] ">
          National Board of 41 India
        </p>
      </div>

      <div className="w-full flex text-center py-2 ">
        <h2 className="font-montserrat font-bold w-full text-3xl leading-5 text-[#1C1C1C] text-center mt-4">
          
          Our Board Members
        </h2>
      </div>
      <div className="flex flex-row w-11/12 flex-wrap mx-auto gap-8 m-10 justify-center ">
        {boardMember.map((boardMember) => {
          //whenever you used map function you have to pass key .
          return <Card key={boardMember.id} {...boardMember}></Card>;
        })}
      </div>
    </div>
  );
};

export default NationalBoard;
