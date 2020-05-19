import React from "react";
import { List } from "../List";
import { FooterNavStyled, HeadingStyled } from "./styles/Styled";

const LINK_ROLE = "link";

function FooterNav() {
  return (
    <FooterNavStyled>
      <nav>
        <HeadingStyled rank={5} text="Questions?" size={"default"} />
        <List
          data={{
            contact: {
              text: "Contact",
              url: "#",
              role: LINK_ROLE,
              title: "Contact"
            },
            faq: {
              text: "FAQ",
              url: "#",
              role: LINK_ROLE,
              title: "FAQ"
            },
            terms: {
              text: "Terms & Conditions",
              url: "#",
              role: LINK_ROLE,
              title: "Terms & Conditions"
            }
          }}
          link
        />
      </nav>

      <nav>
        <HeadingStyled rank={5} text="Language" size={"default"} />
        <List
          data={{
            contact: {
              text: "English",
              url: "",
              title: "English"
            },
            faq: {
              text: "Arabic",
              url: "",
              title: "Arabic"
            },
            terms: {
              text: "Français",
              url: "",
              title: "Français"
            }
          }}
          link
        />
      </nav>
    </FooterNavStyled>
  );
}

export default FooterNav;
