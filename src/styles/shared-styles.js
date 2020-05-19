// ShadowStyled - Mixin
export function shadowStyled(position, positionValue = 0, height, color, opacity = 1, zIndex = 5) {
  return `
    width: 100%;
    height: ${height};
    position: absolute;
    content: "";
    background: linear-gradient(to ${
      position === "top" ? "bottom" : "top"
    }, rgba(${color},1) 0%, rgba(${color},0) 100%);
    z-index: ${zIndex};
    ${position}: ${positionValue};
    opacity: ${opacity};
  `;
}

// Text vertical overflow
export function textOverflowVertical(lines) {
  return `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

// Pseudoelement
export function pseudo(position, elWidth, elHeight) {
  return `
    content: '';
    position: ${position};
    width: ${elWidth};
    height: ${elHeight};
    left: 0;
    top: 0;
  `;
}

// Avoiding Text Shifting when hover effect change the weight of the font
export function avoidTextShifting(fontWeight) {
  return `
      &:after {
        display: block;
        content: attr(title);
        font-weight: ${fontWeight};
        height: 1px;
        color: transparent;
        overflow: hidden;
        visibility: hidden;
      }
  `;
}
