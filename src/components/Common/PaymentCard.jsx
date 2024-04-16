const PaymentCard = ({ img, name, isChecked }) => {
    return (
      <div className="bg-[#F5F4F8] rounded-md px-2 py-2">
        <label className="inline-flex items-center my-2 ">
          <input
            type="checkbox"
            className="form-checkbox rounded-full mr-4 h-4 w-4 text-[#15803D]"
            checked={isChecked}
          />
          <img src={img} alt="" className="w-8 h-8 mr-2" />
          <span className="ml-2 text-sm">{name}</span>
        </label>
      </div>
    );
  };
  
  export default PaymentCard;
  