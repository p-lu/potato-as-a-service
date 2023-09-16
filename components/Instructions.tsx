import { Instruction } from "@/app/types/potato";
import styled from "@emotion/styled";
import InfoCard from "./InfoCard";

interface InstructionsProps {
  instructions: Instruction[];
}

const Instructions = ({ instructions }: InstructionsProps) => {
  return (
    <InfoCard title="Instructions">
      <ol>
        {instructions.map((instruction) => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </ol>
    </InfoCard>
  );
};
export default Instructions;
