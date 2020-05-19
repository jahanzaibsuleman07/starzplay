import React from "react";
import { HeadingStyled, TabContentStyled, ItemUserStyled, IconUserStyled, TextStyled } from "./styles/Styled";

const TAB_TEXT_SIZE = "medium";

const TabUser = () => (
  <>
    <HeadingStyled rank={4} text="No contract. No Commitment" size={"xlarge"} />
    <TabContentStyled>
      <ul>
        <ItemUserStyled>
          <IconUserStyled name="free" />
          <TextStyled text="Start your free trial" size={TAB_TEXT_SIZE} />
        </ItemUserStyled>
        <ItemUserStyled>
          <IconUserStyled name="cancelPayment" />
          <TextStyled text="Cancel anytime" size={TAB_TEXT_SIZE} />
        </ItemUserStyled>
        <ItemUserStyled>
          <IconUserStyled name="ticket" />
          <TextStyled text="Choose your way to pay" size={TAB_TEXT_SIZE} />
        </ItemUserStyled>
        <ItemUserStyled>
          <IconUserStyled name="hands" />
          <TextStyled text="Register up to 5 devices" size={TAB_TEXT_SIZE} />
        </ItemUserStyled>
      </ul>
    </TabContentStyled>
  </>
);

export default TabUser;
