import React from "react";
import { Text, TextContent } from "@patternfly/react-core";
import { css } from "@emotion/css";

const styleSlots = {
  root: css({
    paddingBlockStart: "var(--pf-v5-global--spacer--md)",
  }),
} as const;

export const PageHeaderCaption: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <TextContent className={styleSlots.root}>
      <Text component="small">{children}</Text>
    </TextContent>
  );
};
