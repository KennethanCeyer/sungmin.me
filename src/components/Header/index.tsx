import Logo from "@/assets/images/logo.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const HeaderContainer = styled.header({
  display: "flex",
  alignItems: "center",
  height: 60,
  backgroundColor: "#ffffff",
});

const HeaderInner = styled.div({
  display: "flex",
  width: 1200,
  margin: "0 auto",
  justifyContent: "space-between",
  alignItems: "center",
});

const HeaderSectionLogo = styled.div({
  display: "flex",
});

const HeaderSectionMenu = styled.div({
  display: "flex",
});

const HeaderLink = styled(Link)({});

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderSectionLogo>
          <HeaderLink href="/">
            <Image height={32} src={Logo} alt="R.MarkAI" />
          </HeaderLink>
        </HeaderSectionLogo>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
