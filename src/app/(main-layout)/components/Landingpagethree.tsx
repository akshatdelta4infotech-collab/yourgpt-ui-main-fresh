"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Users,
  MousePointer,
  Link2,
  Globe,
  Tag,
  FileText,
  BarChart3,
  FolderOpen,
  Hash,
  Copy,
  ExternalLink,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeView from "./CodeView";

export default function Landingpagethree() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [currentCompanySet, setCurrentCompanySet] = useState(0);

  // All companies divided into sets of 10 (2 rows x 5 columns)
  const allCompanies = [
    // Set 1 - 10 companies with SVG logos
    [
      {
        name: "Twilio",
        logo: "https://assets.dub.co/companies/twilio.svg",
        color: "text-red-500",
      },
      {
        name: "Superhuman",
        logo: "https://assets.dub.co/companies/superhuman.svg",
        color: "text-purple-500",
      },
      {
        name: "Perplexity",
        logo: "https://assets.dub.co/companies/perplexity.svg",
        color: "text-blue-500",
      },
      {
        name: "Vercel",
        logo: "https://assets.dub.co/companies/vercel.svg",
        color: "text-yellow-500",
      },
      {
        name: "Raycast",
        logo: "https://assets.dub.co/companies/raycast.svg",
        color: "text-green-500",
      },
      {
        name: "Framer",
        logo: "https://assets.dub.co/companies/framer.svg",
        color: "text-purple-500",
      },
      {
        name: "Huberman Lab",
        logo: "https://assets.dub.co/companies/hubermanlab.svg",
        color: "text-blue-500",
      },
      {
        name: "Tonies",
        logo: "https://assets.dub.co/companies/tonies.svg",
        color: "text-green-600",
      },
      {
        name: "Buffer",
        logo: "https://assets.dub.co/companies/buffer.svg",
        color: "text-red-500",
      },
      {
        name: "Product Hunt",
        logo: "https://assets.dub.co/companies/product-hunt.svg",
        color: "text-gray-600",
      },
    ],
    // Set 2 - 10 companies with SVG logos
    [
      {
        name: "Whop",
        logo: "https://assets.dub.co/companies/whop.svg",
        color: "text-red-500",
      },
      {
        name: "Clerk",
        logo: "https://assets.dub.co/companies/clerk.svg",
        color: "text-purple-500",
      },
      {
        name: "Cal.com",
        logo: "https://assets.dub.co/companies/cal.svg",
        color: "text-blue-500",
      },
      {
        name: "Bolt",
        logo: "https://assets.dub.co/companies/bolt.svg",
        color: "text-yellow-500",
      },
      {
        name: "Supabase",
        logo: "https://assets.dub.co/companies/supabase.svg",
        color: "text-green-500",
      },
      {
        name: "Tella",
        logo: "https://assets.dub.co/companies/tella.svg",
        color: "text-purple-500",
      },
      {
        name: "Polymarket",
        logo: "https://assets.dub.co/companies/polymarket.svg",
        color: "text-blue-500",
      },
      {
        name: "Granola",
        logo: "https://assets.dub.co/companies/granola.svg",
        color: "text-green-600",
      },
      {
        name: "Superlist",
        logo: "https://assets.dub.co/companies/superlist.svg",
        color: "text-red-500",
      },
      {
        name: "Jobber",
        logo: "https://assets.dub.co/companies/jobber.svg",
        color: "text-gray-600",
      },
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanySet((prev) => (prev + 1) % allCompanies.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const currentCompanies = allCompanies[currentCompanySet];

  const linkData = [
    {
      shortLink: "go.acme.com/launch",
      destination: "acme.com/announcements/new-feature-launch",
      date: "Jul 4, 2025",
      views: 0,
      clicks: 0,
      conversions: 0,
    },
    {
      shortLink: "go.acme.com/announcement",
      destination: "acme.com/blog/announcement-blog-post",
      date: "Jun 29, 2025",
      views: "1.5K",
      clicks: 487,
      conversions: 280,
    },
    {
      shortLink: "go.acme.com/signup",
      destination: "acme.com/signup-today",
      date: "Feb 14, 2025",
      views: "1.8K",
      clicks: 0,
      conversions: 0,
    },
    {
      shortLink: "go.acme.com/access",
      destination: "acme.com/get-access-to-our-new-platform",
      date: "Mar 21, 2025",
      views: 432,
      clicks: 280,
      conversions: 142,
    },
    {
      shortLink: "go.acme.com/flash-sale",
      destination: "acme.com/collections/summer-2025-collection-sale",
      date: "Apr 30, 2025",
      views: 967,
      clicks: 532,
      conversions: 190,
    },
    {
      shortLink: "go.acme.com/special-offer",
      destination: "acme.com/sale/utm_source=linkedin&utm_medium=social",
      date: "",
      views: 0,
      clicks: 0,
      conversions: 0,
    },
  ];

  const codeContent = `
"use client";

import { useState, useEffect } from "react";
import { 
  Search, Filter, MoreHorizontal, Eye, Users, MousePointer,
  Link2, Globe, Tag, FileText, BarChart3, FolderOpen, Hash,
  Copy, ExternalLink, ChevronDown, ArrowRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function DubHeroSection() {
  const [activeTab, setActiveTab] = useState("short-links");
  const [currentCompanySet, setCurrentCompanySet] = useState(0);

  // All companies divided into sets of 10 (2 rows x 5 columns)
  const allCompanies = [
    // Set 1 - 10 companies with SVG logos
    [
      { name: "Twilio", logo: "https://assets.dub.co/companies/twilio.svg", color: "text-red-500" },
      { name: "Superhuman", logo: "https://assets.dub.co/companies/superhuman.svg", color: "text-purple-500" },
      { name: "Perplexity", logo: "https://assets.dub.co/companies/perplexity.svg", color: "text-blue-500" },
      { name: "Vercel", logo: "https://assets.dub.co/companies/vercel.svg", color: "text-yellow-500" },
      { name: "Raycast", logo: "https://assets.dub.co/companies/raycast.svg", color: "text-green-500" },
      { name: "Framer", logo: "https://assets.dub.co/companies/framer.svg", color: "text-purple-500" },
      { name: "Huberman Lab", logo: "https://assets.dub.co/companies/hubermanlab.svg", color: "text-blue-500" },
      { name: "Tonies", logo: "https://assets.dub.co/companies/tonies.svg", color: "text-green-600" },
      { name: "Buffer", logo: "https://assets.dub.co/companies/buffer.svg", color: "text-red-500" },
      { name: "Product Hunt", logo: "https://assets.dub.co/companies/product-hunt.svg", color: "text-gray-600" },
    ],
    // Set 2 - 10 companies with SVG logos
    [
      { name: "Whop", logo: "https://assets.dub.co/companies/whop.svg", color: "text-red-500" },
      { name: "Clerk", logo: "https://assets.dub.co/companies/clerk.svg", color: "text-purple-500" },
      { name: "Cal.com", logo: "https://assets.dub.co/companies/cal.svg", color: "text-blue-500" },
      { name: "Bolt", logo: "https://assets.dub.co/companies/bolt.svg", color: "text-yellow-500" },
      { name: "Supabase", logo: "https://assets.dub.co/companies/supabase.svg", color: "text-green-500" },
      { name: "Tella", logo: "https://assets.dub.co/companies/tella.svg", color: "text-purple-500" },
      { name: "Polymarket", logo: "https://assets.dub.co/companies/polymarket.svg", color: "text-blue-500" },
      { name: "Granola", logo: "https://assets.dub.co/companies/granola.svg", color: "text-green-600" },
      { name: "Superlist", logo: "https://assets.dub.co/companies/superlist.svg", color: "text-red-500" },
      { name: "Jobber", logo: "https://assets.dub.co/companies/jobber.svg", color: "text-gray-600" },
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanySet((prev) => (prev + 1) % allCompanies.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentCompanies = allCompanies[currentCompanySet];

  const linkData = [
    { shortLink: 'go.acme.com/launch', destination: 'acme.com/announcements/new-feature-launch', date: 'Jul 4, 2025', views: 0, clicks: 0, conversions: 0 },
    { shortLink: 'go.acme.com/announcement', destination: 'acme.com/blog/announcement-blog-post', date: 'Jun 29, 2025', views: '1.5K', clicks: 487, conversions: 280 },
    // ... more data
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-inter relative">
      {/* Grid Pattern Background - Covers entire component */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: \`
              linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
            \`,
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>
      
      {/* Advanced Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: \`
            radial-gradient(ellipse 900px 500px at center 25%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.7) 45%, rgba(255, 255, 255, 0.2) 70%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, transparent 75%, rgba(255, 255, 255, 0.6) 90%, rgba(255, 255, 255, 0.9) 100%)
          \`
        }}
      ></div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center z-10">
        {/* Content with higher z-index */}
        <div className="relative z-10">
        {/* Announcement Banner */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md cursor-pointer mb-8">
          <span className="text-sm font-medium text-gray-700">Introducing Dub Partners</span>
          <span className="ml-2 text-sm text-gray-500">Read more</span>
          <ArrowRight className="w-3 h-3 ml-1 text-gray-400" />
        </div>

        {/* Main Heading */}
        <div className="relative mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight">Turn clicks into revenue</h1>
        </div>
        
        <div className="relative mb-10">
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dub is the modern link attribution platform for short links, conversion tracking, and affiliate programs.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button className="bg-black text-white px-8 py-4 text-lg shadow-lg hover:bg-gray-800">Start for free</Button>
          <Button variant="outline" className="px-8 py-4 text-lg">Get a demo</Button>
        </div>
        </div>
      </div>

      {/* Feature Buttons */}
      <div className="flex justify-center gap-2 mb-16">
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-sm font-medium text-gray-700 hover:text-gray-900 border-gray-600 hover:border-gray-800">
            Short Links
          </Button>
          <Button variant="outline" className="text-sm font-medium text-gray-700 hover:text-gray-900 border-gray-600 hover:border-gray-800">
            Conversion Analytics
          </Button>
          <Button variant="outline" className="text-sm font-medium text-gray-700 hover:text-gray-900 border-gray-600 hover:border-gray-800">
            Affiliate Programs
          </Button>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="grid-section relative overflow-visible px-4 border-grid-border border-y bg-neutral-100">
        <div className="max-w-6xl mx-auto py-20 relative">
          <HeroVideoDialog
            className="block"
            animationStyle="from-center"
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            thumbnailSrc="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=675&fit=crop&crop=center"
            thumbnailAlt="Dub Platform Demo Video"
          />
          {/* Video Bottom Gradient Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: \`linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(245, 245, 244, 0.5) 70%, rgba(245, 245, 244, 0.8) 85%, rgba(245, 245, 244, 0.95) 100%)\`
            }}
          ></div>
          
          {/* Black Overlapping Div - Positioned to overlap video */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1/2 h-16 bg-black rounded-lg shadow-lg z-50 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <Link2 className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Short Links</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Company Logos */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-5 grid-rows-2 gap-x-8 gap-y-6 items-center justify-items-center max-w-5xl mx-auto">
            {currentCompanies.map((company, idx) => (
              <div key={\`\${currentCompanySet}-\${idx}\`} className="group cursor-pointer w-full">
                <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-200">
                  <div
                    className={\`group-hover:scale-110 transition-transform duration-200\`}
                    style={{ animation: "fadeInSlide 0.8s ease-in-out" }}
                  >
                    {company.logo.startsWith('https://') ? (
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-20 h-20 object-contain"
                      />
                    ) : (
                      <span className={\`text-4xl \${company.color}\`}>
                        {company.logo}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="w-full font-inter">
      <PreviewCodeHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="w-full min-h-[60vh]">
        {activeTab === "preview" ? (
          <div className="min-h-[60vh] font-inter">
            <div className="w-full min-h-[60vh] bg-gradient-to-b from-white to-gray-50 relative">
              {/* Grid Pattern Background - Covers entire section */}
              <div className="absolute inset-0 opacity-40">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                  }}
                ></div>
              </div>

              {/* Gradient Overlay to fade grid near content and dashboard border */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse 900px 500px at center 25%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.7) 45%, rgba(255, 255, 255, 0.2) 70%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, transparent 75%, rgba(255, 255, 255, 0.6) 90%, rgba(255, 255, 255, 0.9) 100%)
                  `,
                }}
              ></div>

              {/* Hero Section */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center z-10">
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  {/* Announcement Banner */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md cursor-pointer mb-8">
                    <span className="text-sm font-medium text-gray-700">
                      Introducing Dub Partners
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      Read more
                    </span>
                    <ArrowRight className="w-3 h-3 ml-1 text-gray-400" />
                  </div>

                  {/* Main Heading */}
                  <div className="relative mb-6">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight">
                      Turn clicks into revenue
                    </h1>
                  </div>

                  <div className="relative mb-10">
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Dub is the modern link attribution platform for short
                      links, conversion tracking, and affiliate programs.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button className="bg-black text-white px-8 py-4 text-lg shadow-lg hover:bg-gray-800">
                      Start for free
                    </Button>
                    <Button className="bg-white border border-gray-300 text-gray-400 px-8 py-4 text-lg hover:bg-gray-100">
                      Get a demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Feature Buttons */}
              <div className="flex justify-center gap-2 mb-16 relative z-20">
                <div className="flex items-center gap-3">
                  <Button className="text-sm font-medium text-black bg-white border border-neutral-400 hover:bg-neutral-50 shadow-sm">
                    Short Links
                  </Button>

                  <Button className="text-sm font-medium text-black bg-white border border-neutral-400 hover:bg-neutral-50 shadow-sm">
                    Conversion Analytics
                  </Button>
                  <Button className="text-sm font-medium text-black bg-white border border-neutral-400 hover:bg-neutral-50 shadow-sm">
                    Affiliate Programs
                  </Button>
                </div>
              </div>

              {/* Video Demo Section */}
              <div className="grid-section relative overflow-visible px-4 border-grid-border border-y bg-neutral-100">
                <div className="max-w-4xl mx-auto py-20 relative">
                  <HeroVideoDialog
                    className="block"
                    animationStyle="from-center"
                    videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Dub Platform Demo Video"
                  />
                  {/* Video Bottom Gradient Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: `linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(245, 245, 244, 0.5) 70%, rgba(245, 245, 244, 0.8) 85%, rgba(245, 245, 244, 0.95) 100%)`,
                    }}
                  ></div>

                  {/* Black Overlapping Div - Positioned to overlap video */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-80 h-16 bg-black rounded-lg shadow-lg z-50 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <Link2 className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">
                        Short Links
                      </span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Logos - Outside grid pattern container */}
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid grid-cols-5 grid-rows-2 gap-x-8 gap-y-6 items-center justify-items-center max-w-5xl mx-auto">
                  {currentCompanies.map((company, idx) => (
                    <div
                      key={`${currentCompanySet}-${idx}`}
                      className="group cursor-pointer w-full"
                    >
                      <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-200">
                        <div
                          className={`group-hover:scale-110 transition-transform duration-200`}
                          style={{
                            animation: "fadeInSlide 0.8s ease-in-out",
                          }}
                        >
                          {company.logo.startsWith("https://") ? (
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="w-20 h-20 object-contain"
                            />
                          ) : (
                            <span className={`text-4xl ${company.color}`}>
                              {company.logo}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes fadeInSlide {
                  0% {
                    opacity: 0;
                    transform: translateY(20px) scale(0.9);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
              `}</style>
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
