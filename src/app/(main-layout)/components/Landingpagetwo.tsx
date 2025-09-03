"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Play, Globe, Presentation, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeView from "./CodeView";

export default function Landingpagetwo() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [currentAIIndex, setCurrentAIIndex] = useState(0);

  const aiPlatforms = [
    { name: "Grok", icon: "🤖", bgColor: "bg-black" },
    { name: "ChatGPT", icon: "🧠", bgColor: "bg-green-600" },
    { name: "Claude", icon: "🎯", bgColor: "bg-orange-500" },
    { name: "Gemini", icon: "💎", bgColor: "bg-blue-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAIIndex((prev) => (prev + 1) % aiPlatforms.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentPlatform = aiPlatforms[currentAIIndex];

  const codeContent = `
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Globe,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromptmonitorHero() {
  const [currentAIIndex, setCurrentAIIndex] = useState(0);

  const aiPlatforms = [
    { name: "Grok", icon: "🤖", bgColor: "bg-black" },
    { name: "ChatGPT", icon: "🧠", bgColor: "bg-green-600" },
    { name: "Claude", icon: "🎯", bgColor: "bg-orange-500" },
    { name: "Gemini", icon: "💎", bgColor: "bg-blue-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAIIndex((prev) => (prev + 1) % aiPlatforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentPlatform = aiPlatforms[currentAIIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Monitor and improve your <br /> brand visibility in AI/LLMs
          </h1>

          {/* Subheading with Animated AI Platforms */}
          <p className="text-xl text-gray-600 mb-12">
            Marketers use Promptmonitor to dominate{" "}
            <span className="relative inline-block" style={{ width: '90px', height: '28px' }}>
              <span 
                className={\`absolute top-0 left-0 inline-flex items-center gap-1 \${currentPlatform.bgColor} text-white px-2 py-1 rounded text-sm font-medium transition-all duration-500 ease-in-out\`}
                key={currentAIIndex}
                style={{
                  animation: 'slideInFromSame 0.6s ease-in-out'
                }}
              >
                <span className="w-4 h-4 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">{currentPlatform.icon}</span>
                </span>
                <span className="whitespace-nowrap">{currentPlatform.name}</span>
              </span>
            </span>{" "}
            AI visibility and drive more traffic, leads, and sales.
          </p>

          {/* Rest of component... */}
        </div>
      </section>
    </div>
  );
}`;

  return (
    <div className="w-full">
      <PreviewCodeHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="w-full min-h-[60vh]">
        {activeTab === "preview" ? (
          <div className="min-h-[60vh]">
            <div className="w-full min-h-[60vh] bg-gray-50">
              {/* Hero Section */}
              <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                  {/* Top banner */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <span className="text-blue-600 text-sm font-medium">
                      Get mentioned in AI with Promptmonitor
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-5xl  text-gray-900 mb-8 leading-tight">
                    Monitor and improve your <br /> brand visibility in AI/LLMs
                  </h1>

                  {/* Subheading */}
                  <p className="text-xl text-gray-600 mb-12">
                    Marketers use Promptmonitor to dominate{" "}
                    <span
                      className="relative inline-block"
                      style={{ width: "90px", height: "28px" }}
                    >
                      <span
                        className={`absolute top-0 left-0 inline-flex items-center gap-1 ${currentPlatform.bgColor} text-white px-2 py-1 rounded text-sm font-medium transition-all duration-500 ease-in-out`}
                        key={currentAIIndex}
                        style={{
                          animation: "slideInFromSame 0.6s ease-in-out",
                        }}
                      >
                        <span className="w-4 h-4 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
                          <span className="text-xs">
                            {currentPlatform.icon}
                          </span>
                        </span>
                        <span className="whitespace-nowrap">
                          {currentPlatform.name}
                        </span>
                      </span>
                    </span>{" "}
                    AI visibility and drive more traffic, leads, and sales.
                  </p>

                  <style jsx>{`
                    @keyframes slideInFromSame {
                      0% {
                        opacity: 0;
                        transform: translateY(0px) scale(0.95);
                      }
                      50% {
                        opacity: 0.5;
                        transform: translateY(-2px) scale(0.98);
                      }
                      100% {
                        opacity: 1;
                        transform: translateY(0px) scale(1);
                      }
                    }
                  `}</style>

                  {/* CTA Section */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="flex items-center rounded-lg px-4 py-4 flex-1 max-w-md">
                      {/* Globe Icon inside the border */}
                      <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 w-full bg-white">
                        <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <input
                          type="text"
                          placeholder="Enter your website url, e.g. vercel.com"
                          className="bg-transparent outline-none text-gray-700 flex-1"
                        />
                      </div>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium flex items-center gap-2 h-12">
                      <img
                        src="https://www.promptmonitor.io/assets/googleicon.svg"
                        alt="Google"
                        className="w-6 h-6"
                      />
                      Analyze For Free →
                    </Button>
                  </div>

                  <Button
                    variant="link"
                    className="mx-auto mb-8 flex items-center text-gray-600 hover:text-blue-600 bg-transparent hover:bg-transparent no-underline hover:no-underline "
                  >
                    <Presentation className="w-5 h-5 mr-2 transition-colors" />
                    <span className="transition-colors font-medium">
                      See live demo
                    </span>
                    <ArrowUpRight className="w-6 h-6 ml-2 transition-colors" />
                  </Button>

                  {/* Features */}
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                    {[
                      "10 days free trial",
                      "Cancel anytime",
                      "Get insights in 2 minutes",
                    ].map((feature, i) => (
                      <div className="flex items-center gap-2" key={i}>
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Dashboard Section - Now a single image with play button overlay */}
              <section className="max-w-7xl mx-auto px-4 pb-16">
                <div className="w-full flex items-center justify-center relative">
                  <Image
                    src="/promptmonitor-hero-img-latest.webp"
                    alt="Promptmonitor Dashboard Preview"
                    width={1200}
                    height={800}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                    priority
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group flex flex-col items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
                      {/* Play Button Circle */}
                      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="white"
                        />
                      </div>
                      {/* Watch Demo Text */}
                      <span className=" text-sm font-medium text-gray-500 px-3 py-1 rounded-full ">
                        Watch Demo
                      </span>
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16">
                  <div className="text-xl  text-gray-600">
                    Over 1300+ Companies Signed Up
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="w-full h-full max-w-none text-left">
              <CodeView language="tsx" code={codeContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
