import { useMain } from "./model/useMain";

import { Testing } from "@/widgets";
import * as classes from "./Main.module.scss";

export const Main = () => {
  const { questions } = useMain();

  return (
    <div className={classes.container}>
      <Testing questions={questions} />
    </div>
  );
};
