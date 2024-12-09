import Icon from "../icons";
import {

  Avatar,
  AvatarWrapper,
  Container,
  Name,
  ProfileWrapper,
  Subtitle,
} from "./styles";


export default function Header(props: any) {
  const { title, subTitle, image } = props;

  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={image} />
      </AvatarWrapper>
      <ProfileWrapper>
        <Name>{title}</Name>
        {subTitle && <Subtitle>{subTitle}</Subtitle>}
      </ProfileWrapper>
    </Container>
  );
}
