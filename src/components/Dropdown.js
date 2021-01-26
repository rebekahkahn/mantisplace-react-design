import React from "react";

const Dropdown = ({ dropdownOptions }) => {
  const mappedDropdownOptions = dropdownOptions.map((option) => {
    return <option key={option.value}>{option.value}</option>;
  });

  return (
    <form class="container-fluid mt-2">
      <div class="form-group row pr-1">
        <select class="form-control">{mappedDropdownOptions}</select>
      </div>
    </form>
  );
};

export default Dropdown;
