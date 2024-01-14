import TrainingData from '@/features/components/TrainingData';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showData, setShowData] = useState<boolean>(false);
  const [inputVisible, setInputVisible] = useState(true);
  const inputRef = useRef(null);

  const showSumData = () => {
    setShowData((prev) => !prev);
    setInputVisible(true);
  };

  const handleInputFocus = () => {
    setInputVisible(false); // input 숨김
  };

  // Swift에서 호출할 함수
  useEffect(() => {
    // window.showInput = () => {
    //   setInputVisible(true); // input 보임
    // };
  }, []);
  return (
    <>
      <Container>
        <div onClick={showSumData}>본인 등급의 평균 {showData ? '가리기' : '보기'} </div>
        <TrainingData />
      </Container>
      <Textarea ref={inputRef} style={{ opacity: inputVisible ? 1 : 0 }} onFocus={handleInputFocus} />
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
