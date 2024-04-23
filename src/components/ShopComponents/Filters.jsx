import React from "react";
import PaymentCard from "../Common/PaymentCard";

const Filters = () => {
  const filterData = [
    { id: 1, filter: "Oak", isChecked: true },
    { id: 1, filter: "Thermo Hout ", isChecked: false },
    { id: 2, filter: "Fire", isChecked: false },
    { id: 2, filter: "Hardwood", isChecked: false },
    { id: 2, filter: "Beacon", isChecked: false },
    { id: 2, filter: "Mahogany", isChecked: false },
    { id: 2, filter: "Brazilian Nuts", isChecked: false },
    { id: 2, filter: "Iron Store", isChecked: false },
    { id: 2, filter: "Parasols", isChecked: false },
  ];

  return (
    <div className="max-w-[300px] min-h-[1050px] shadow-xl">
      <span className="pt-[50px]  text-22 flex px-12 text-center font-bold">
        Our assortment
      </span>

      <section>
        {filterData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start px-12 items-center py-[5px]   "
            >
              <PaymentCard name={item.filter} isChecked={true} removeBg />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Filters;
