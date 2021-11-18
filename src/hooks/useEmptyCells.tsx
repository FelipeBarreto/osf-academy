import { EmptySlot } from "components/ui";
import { useCallback, useEffect, useState } from "react";

type emptyCellsConfig = {
  dataLength: number;
  cellMinWidth: number;
  cellPadding: number;
  gap: number;
  containerId: string;
};

const useEmptyCells = ({
  dataLength,
  cellMinWidth,
  cellPadding,
  gap,
  containerId,
}: emptyCellsConfig) => {
  const [emptyCellsCount, setEmptyCardCount] = useState(0);

  const calcEmptyCard = useCallback(() => {
    const containerWidth =
      document.getElementById(containerId)?.getBoundingClientRect().width || 0;
    const getGapCount = (currentCount: number): number => {
      if (
        containerWidth >=
        (currentCount + 1) * gap + (currentCount + 2) * cellMinWidth
      ) {
        return getGapCount(currentCount + 1);
      }
      return currentCount;
    };

    const gapCount = getGapCount(0);
    const maxElementsPerRow = gapCount + 1;

    if (dataLength % maxElementsPerRow === 0) {
      return 0;
    }
    return maxElementsPerRow - (dataLength % maxElementsPerRow);
  }, [cellMinWidth, gap, containerId, dataLength]);

  useEffect(() => {
    setEmptyCardCount(calcEmptyCard());
    const resizeListener = () => setEmptyCardCount(calcEmptyCard());
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, [calcEmptyCard]);

  return Array.from(Array(emptyCellsCount)).map((_, index) => (
    <EmptySlot key={index} padding={`${cellPadding}px`} />
  ));
};

export default useEmptyCells;
