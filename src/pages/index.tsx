import TrainingData from '@/features/components/TrainingData';
import styled from '@emotion/styled';
import { useState } from 'react';

export default function Home() {
  const [showData, setShowData] = useState<boolean>(false);

  const showSumData = () => {
    setShowData((prev) => !prev);
  };
  return (
    <>
      <Container>
        <div onClick={showSumData}>본인 등급의 평균 {showData ? '가리기' : '보기'} </div>
        <TrainingData />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: var(--Spacing-m, 24px) var(--Spacing-m, 24px) 0px var(--Spacing-m, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Spacing-s, 16px);
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 20px;
  padding: 20px;
  position: fixed;
  bottom: 0;
`;
