import { questionStore } from "@/entities";
import { Button } from "antd";

export const Retry = () => {
  const handleClick = () => {
    localStorage.setItem("questions", null);
    window.location.reload();
  };
  return (
    <Button type="primary" onClick={handleClick}>
      Начать заного
    </Button>
  );
};
