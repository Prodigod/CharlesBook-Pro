import React from "react";
import {  useSelector } from "react-redux";

import styled from "styled-components";

import File from "../../File";
import { ItemTypes } from "../../../types/items";

import { allFoldersSelector } from "../../../containers/Folders/selectors";


const FolderContentInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  padding:5%;

`;

export default function FolderContentInner({ thisFolderFiles }) {

  const allFolders = useSelector(allFoldersSelector);

  return (
    <FolderContentInnerWrapper>
      {thisFolderFiles?.length > 0 &&
        thisFolderFiles.map((file) => {
          const {
            id,
            displayName,
            open,
            defaultIconPosition,
            iconLocation,
            fileLocation,
            type,
            goToUrl,
          } = file;

          const isLink = type === ItemTypes.link && goToUrl;

          const fileParent: any = Object.values(allFolders).filter(
            (folder: any) => {
              return folder?.folderChildren?.includes(id);
            }
          )[0]

          console.log("file!")
          console.log(file)
          

          console.log("fileParent!")
          console.log(fileParent)

          return (
            <File
              key={`file-${id}`}
              id={id}
              displayName={displayName}
              open={open}
              position={defaultIconPosition}
              iconLocation={iconLocation}
              isLink={isLink}
              goToUrl={goToUrl}
              type={type}
              fileLocation={fileLocation}
              inFolder={true}
              fileParent={fileParent?.id}
            ></File>
          );
        })}
    </FolderContentInnerWrapper>
  );
}
