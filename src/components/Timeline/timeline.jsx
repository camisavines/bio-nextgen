import React from "react";
import { timelineData } from "./data";
import { Step } from "./step";

export const Timeline = () => {
  return (
    <div style={{ padding: "15vh 0" }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }} className="px-5">
        {timelineData.map((item) => (
          <Step
            title={item.title}
            date={item.date}
            content={item.content}
            link={item.link}
            linkText={item.linkText}
            subTexts={item.subtexts}
            image={item.image}
          />
        ))}

      </div>
    </div>
  );
};
