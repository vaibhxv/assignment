'use client'
import {useState, useCallback} from 'react';
import Head from 'next/head';
import {styled} from 'baseui';
import {Header} from './components/header';
import {DocumentView} from './components/document-view';
import {DocumentUploadModal} from './components/document-upload-modal';
import {ChatView} from './components/chat-view';


const Page = styled('div', ({$theme}) => ({
  position: 'absolute',
  background: $theme.colors.backgroundPrimary,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export const NAV_HEIGHT = 50;
const Container = styled('div', ({$theme}) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  background: $theme.colors.borderOpaque,
  gap: '1px',
  height: `calc(100% - ${NAV_HEIGHT}px)`,
}));

export type Message = {
  role: 'user' | 'assistant';
  content: string | null;
  isLoading?: boolean;
};

export type Document = {
  text: string;
  name: string;
} | null;

const Index = () => {
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false);
  
  const [activeDocument, setActiveDocument] = useState<Document>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [highlightedText, setHighlightedText] = useState<string | null>(null);

  const sendQuery = useCallback(async () => {
    if (!activeDocument) {
      return;
    }
    setHighlightedText(null);
    setInput('');
    setMessages((prev) => [
      ...prev,
      {role: 'user', content: input},
      {
        role: 'assistant',
        content: null,
        isLoading: true,
      },
    ]);
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        question: input,
        documentName: activeDocument.name,
      }),
    });

    const json = await response.json();

    setMessages((prev) => [
      ...prev.slice(0, prev.length - 1),
      {role: 'assistant', content: json.result},
    ]);
    if (json.sources.length > 0) {
      setHighlightedText(json.sources[0].pageContent);
    }
  }, [input, activeDocument]);

  return (
    <Page>
      <Head>
        <title>Document AI</title>
      </Head>
      
      <DocumentUploadModal
        isOpen={uploadModalIsOpen}
        setIsOpen={setUploadModalIsOpen}
        setActiveDocument={setActiveDocument}
      />
      <Header
        activeDocument={activeDocument}
        setUploadModalIsOpen={setUploadModalIsOpen}
        
      />
      <Container>
        <DocumentView
          activeDocument={activeDocument}
          highlightedText={highlightedText}
        />
        <ChatView
          messages={messages}
          input={input}
          setInput={setInput}
          sendQuery={sendQuery}
          activeDocument={activeDocument}
        />
      </Container>
    </Page>
  );
};

export default Index;
