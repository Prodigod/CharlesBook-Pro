import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Moveable from "react-moveable";

import { closeFolder, selectFolder } from "../../../containers/Folders/slice";
import { folderWithDraggingChildrenSelector } from "../../../containers/Folders/selectors";
import WindowTitleBar from "../../WindowTitleBar";

import { allFilesSelector } from "../../../containers/Files/selectors";

import FolderContentInner from "./FolderContentInner";

import generateWindowInitialPosition from "../../../utils/helpers/generateWindowInitialPosition";

const DEFAULT_WIDTH = "70vw";
const DEFAULT_HEIGHT = "70vh";

const MAX_WIDTH = "90vw";
const MAX_HEIGHT = "90vh";

const FolderContentContainer = styled.div`
  .moveable-control {
    display: none !important;
  }
`;

const FolderContentWrapper = styled.div<{
  zIndex?: number;
  initialPosition?: any;
}>`
  position: absolute;
  width: ${DEFAULT_WIDTH};
  height: ${DEFAULT_HEIGHT};
  background-color: #1e1e1f;
  z-index: ${(props) => props.zIndex};
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 6px 4px 6px rgba(10, 10, 11, 0.15);
`;

const FolderContent = ({ id, displayName, folderChildren, zIndex }) => {
  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isChildrenBeingDragged, setIsChildrenBeingDragged] =
    React.useState(false);

  const [thisFolderFiles, setThisFolderFiles] = React.useState([]);

  const targetRef = React.useRef<HTMLDivElement>(null);
  const moveableRef = React.useRef<Moveable>();

  const allFiles = useSelector(allFilesSelector);

  const folderWithDraggingChildren = useSelector(
    folderWithDraggingChildrenSelector
  );

  React.useEffect(() => {
    setIsChildrenBeingDragged(id === folderWithDraggingChildren);
  }, [folderWithDraggingChildren, id]);

  React.useEffect(() => {
    if (allFiles && Object.values(allFiles)?.length > 0) {
      const allFilesArr = Object.values(allFiles);

      const filesInFolder = allFilesArr?.filter((file: any) => {
        return folderChildren?.includes(file?.id);
      });

      setThisFolderFiles(filesInFolder);
    }
  }, [folderChildren, allFiles]);

  const initialPosition = React.useMemo(() => {
    const position = generateWindowInitialPosition();
    return position;
  }, []);

  const resizeToMax = () => {
    targetRef.current.style.width = MAX_WIDTH;
    targetRef.current.style.height = MAX_HEIGHT;
    setIsExpanded(true);

    setTimeout(() => {
      moveableRef.current.updateRect();
    }, 100);
  };

  const resizeToDefault = () => {
    targetRef.current.style.width = DEFAULT_WIDTH;
    targetRef.current.style.height = DEFAULT_HEIGHT;
    setIsExpanded(false);
    setTimeout(() => {
      moveableRef.current.updateRect();
    }, 100);
  };

  const handleResizeStart = () => {
    dispatch(selectFolder(id));
    setIsExpanded(false);
  };

  const handleResize = (e) => {
    const newWidth = e.width;
    const newHeight = e.height;

    e.target.style.width = `${newWidth}px`;
    e.target.style.height = `${newHeight}px`;
    e.target.style.transform = e.drag.transform;
  };

  return (
    <FolderContentContainer>
      <FolderContentWrapper
        ref={targetRef}
        zIndex={zIndex}
        initialPosition={initialPosition}
      >
        <WindowTitleBar
          backgroundColor="#343435"
          onMinimize={() => dispatch(closeFolder(id))}
          onClose={() => dispatch(closeFolder(id))}
          onMaximize={() => {
            if (isExpanded) {
              resizeToDefault();
            } else {
              resizeToMax();
            }
          }}
          windowName={displayName}
        ></WindowTitleBar>

        {thisFolderFiles?.length > 0 && (
          <FolderContentInner
            thisFolderFiles={thisFolderFiles}
          ></FolderContentInner>
        )}
      </FolderContentWrapper>
      <Moveable
        ref={moveableRef}
        //drag
        target={targetRef}
        draggable={!isChildrenBeingDragged}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        hideDefaultLines={true}
        onDragStart={(e) => {
          dispatch(selectFolder(id));
        }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        //resize
        resizable={true}
        keepRatio={false}
        throttleResize={1}
        onResizeStart={handleResizeStart}
        onResize={handleResize}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
        edge={true}
        origin={false}
        linePadding={10}
      ></Moveable>
    </FolderContentContainer>
  );
};

export default FolderContent;
