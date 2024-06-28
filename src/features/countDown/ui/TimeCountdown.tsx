import React from "react";
import type { CountdownProps } from "antd";
import { Statistic } from "antd";

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 2;

export const TimeCountdown = (props: { onFinish: () => void }) => {
  return (
    <Countdown value={deadline} onFinish={props.onFinish} format="mm:ss" />
  );
};
