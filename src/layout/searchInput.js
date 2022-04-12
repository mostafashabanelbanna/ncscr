import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) navigate(`/searchResult/${value}`);
      }}
    >
      <div className="form-group position-relative py-0">
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          style={{ borderRadius: "10px", width: "240px" }}
          type="text"
          value={value}
          className="form-control py-0"
          id="exampleFormControlInput1"
          placeholder="بحث"
        />
        <FaSearch
          style={{
            color: "000",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "8px",
          }}
        />
      </div>
    </form>
  );
};

export default SearchInput;
