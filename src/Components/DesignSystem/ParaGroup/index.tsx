import ParasWrapper from "@/Components/DesignSystem/ParasWrap";
import Paragraph, {ParagraphProps} from "../Paragraph";
import { useState } from "react";

type ParaChild = string | React.ReactNode;

interface ParaGroupProps {
  paras: ParaChild[];
  writeSpeed?: number;
  showWriteEffect?: boolean;
}

const ParaGroup: React.FC<ParaGroupProps> = ({
  paras,
  writeSpeed=50,
  showWriteEffect = false,
}) => {
  const [currentPara, setCurrentPara] = useState(0);

  const onParaComplete = () => {
    setCurrentPara((prevPara) => prevPara + 1);
  };

  return !!paras?.length ? (
    <ParasWrapper>
      {paras.map(
        (para, index) =>
          (!showWriteEffect || index <= currentPara) && (
            <Paragraph
              key={index}
              showWriteEffect={showWriteEffect}
              writeSpeed={writeSpeed}
              onParaComplete={onParaComplete}
            >
              {para}
            </Paragraph>
          )
      )}
    </ParasWrapper>
  ) : (
    <></>
  );
  
};

export default ParaGroup;