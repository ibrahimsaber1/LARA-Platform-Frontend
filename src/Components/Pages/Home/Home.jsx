import React from 'react';
import Main from './Main';
import Overlay from './Overlay';
import CreateAssistant from './CreateAssistant';

export default function Home() {
  return (
    <div>

      <Main />
      <CreateAssistant/>

      <Overlay />
    </div>
  );
}
