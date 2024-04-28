import React from 'react';
import styles from './Button.module.scss'; // Import stylesheet for ButtonStyles

function ButtonStyles({
  text,
  colorText,
  colorBackground,
  colorOutline,
  hoverText,
  hoverBackground,
  hoverOutline,
  defaultStyle,
  blackText_noColorBackground_blackOutline,
  justText,
  blueText_noColorBackground_blueOutline,
  grayText_noColorBackground_grayOutline,
  href,
  size,
}) {
  let buttonStyles = [styles.button];

  if (justText) {
    buttonStyles.push(styles[colorText]);
    buttonStyles.push(styles.noColorBackground);
    buttonStyles.push(styles.noColorOutline);
    buttonStyles.push(styles[hoverText]);
  }

  if (blueText_noColorBackground_blueOutline) {
    buttonStyles.push(styles.blueText);
    buttonStyles.push(styles.noColorBackground);
    buttonStyles.push(styles.blueOutline);
    buttonStyles.push(styles[hoverBackground]);
    buttonStyles.push(styles[hoverText]);
  }

  if (blackText_noColorBackground_blackOutline) {
    buttonStyles.push(styles.blackText);
    buttonStyles.push(styles.noColorBackground);
    buttonStyles.push(styles.blackOutline);
    buttonStyles.push(styles.noHover);
  }

  if (grayText_noColorBackground_grayOutline) {
    buttonStyles.push(styles.grayText);
    buttonStyles.push(styles.noColorBackground);
    buttonStyles.push(styles.grayOutline);
    buttonStyles.push(styles.noHover);
  }

  if (defaultStyle) {
    buttonStyles.push(styles.whiteText);
    buttonStyles.push(styles.blueBackground);
    buttonStyles.push(styles.noColorOutline);
    buttonStyles.push(styles.noHover);
  }

  if (size === 'normalSize') {
    buttonStyles.push(styles.normalSize);
  } else if (size === 'bigSize') {
    buttonStyles.push(styles.bigSize);
  }

  const Component = href ? 'a' : 'button';

  return (
    <Component className={buttonStyles.join(' ')} href={href}>
      {text}
    </Component>
  );
}

export default ButtonStyles;
