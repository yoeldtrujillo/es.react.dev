/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {UnstyledOpenInCodeSandboxButton} from '@codesandbox/sandpack-react';
import {IconNewPage} from '../../Icon/IconNewPage';

export const OpenInCodeSandboxButton = () => {
  return (
    <UnstyledOpenInCodeSandboxButton
      className="text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1 ms-2 md:ms-1"
      title="Abrir en CodeSandbox">
      <IconNewPage
        className="inline ms-1 me-1 relative top-[1px]"
        width="1em"
        height="1em"
      />
      <span className="hidden md:block">Bifurcar</span>
    </UnstyledOpenInCodeSandboxButton>
  );
};
