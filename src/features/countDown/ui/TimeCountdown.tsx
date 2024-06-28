import { Statistic } from "antd";
import { useCountDown } from "../model/useCountDown";

const { Countdown } = Statistic;

export const TimeCountdown = (props: { onFinish: () => void }) => {
  const { deadline } = useCountDown();
  return (
    <Countdown value={deadline} onFinish={props.onFinish} format="mm:ss" />
  );
};
