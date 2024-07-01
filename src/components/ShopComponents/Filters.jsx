import React, { useState } from "react";
import PaymentCard from "../Common/PaymentCard";

const Filters = ({ filters, filterCheck }) => {
  console.log(filters, "kkjkj");
  const [state, setState] = useState({
    filters: filters,
  });

  const handleChange = (clickedItem) => {
    setState((prev) => ({
      ...prev,
      filters: filters.map((item) => {
        if (item.filter === clickedItem.filter) {
          const updatedItem = { ...item, checked: !item.checked };
          filterCheck(updatedItem);
          return updatedItem;
        }
        return item;
      }),
    }));
  };

  return (
    <div className="max-w-[300px] md:max-w-[100%]  sm:max-w-[100%]    xs:max-w-[100%]   xl:min-h-[1050px] shadow-xl md:overflow-auto sm:overflow-auto  xs:overflow-auto   ">
      <span className="pt-[50px] md:pt-4 sm:pt-3 xs:pt-3   text-22 lg:text-20  flex px-8   justify-start   font-bold ">
        Our assortment
      </span>

      <section className="md:flex sm:flex xs:flex filterRowMain ">
        {state.filters.map((item, index) => {
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
