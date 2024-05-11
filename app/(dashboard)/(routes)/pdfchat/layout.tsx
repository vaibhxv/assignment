'use client'
import React, {useEffect, useState} from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, DarkTheme, BaseProvider} from 'baseui';
import {styletron} from './styletron';



function MyApp({
  children
}: {
  children: React.ReactNode;
}) {
  
  return (
    <StyletronProvider value={styletron}>
     <main>
        {children}
        </main>
        </StyletronProvider>
  );
}

export default MyApp;