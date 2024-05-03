const PaymentCard = ({ img, name, isChecked, removeBg, onChange, item }) => {
  return (
    <div className={`${removeBg ? "" : "bg-[#F5F4F8] rounded-md"} flex py-2`}>
      <label className="inline-flex items-center my-2 w-[] ">
        <input
          type="checkbox"
          className="form-checkbox rounded-full mr-4 md:mr-1 sm:mr-1 xs:mr-1 h-4 w-4 text-[#15803D]"
          checked={isChecked}
          onChange={() => onChange(item)}
        />
        {img && <img src={img} alt="" className="w-8 h-8 mr-2" />}
        <span className="ml-2 text-sm w-[100%]">{name}</span>
      </label>
    </div>
  );
};

export default PaymentCard;
