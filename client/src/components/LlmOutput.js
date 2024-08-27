import React, { useState, useEffect } from 'react';

function LlmOutput({ query }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource(`http://localhost:4000/stream${query}`);

    eventSource.onmessage = (event) => {
      try {
        console.log("data: ", event)
        const data = JSON.parse(event.data); // Correctly parse event.data
        console.log('Received event:', data); // Log parsed data
        setMessages((prevMessages) => [...prevMessages, data.message]);
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
  }, []);

  return (
    <div>
      <h1>LLM Output</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default LlmOutput;
