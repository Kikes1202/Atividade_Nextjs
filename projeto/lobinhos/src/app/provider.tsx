'use client'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";


const client = new QueryClient();


export default function Providers({children} : {children: React.ReactNode}){


  return (
        <QueryClientProvider client={client}>
          {children}
        </QueryClientProvider>
  );
}
