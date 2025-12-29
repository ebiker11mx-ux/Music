"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");

      useEffect(() => {
          setMessages([{ role: "assistant", content: "Welcome! Type 'help' to see what I can do." }]);
            }, []);

              async function sendMessage() {
                  if (!input.trim()) return;
                      const userMsg = { role: "user", content: input };
                          setMessages((prev) => [...prev, userMsg]);

                              const res = await fetch("/api/chat", {
                                    method: "POST",
                                          headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({ message: input }),
                                                    });
                                                        const data = await res.json();

                                                            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
                                                                setInput("");
                                                                  }

                                                                    return (
                                                                        <main className="flex flex-col items-center p-6 max-w-xl mx-auto">
                                                                              <h1 className="text-2xl font-bold mb-4">Free AI Chat</h1>
                                                                                    <div className="w-full border rounded p-4 h-96 overflow-y-auto mb-4 bg-gray-900 text-white">
                                                                                            {messages.map((m, i) => (
                                                                                                      <div key={i} className={`mb-2 ${m.role === "user" ? "text-blue-300" : "text-green-300"}`}>
                                                                                                                  <strong>{m.role === "user" ? "You" : "AI"}:</strong> {m.content}
                                                                                                                            </div>
                                                                                                                                    ))}
                                                                                                                                          </div>
                                                                                                                                                <div className="flex w-full gap-2">
                                                                                                                                                        <input
                                                                                                                                                                  value={input}
                                                                                                                                                                            onChange={(e) => setInput(e.target.value)}
                                                                                                                                                                                      className="flex-1 border rounded p-2"
                                                                                                                                                                                                placeholder="Type a message..."
                                                                                                                                                                                                        />
                                                                                                                                                                                                                <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
                                                                                                                                                                                                                          Send
                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                            </main>
                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                              }