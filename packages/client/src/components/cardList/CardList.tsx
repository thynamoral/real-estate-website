import Card from "@/components/card/Card";
import { listData } from "@/lib/mockData";
import "./CardList.scss";

const CardList = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
