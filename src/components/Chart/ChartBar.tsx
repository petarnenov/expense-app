import React, { ReactElement } from "react";
import "./ChartBar.css";

export type ChartBarItem = {
  key: string;
  label: string;
  value: number;
  maxValue: number;
};

interface Props {
  item: ChartBarItem;
}

export default function ChartBar({ item }: Props): ReactElement {
  let barFillHeight = "0%";
  if (item.maxValue > 0) {
    barFillHeight = `${Math.round((item.value / item.maxValue) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{item.label}</div>
    </div>
  );
}
