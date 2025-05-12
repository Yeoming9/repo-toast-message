import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toastOptionState } from "../../store/client";
import { EToastPosition } from "../../constants/enums";

const OptionBoxWrapper = styled.div`
  height: 50%;
  width: 35%;
  justify-content: center;
  align-content: center;
`;

const OptionDetail = styled.div`
  display: flex;
  border: 1px solid rgb(216, 218, 222);
  background-color: #f2f2f2;
  padding: 16px 24px;
`;

const Position = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Delay = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid black;
  width: 50%;
`;

const OptionBox = () => {
  const [toastOption, setToastOption] = useRecoilState(toastOptionState);

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToastOption((prev) => ({
      ...prev,
      position: e.target.value as EToastPosition,
    }));
  };

  return (
    <OptionBoxWrapper>
      {" "}
      Options
      <OptionDetail>
        <Position>
          Position
          {[
            "top-left",
            "top-center",
            "top-right",
            "bottom-left",
            "bottom-center",
            "bottom-right",
          ].map((pos) => (
            <label key={pos}>
              <input
                type="radio"
                name="position"
                value={pos}
                checked={toastOption.position === pos}
                onChange={handlePositionChange}
              />
              {pos}
            </label>
          ))}
        </Position>
        <Delay>
          Delay (ms)
          <Input
            type="number"
            value={toastOption.delay ?? ""}
            onChange={(e) =>
              setToastOption((prev) => ({
                ...prev,
                delay: e.target.value === "" ? null : Number(e.target.value),
              }))
            }
          />
        </Delay>
      </OptionDetail>
    </OptionBoxWrapper>
  );
};

export default OptionBox;
