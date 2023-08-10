import { MutableRefObject } from "react";
import { ICardElement } from "../../hooks/useCardGame";
import GameCard from "./GameCard";
import {
  LogoWrapper,
  ResultCardContainer,
  TableColumn,
  TechNameWrapper,
} from "./ResultsStyled";

interface ResultCardInnerProps {
  jsx: JSX.Element;
  str: string;
}

interface Props {
  handleClassName: (el: ICardElement) => string;
  columnName: string;
  array: {
    name: string;
    jsx: JSX.Element;
  }[];
  refs: MutableRefObject<HTMLDivElement[]>;
}

const ResultCardInner = ({ jsx, str }: ResultCardInnerProps) => {
  const capitalizeFirstLetter = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  const upperCaseTechs = ["css", "sql", "aws"];

  return (
    <ResultCardContainer>
      <LogoWrapper>{jsx}</LogoWrapper>
      <TechNameWrapper>
        {upperCaseTechs.includes(str)
          ? str.toUpperCase()
          : capitalizeFirstLetter(str)}
      </TechNameWrapper>
    </ResultCardContainer>
  );
};

const StackColumn = ({ handleClassName, columnName, array, refs }: Props) => {
  return (
    <TableColumn>
      <h2
        style={{
          whiteSpace: "nowrap",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {columnName}
      </h2>
      {array.map((el, i: number) => {
        return (
          <GameCard
            key={el.name}
            ref={(el) => (refs.current[i] = el)}
            height="var(--result-card-height)"
            width="var(--result-card-width)"
            cardName={el.name}
            isResult={true}
            className={handleClassName(el)}
          >
            <ResultCardInner jsx={el.jsx} str={el.name} />
          </GameCard>
        );
      })}
    </TableColumn>
  );
};

export default StackColumn;
