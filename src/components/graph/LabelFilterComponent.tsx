function LabelFilterComponent({
  uniqueLabels,
  selectedLabels,
  handleCheckboxChange,
  colorObjs,
}: any) {
  if (!uniqueLabels?.length) return null;

  return (
    <div className="absolute flex flex-col gap-2 top-2 right-2 p-4 bg-indigo-900 text-pink-50 rounded-md max-h-screen overflow-y-auto">
      {uniqueLabels.map((label: any) => (
        <label key={label} className="flex items-center">
          <input
            type="checkbox"
            checked={selectedLabels.includes(label)}
            onChange={() => handleCheckboxChange(label)}
            className="mr-2"
          />
          {label}
          <span
            className="h-2.5 w-7.5 ml-2 mr-1"
            style={{ backgroundColor: colorObjs[label] }}
          ></span>
        </label>
      ))}
    </div>
  );
}

export default LabelFilterComponent;
