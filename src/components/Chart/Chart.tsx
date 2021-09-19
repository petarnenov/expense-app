import React, { ReactElement } from "react";
import "./Chart.css";
import ChartBar, { ChartBarItem } from "./ChartBar";

interface Props {
  items: ChartBarItem[];
}

export default function Chart({ items }: Props): ReactElement {
  return (
    <div className="chart">
      {items.map((item:ChartBarItem) => (
        <ChartBar item={item} key={item.key} />
      ))}
    </div>
  );
}
