import React, { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled } from "./styles/Styled";

function getLanguageSelectorItems() {
  return [
    {
      content: "English",
      value: "en"
    },
    {
      content: "العربية",
      value: "ar"
    },
    {
      content: "Français",
      value: "fr"
    }
  ];
}

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <HeaderStyled>
      <BurgerStyled
        isOpened={isBurgerMenuOpen}
        onClick={handleOpened}
        ariaLabel="Menu"
      />
      <Menu isOpened={isBurgerMenuOpen} />
      <Logo />
      <nav>
        <ListStyled
          data={{
            explore: {
              text: "Explore",
              url: "#",
              role: "link"
            },
            toggleMiniMode: {
              text: "Toggle Mini Mode",
              url: "#",
              role: "button"
            }
          }}
          link
        />
        <Dropdown
          items={getLanguageSelectorItems()}
          icon={"languageGlobe"}
          optionsPosition={"center"}
          selectedItem={0}
        />
      </nav>
    </HeaderStyled>
  );
}

export default Header;
