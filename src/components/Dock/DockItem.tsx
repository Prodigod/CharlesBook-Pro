import styled from "styled-components";

const DockItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 4px;
  transition: 0.175s all ease-in-out;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  font-family: inherit;
  font-weight: 400;

  &:hover {
    margin-bottom: 35px;

    @media (max-width: 550px) {
      margin-bottom: 0px;
      margin-top: 0;
      padding: 0;
    }
  }

  @media (max-width: 550px) {
    margin-top: 0px;
    margin-bottom: 4px;
  }
`;

const ToolTip = styled.div`
  position: absolute;
  top: -40px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px 3px;
  border: 1px solid rgb(112, 114, 114);
  backdrop-filter: blur(20px);
  transition: all 0.2s ease 0s;
  opacity: 0;
  visibility: hidden;
`;

const DockIconImage = styled.img`
  height: 3.59rem;
  transition: 0.175s all ease-in-out;
  z-index: 6000;

  @media (max-width: 600px) {
    height: 2.6rem;
  }

  &:hover {
    margin-bottom: 35px;

    @media (max-width: 600px) {
      margin-bottom: 0px;
    }
    .tool-tip {
      opacity: 1;
      visibility: visible;
    }

    height: 3.59rem;

    @media (min-width: 600px) {
      height: 90px;
      width: 88px;
    }
  }
`;

const DockPoint = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 9999px;
  background-color: white;
  justify-self: center;
  margin-right: 2px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default function DockItem({
  dockKey, // Accept the explicitly passed key
  dockItemIndex,
  displayName,
  iconLocation,
  isActive,
  onHandleClick,
  handleMouseEnter,
  handleMouseLeave,
  itemHovered,
  widget,
}: {
  dockKey: string; // Add dockKey type
  dockItemIndex: number;
  displayName: string;
  iconLocation: string;
  isActive: boolean;
  onHandleClick: () => void;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  itemHovered: number;
  widget?: string;
}) {
  return (
    <DockItemWrapper
      onClick={onHandleClick}
      onMouseEnter={() => handleMouseEnter(dockItemIndex)}
      onMouseLeave={handleMouseLeave}
    >
      <ToolTip className="dock-tooltip">{displayName}</ToolTip>
      <DockIconImage alt={displayName} src={iconLocation} />
      {isActive && <DockPoint />}
    </DockItemWrapper>
  );
}
