import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";

const BottomButtonsWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;
const BottomButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  width: 6rem;
  opacity: 0.85;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  height: 2.8rem;
  width: 2.8rem;
  background-color: #270207;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  font-size: 22px;
`;

const IconLabel = styled.p`
  color: white;
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.75;
  font-weight: 600;
`;

export default function BottomButtons() {
  return (
    <BottomButtonsWrapper>
      <BottomButton
        onClick={() => {
          window.open("https://twitter.com/corrupt_laptop", "_blank");
        }}
      >
        <IconWrapper>
          <FaXTwitter />
        </IconWrapper>
        <IconLabel>Twitter</IconLabel>
      </BottomButton>
      <BottomButton
        onClick={() => {
          window.open(
            "https://jupiter-terminal.dexscreener.com/?inputMint=HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7&outputMint=So11111111111111111111111111111111111111112",
            "_blank"
          );
        }}
      >
        <IconWrapper>
          <TbCurrencySolana />
        </IconWrapper>
        <IconLabel>Buy</IconLabel>
      </BottomButton>
      <BottomButton
        onClick={() => {
          window.open("https://t.me/HBcorruptlaptop", "_blank");
        }}
      >
        <IconWrapper>
          <FaTelegramPlane />
        </IconWrapper>
        <IconLabel>Telegram</IconLabel>
      </BottomButton>
    </BottomButtonsWrapper>
  );
}
