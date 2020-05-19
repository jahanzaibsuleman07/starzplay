import React from "react";
import {
  TabContentStyled,
  DeviceStyled,
  DeviceDataStyled,
  IconDeviceStyled,
  HeadingDeviceStyled,
  TextDeviceStyled
} from "./styles/Styled";

const TAB_TEXT_SIZE = "default";

const TabDevices = () => (
  <TabContentStyled>
    <ul>
      <DeviceStyled>
        <IconDeviceStyled name={"tv"} />
        <DeviceDataStyled>
          <HeadingDeviceStyled rank={5} text="Big screen" size={TAB_TEXT_SIZE} ariaLabelledby="Big screen" />
          <TextDeviceStyled text="Samsung TV, LG TV, Hisense TV, Sharp, Sony TV, TCL, Chromecast" size={TAB_TEXT_SIZE} />
        </DeviceDataStyled>
      </DeviceStyled>

      <DeviceStyled>
        <IconDeviceStyled name={"apple"} />
        <DeviceDataStyled>
          <HeadingDeviceStyled rank={5} text="iOS" size={TAB_TEXT_SIZE} ariaLabelledby="iOS" />
          <TextDeviceStyled text="iOS, Apple TV, iPhone and iPad" size={TAB_TEXT_SIZE} />
        </DeviceDataStyled>
      </DeviceStyled>

      <DeviceStyled>
        <IconDeviceStyled name={"android"} />
        <DeviceDataStyled>
          <HeadingDeviceStyled rank={5} text="Android" size={TAB_TEXT_SIZE} ariaLabelledby="Android" />
          <TextDeviceStyled text="Android TV, mobile and tablet" size={TAB_TEXT_SIZE} />
        </DeviceDataStyled>
      </DeviceStyled>

      <DeviceStyled>
        <IconDeviceStyled name={"computer"} />
        <DeviceDataStyled>
          <HeadingDeviceStyled rank={5} text="Desktop" size={TAB_TEXT_SIZE} ariaLabelledby="Desktop" />
          <TextDeviceStyled text="All browsers (Safari, Firefox, Chrome…)" size={TAB_TEXT_SIZE} />
        </DeviceDataStyled>
      </DeviceStyled>

      <DeviceStyled>
        <IconDeviceStyled name={"playstation"} />
        <DeviceDataStyled>
          <HeadingDeviceStyled rank={5} text="PS4" size={TAB_TEXT_SIZE} ariaLabelledby="PS4" />
        </DeviceDataStyled>
      </DeviceStyled>
    </ul>
  </TabContentStyled>
);

export default TabDevices;
