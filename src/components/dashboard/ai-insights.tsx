"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brain, Send } from "lucide-react";

type Message = {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hello, I'm your AI assistant. How can I help you analyze your lung cancer data today?",
    sender: "ai",
    timestamp: new Date(),
  },
];

const suggestions = [
  "Show high-risk patients",
  "Analyze latest scan results",
  "Summarize weekly trends",
  "Compare with previous month",
];

export function AIInsights() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: getAIResponse(input),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSuggestion = (suggestion: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      content: suggestion,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: getAIResponse(suggestion),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (query: string): string => {
    if (query.toLowerCase().includes("high-risk")) {
      return "I've identified 8 high-risk patients in the current dataset. 3 of them are new this week. Would you like to see their detailed reports?";
    } else if (query.toLowerCase().includes("latest scan")) {
      return "The latest scan results show a 12% increase in early detection rates compared to last month. The AI model confidence has improved to 92%.";
    } else if (query.toLowerCase().includes("weekly trends")) {
      return "This week's data shows a 5% decrease in false positives and a 3% increase in true positives. Overall, the system performance has improved by 7%.";
    } else if (query.toLowerCase().includes("previous month")) {
      return "Compared to the previous month, we've processed 23% more scans, with a 15% improvement in early-stage detection accuracy.";
    } else {
      return "I've analyzed the current data. We have 127 patients in the system, with 18 high-risk cases that require immediate attention. The AI model is performing at 91% accuracy.";
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center">
          <Brain className="h-4 w-4 mr-2" />
          AI Analysis Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex items-start gap-2 max-w-[80%]">
                {message.sender === "ai" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/10 text-primary">AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 text-sm ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {messages.length <= 2 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {suggestions.map((suggestion, i) => (
              <Button
                key={i}
                variant="outline"
                className="text-xs justify-start h-auto py-2"
                onClick={() => handleSuggestion(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Input
            placeholder="Ask about patient data..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}