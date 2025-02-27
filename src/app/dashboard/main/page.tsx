import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Main'
}

const MainrPage = () => {
  return (
    <div>
        <h1>
            Hello Main page
        </h1>
    </div>
  )
}

export default MainrPage;