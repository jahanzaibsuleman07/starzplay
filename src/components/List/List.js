import React from "react";
import {
  UlStyled,
  LiStyled,
  DlStyled,
  DtStyled,
  DdStyled
} from "./styles/Styled";

// TODO: Improve the generation dynamic tag using "as" prop added in styled-components v4
const TypeList = {
  dl: DlStyled,
  ul: UlStyled
};

const List = ({
  className,
  data,
  type,
  size,
  color,
  display,
  separator,
  link
}) => {
  const ListComponent = TypeList[type || "ul"];
  return (
    <ListComponent
      className={className}
      size={size}
      color={color}
      display={display}
    >
      {type === "dl" || display === "block"
        ? Object.keys(data).map(item => (
            <React.Fragment key={item}>
              <DtStyled display={display}>
                {item}
                {separator}
              </DtStyled>
              <DdStyled display={display}>{data[item]}</DdStyled>
            </React.Fragment>
          ))
        : Object.keys(data).map(item => (
            <LiStyled key={item} display={display}>
              {link ? (
                <a
                  href={data[item].url || ""}
                  role={data[item].role || ""}
                  title={data[item].title || ""}
                >
                  {data[item].text || ""}
                </a>
              ) : (
                data[item]
              )}
            </LiStyled>
          ))}
    </ListComponent>
  );
};

export default List;
