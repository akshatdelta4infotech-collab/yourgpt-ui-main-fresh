"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Shield, Clock, ChevronRight } from "lucide-react";
import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeView from "./CodeView";

export default function Landingpageone() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const codeContent = `
import { Button } from "@/components/ui/button";
import {
  Star,
  Shield,
  Clock,
  ChevronRight,
  Home,
  Database,
  Wifi,
  BarChart3,
  Smartphone,
} from "lucide-react";

export default function HeroSection() {
  return (
    <div className=" bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">⚡</span>
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">LIGHTNING</div>
            <div className="font-bold text-gray-900 text-sm -mt-1">PROXIES</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["Products", "Locations", "Use cases", "Resources", "Pricing"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center space-x-1 text-gray-700 cursor-pointer hover:text-gray-900"
              >
                <span>{item}</span>
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>
            )
          )}
        </div>

        {/* Auth */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">Login</button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Get Started
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </nav>

      {/* Rest of your component... */}
    </div>
  );
}`;

  return (
    <div className="w-full">
      <PreviewCodeHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="w-full min-h-[60vh]">
        {activeTab === "preview" ? (
          <div className="min-h-[60vh]">
            <div className="w-full min-h-[60vh] bg-gradient-to-b from-purple-50 to-blue-50">
              {/* Divider line */}
              <div className="h-px bg-gray-200 w-full"></div>

              {/* Hero Content */}
              <div className="w-full mx-auto px-6 py-8 bg-gradient-to-b from-blue-50 via-blue-100/40 to-blue-50">
                {/* Referral Banner */}
                <div className="flex justify-center mb-16">
                  <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm">
                    Our online referral program is now available. Earn Rewards
                  </div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-8">
                  <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-1">
                    Data Extraction
                  </h1>
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-5">
                    <span className="text-blue-600">Excellence</span>{" "}
                    <span className="text-gray-900">at Scale</span>
                  </h1>

                  <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Gather data efficiently with the industry-leading proxy
                    network and enjoy limitless web scraping solutions on the
                    most intense tasks.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="flex justify-center items-center space-x-8 mb-12">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-black fill-current" />
                    <span className="text-gray-700 font-medium">
                      Trustpilot
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-black fill-current" />
                    <span className="text-gray-700 font-medium">
                      4.5 rating
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 font-medium">
                      10M+ Proxy Pool
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 font-medium">
                      30 Day Free Trial
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mb-16">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                    Get Started
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Feature Icons */}
                <div className="relative flex justify-center items-center space-x-4 mb-24 px-72">
                  {/* Left decorative line with dot */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
                    <div className="w-80 h-0.5 bg-blue-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>

                  {/* Right decorative line with dot */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-80 h-0.5 bg-blue-500/20"></div>
                  </div>

                  {[
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-1-icon.a6ef8e72.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "Residential Proxies",
                      rotate: "-rotate-6",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-2-icon.ccc056ce.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "Data Center Proxies",
                      rotate: "rotate-3",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-3-icon.70a30262.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "ISP Proxies",
                      rotate: "-rotate-3",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-4-icon.775307d5.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "IPv6 Proxies",
                      rotate: "rotate-6",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-5-icon.580560e0.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "Mobile Proxies",
                      rotate: "-rotate-12",
                    },
                  ].map(({ bg, hoverText, rotate }, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center group relative transition-transform duration-300 ${rotate} group-hover:[transform:rotate(0deg)]`}
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                    >
                      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-xs px-3 py-1 rounded whitespace-nowrap -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                        {hoverText}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Partners */}
                <div className="w-full overflow-hidden">
                  <h3 className="text-gray-600 font-medium mb-8 tracking-wide text-center">
                    TRUSTED BY TOP PARTNERS IN THE INDUSTRY
                  </h3>

                  <div className="relative w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f8fafc] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f8fafc] to-transparent z-10"></div>

                    <div className="overflow-x-auto scrollbar-hide">
                      <div className="flex items-center py-4 animate-scroll min-w-max">
                        {[
                          {
                            img: "https://lightningproxies.net/_next/static/media/incogniton-logo.cd08b27e.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/multilogin-logo.31e76296.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/undetectable-logo.fb583c6f.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/adspower.f58c3762.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/gologin-logo.5379eaad.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/octobrowser-logo.a9f428ed.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/dolphinanty-logo.b90d60f3.svg",
                          },
                          // Duplicate items for continuous scroll effect
                          {
                            img: "https://lightningproxies.net/_next/static/media/incogniton-logo.cd08b27e.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/multilogin-logo.31e76296.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/undetectable-logo.fb583c6f.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/adspower.f58c3762.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/gologin-logo.5379eaad.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/octobrowser-logo.a9f428ed.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/dolphinanty-logo.b90d60f3.svg",
                          },
                        ].map((partner, index) => (
                          <div
                            key={index}
                            className="flex items-center px-8 first:pl-20 last:pr-20"
                          >
                            <img
                              src={partner.img}
                              alt="partner logo"
                              className="w-32 h-32 object-contain -mx-4"
                            />
                            <div className="h-8 w-px bg-gray-200 ml-8"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes scroll {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .animate-scroll {
                    animation: scroll 30s linear infinite;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>

                {/* Bottom Banner */}
                <div className="flex justify-center mt-16">
                  <div className="bg-white border border-gray-200 rounded-full px-6 py-3 text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
                    Learn how Lightning Proxies is transforming the proxy
                    landscape worldwide
                    <ChevronRight className="w-4 h-4 inline ml-2" />
                  </div>
                </div>
              </div>
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
