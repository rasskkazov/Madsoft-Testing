import { Progress, Typography } from "antd";

import { SubmitQuestion, SingleVar } from "@/features";
import { Question } from "@/entities";
import * as classes from "./Testing.module.scss";
import { useState } from "react";

const { Title } = Typography;

export const Testing = () => {
  const [progress, setProgress] = useState();
  return (
    <div className={classes.testing}>
      <Title level={4}>Тестирование</Title>
      <div className={classes.testing__progress}>
        <Progress steps={15} percent={50} size={[40, 10]} showInfo={false} />
      </div>
      <Question
        questionLine="Я Богдан Рассказов?Я Богдан Рассказов?Я Богдан Рассказов?"
        submitBtn={<SubmitQuestion />}
      >
        <SingleVar
          variants={[
            { label: "Богдан", value: "Bogdan" },
            { label: "Рассказов", value: "Rasskazov" },
          ]}
        />
      </Question>
    </div>
  );
};
