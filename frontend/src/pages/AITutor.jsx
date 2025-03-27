import React, { useState } from 'react';

const AITutor = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: question }),
      });

      const data = await res.json();
      console.log("Chatbot Response:", data);  // ✅ Debugging log
      setResponse(data.response || { result: "No response received." }); // ✅ Ensure response is an object with 'result'
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setResponse({ result: 'Failed to get response.' }); // ✅ Ensure fallback is also an object
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">AI Tutor Chatbot</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleAsk}
        className="bg-blue-500 text-white p-2 rounded w-full"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>
      <div className="mt-4 p-3 border rounded bg-gray-100">
        <strong>Response:</strong>
        <p>{response?.result || "No response received."}</p>  {/* ✅ Fixed rendering issue */}
      </div>
    </div>
  );
};

export default AITutor;
