import React from "react";

const Filters = () => {
  const filterData = [
    { filter: "Oak" },
    { filter: "Thermo Hout " },
    { filter: "Fire" },
    { filter: "Hardwood" },
    { filter: "Beacon" },
    { filter: "Mahogany" },
    { filter: "Brazilian Nuts" },
    { filter: "Iron Store" },
    { filter: "Parasols" },
  ];

  return (
    <div className="max-w-[300px] shadow-xl">
      <span className="pt-[50px]  text-22 flex justify-center text-cnter">
        {" "}
        Our assortment
      </span>

      <section>
        {filterData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center py-[20px]   "
            >
              {/* Use the `item.filter` to display the filter value */}
              <section className="flex gap-x-5">
                {" "}
                <div className="">
                  {" "}
                  <input type="Radio" />
                </div>
                <div>{item.filter}</div>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Filters;
