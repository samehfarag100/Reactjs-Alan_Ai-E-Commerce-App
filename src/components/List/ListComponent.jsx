import React from "react";
import "./List.scss";
import CardComponent from "../Card/CardComponent";
import useListCardHooks from "../../Hooks/ListCardHook/useListCardHooks";

const ListComponent = ({ catId, maxPrice, sort, selectedSubCategory }) => {
  const [loading, data] = useListCardHooks({
    catId,
    maxPrice,
    sort,
    selectedSubCategory,
  });
  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <CardComponent item={item} key={item.id} />)}
    </div>
  );
};

export default ListComponent;
