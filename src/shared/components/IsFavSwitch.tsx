export const IsFavSwitch = ({
  isChecked,
  onChange,
  isDisabled,
}: {
  isChecked: boolean;
  onChange: () => void;
  isDisabled: boolean;
}) => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center justify-between gap-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            className="sr-only"
            disabled={isDisabled}
          />
          <span
            className={`block w-14 h-8 rounded-full ${
              isDisabled ? "bg-gray-200" : "bg-gray-300"
            }`}
          ></span>
          <span
            className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out ${
              isChecked ? "translate-x-6 bg-green-400" : ""
            } ${isDisabled ? "bg-gray-400" : ""}`}
          ></span>
        </label>
        <span className={isDisabled ? "text-gray-400" : ""}>Only favorite</span>
      </div>
    </div>
  );
};
