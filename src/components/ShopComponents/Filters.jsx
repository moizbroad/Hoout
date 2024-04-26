import React, {useState} from "react";
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
  ])

  const handleChange = (clickedItem) => {
    setFilterData(prevFilterData => {
      return prevFilterData.map(item => {
        if (item.filter === clickedItem.filter) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      });
    });
  };
  

  return (
    <div className="max-w-[300px] md:max-w-[100%]  sm:max-w-[100%]    xs:max-w-[100%]   xl:min-h-[1050px] shadow-xl md:overflow-auto sm:overflow-auto  xs:overflow-auto   ">
      <span className="pt-[50px] md:pt-4 sm:pt-3 xs:pt-3   text-22 flex px-12 text-center md:justify-center font-bold ">
        Our assortment
      </span>

      <section className="md:flex sm:flex xs:flex ">
        {filterData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start px-12 lg:px-8 md:px-8 sm:px-6  xs:px-3    md:py-[0.5px]      items-center py-[5px]     "
            >
              <PaymentCard item={item} name={item.filter} isChecked={item.isChecked} removeBg onChange={handleChange} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Filters;
