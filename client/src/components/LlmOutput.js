import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function LlmOutput({ query }) {
  const [messages, setMessages] = useState(['']);

  useEffect(() => {
    const eventSource = new EventSource(`${process.env.REACT_APP_SERVER_URL}/stream${query}`);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          const updatedLastMessage = lastMessage + data.message;

          return [...prevMessages.slice(0, -1), updatedLastMessage];
        
        });
        if (data.message.endsWith('\n\n')) {
          setMessages((prevMessages) => [...prevMessages, '']);
        }
      } catch (error) {
        console.error('Error parsing event data:', error);
      }
    };
    eventSource.onerror = (error) => {
      console.error('EventSource error:', error);
    };
    return () => {
      eventSource.close();
    };
  }, [query]);

  return (
    <div>
      <h1>LLM Output</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <ReactMarkdown>{msg}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LlmOutput;
