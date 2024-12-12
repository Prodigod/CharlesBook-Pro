import styled from "styled-components"

const FileContentImageWrapper = styled.div<{iconLocation?:string}>`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.iconLocation});
`

export default function FileContentImage({iconLocation}) {
  return (
    <FileContentImageWrapper iconLocation={iconLocation}></FileContentImageWrapper>
  )
}