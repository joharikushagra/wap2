import React from "react";
import { Image, LoginBtn, LoginCard, LoginContainer } from "./styles/loginCard";
import { auth, provider } from "../../firebase";

const loginCard = ({
  showLoginBtn = true,
  img = "images/whatsapp-logo-png-2259.png",
  ...restProps
}) => {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <LoginContainer>
      <LoginCard>
        <Image src={img} />
        {showLoginBtn && (
          <LoginBtn onClick={handleSignIn}>Login By Gmail</LoginBtn>
        )}
      </LoginCard>
    </LoginContainer>
  );
};
export default loginCard;
