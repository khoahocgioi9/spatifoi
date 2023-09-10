import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Space } from "antd";

const suffix = (
  <SearchIcon
    style={{
      color: "#000000",
      cursor: "pointer",
    }}
  />
);

function SearchBar({ onSearch, searchVisible }) {
  return (
    <Space.Compact
      onSearch={onSearch}
      size="large"
      style={{ width: "150%", display: searchVisible ? "flex" : "none" }}
    >
      <Input addonBefore={suffix} placeholder="" />
    </Space.Compact>
  );
}

export default SearchBar;
