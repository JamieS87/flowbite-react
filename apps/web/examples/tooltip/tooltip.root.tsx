import { Button, Tooltip } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Button, Tooltip } from "flowbite-react";

export function Component() {
  return (
    <Tooltip content="Tooltip content">
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

const codeRSC = `
import { Button, Tooltip } from "flowbite-react";

export function Component() {
  return (
    <Tooltip content="Tooltip content">
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

export function Component() {
  return (
    <Tooltip content="Tooltip content">
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}

export const root: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "tooltip/tooltip.root.tsx",
  component: <Component />,
};
