import React from "react";
import { TabContentStyled, HeadingStyled, ImgDownload } from "./styles/Styled";
import { Text } from "../../Text";
import downloadImage from "./images/download_en.png";

const TabDownload = () => (
  <>
    <HeadingStyled rank={4} text="Save data, download and go" size={"xlarge"} />
    <Text text="Download on your mobile or tablet and watch wherever you are" size={"default"} />
    <TabContentStyled>
      <ImgDownload src={downloadImage} alt="Save data, download and go " />
    </TabContentStyled>
  </>
);

export default TabDownload;
