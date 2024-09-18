import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function LlmOutput({ query, original, translated }) {
  const [messages, setMessages] = useState(['']);
  const params = new URLSearchParams(query);
  const paramsObj = Object.fromEntries(params.entries());

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/stream/init`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ original, translated, chapter: paramsObj.chapter }),
    })
      .then(response => {
        const eventSource = new EventSource(`${process.env.REACT_APP_SERVER_URL}/stream${query}`);
        
        eventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => {
              const lastMessage = prevMessages[prevMessages.length - 1];
              const updatedLastMessage = lastMessage + data.message;
    
              return [...prevMessages.slice(0, -1), updatedLastMessage];
            });

            if (data.message.endsWith('\n')) {
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
      })
      .catch((error) => {
        console.error('Error during fetch:', error);
      });
  }, [query, original, translated, paramsObj.chapter]);

  return (
    <div>
      <h2></h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <ReactMarkdown>{msg}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LlmOutput;
