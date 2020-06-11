import React, { PropsWithChildren } from 'react'
// import { RedirectProvider, LocalizationProvider, CompanyProvider, UserProvider, NavProvider } from './0_provider';

export function Provider(props: PropsWithChildren<{}>) {
  return (
    <>
      {props.children}
    </>   
  );
}
