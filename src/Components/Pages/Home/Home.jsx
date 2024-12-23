import React, { useState } from 'react';
import Main from './Main';
import Overlay from './Overlay';
import CreateAssistant from './CreateAssistant';

export default function Home() {
  const [showCreateAssistant, setShowCreateAssistant] = useState(false);

  const handleShowCreateAssistant = () => {
    setShowCreateAssistant(true);
  };

  const handleHideCreateAssistant = () => {
    setShowCreateAssistant(false);
  };

  return (
    <div>
      <Main onShowCreateAssistant={handleShowCreateAssistant} />
      <div
        className={`create-assistant-wrapper ${
          showCreateAssistant ? 'open' : ''
        }`}
      >
        <CreateAssistant onClose={handleHideCreateAssistant} />
      </div>
      <Overlay />
    </div>
  );
}
