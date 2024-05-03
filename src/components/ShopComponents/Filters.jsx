import React, { useState } from "react";
import PaymentCard from "../Common/PaymentCard";

const Filters = () => {
  const [filterData, setFilterData] = useState([
    { id: 1, filter: "Oak", isChecked: true },
    { id: 1, filter: "Thermo Hout ", isChecked: false },
    { id: 2, filter: "Fire", isChecked: false },
    { id: 2, filter: "Hardwood", isChecked: false },
    { id: 2, filter: "Beacon", isChecked: false },
    { id: 2, filter: "Mahogany", isChecked: false },
    { id: 2, filter: "Brazilian Nuts", isChecked: false },
    { id: 2, filter: "Iron Store", isChecked: false },
    { id: 2, filter: "Parasols", isChecked: false },
  ]);

  const handleChange = (clickedItem) => {
    setFilterData((prevFilterData) => {
      return prevFilterData.map((item) => {
        if (item.filter === clickedItem.filter) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      });
    });
  };

  return (
    <div className="max-w-[300px] md:max-w-[100%]  sm:max-w-[100%]    xs:max-w-[100%]   xl:min-h-[1050px] shadow-xl md:overflow-auto sm:overflow-auto  xs:overflow-auto   ">
      <span className="pt-[50px] md:pt-4 sm:pt-3 xs:pt-3   text-22 lg:text-20  flex px-8   justify-start   font-bold ">
        Our assortment
      </span>

      <section className="md:flex sm:flex xs:flex filterRowMain ">
        {filterData.map((item, index) => {
          return (
            <div
              key={index}
              className="filterRowBox flex justify-start px-6 md:pr-1 sm:pr-1 xs:pr-1  items-center py-[2px] md:min-w-[160px] sm:min-w-[163px] xs:min-w-[163px]"
            >
              <PaymentCard
                item={item}
                name={item.filter}
                isChecked={item.isChecked}
                removeBg
                onChange={handleChange}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Filters;
