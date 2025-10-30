'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HomePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/welll.jpg"
                alt="Well"
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#67BC2A]">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Platform Overview
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Complete healthcare platform for modern practices
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">EHR</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Electronic health records management
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Telehealth</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Virtual care and consultations
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#67BC2A]">
                    Who We Serve
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Nutritionists</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Tools for nutrition professionals
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Therapists</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Mental health practice management
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Coaches</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Health and wellness coaching
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Organizations</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Enterprise healthcare solutions
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="text-gray-700 hover:text-[#67BC2A] inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 focus:bg-green-50 focus:text-[#67BC2A] disabled:pointer-events-none disabled:opacity-50">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#67BC2A]">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Documentation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            API docs and guides
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest healthcare insights
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Support</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get help and support
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-[#67BC2A] focus:bg-green-50 focus:text-[#67BC2A]">
                          <div className="text-sm font-medium leading-none">Webinars</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Educational webinars
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="text-gray-700 hover:text-[#67BC2A] inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 focus:bg-green-50 focus:text-[#67BC2A] disabled:pointer-events-none disabled:opacity-50">
                    WellnessZ
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Sign In
              </Button>
              <Link href="/signup">
                <Button className="bg-[#67BC2A] hover:bg-[#5aaa24] text-white rounded-full font-medium">
                  Start for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Transform Your Coaching Business with WellnessZ
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stop juggling spreadsheets, WhatsApp chats, and endless manual work. WellnessZ gives you one powerful app to manage clients, deliver programs, and grow your income — all in one place.
              </p>


              <div className="space-y-6 max-w-lg">
                <div>
                  <label className="block text-sm font-medium text-[#67BC2A] mb-2">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67BC2A] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#67BC2A] mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67BC2A] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#67BC2A] mb-2">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67BC2A] focus:border-transparent outline-none"
                  />
                </div>

                <Link href="/signup" className="w-full">
                  <Button
                    size="lg"
                    className="w-full bg-[#67BC2A] hover:bg-[#5aaa24] text-white py-4 h-auto rounded-lg font-semibold text-lg shadow-lg"
                  >
                    Start Your 14-Day Free Trial
                  </Button>
                </Link>
                <p className="text-center text-sm text-gray-600 mt-3">
                  No credit card required • Cancel anytime • Join 3,000+ coaches
                </p>
              </div>
            </div>

            <div className="hidden lg:block space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 relative">
                <div className="aspect-video bg-gray-900 rounded-xl relative overflow-hidden">
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-[#67BC2A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#5aaa24] transition-colors">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold">Watch the Demo Video</p>
                      <p className="text-sm opacity-80">See how WellnessZ transforms coaching businesses</p>
                    </div>
                  </div>
                  {/* Background Image */}
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-600 font-medium">Transform Your Business Today</p>
                </div>
              </div>

              {/* Green Box Below Video */}
              <div className="bg-gradient-to-r from-[#67BC2A]/10 to-green-100 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 What You'll Discover in This Video:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• How 3,000+ coaches run their entire business using WellnessZ</li>
                  <li>• The secret to automating client tracking, payments & follow-ups</li>
                  <li>• How to get your own branded app starting at just ₹3,000/month</li>
                </ul>
                <p className="text-[#67BC2A] font-semibold mt-4">🔥 Join the movement that's transforming the wellness industry.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-20">
            The next generation of<br />wellness coaching is built on WellnessZ.
          </h2>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {/* Slide 1 - Success Stories Paragraph */}
              <CarouselItem>
                <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Real Success Stories from Our Community</h3>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      <strong className="text-[#67BC2A]">Mike Rosenbluth, CEO of Swing Therapeutics,</strong> shares how "Working with WellnessZ has allowed expansion of access to expert fibromyalgia treatment through the Swing Care clinic, helping to better serve patients, integrate with backend systems more quickly, and monitor patient outcomes while keeping their data secure."
                    </p>
                    <p className="text-lg">
                      Meanwhile, <strong className="text-[#67BC2A]">Rajesh Kumar from FitLife Studio in Delhi</strong> experienced incredible growth: "Before WellnessZ, managing 200+ clients was a nightmare. Now everything is automated - from meal plans to progress tracking. Our team productivity increased by 300% and client satisfaction scores hit 98%!"
                    </p>
                    <p className="text-lg">
                      <strong className="text-[#67BC2A]">Priya Sharma, a Nutrition Coach from Mumbai,</strong> transformed her entire business model: "WellnessZ completely transformed my coaching business. I went from spending 4 hours daily on admin work to just 30 minutes. My client retention increased by 60% and I doubled my revenue in 6 months!"
                    </p>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2 - Growth & Efficiency Stories */}
              <CarouselItem>
                <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Scaling Success Across India</h3>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      <strong className="text-[#67BC2A]">Sarah Johnson from Wellness Center</strong> achieved remarkable expansion: "Our client base grew from 50 to 200+ in just 8 months using WellnessZ's automated systems and client management tools. The platform's scalability allowed us to maintain quality while growing rapidly."
                    </p>
                    <p className="text-lg">
                      <strong className="text-[#67BC2A]">Dr. Amit Patel, a leading Nutritionist,</strong> found freedom in automation: "WellnessZ's automation features save me over 20 hours per week. I can now focus on what I love - helping my clients achieve their goals instead of drowning in paperwork and manual processes."
                    </p>
                    <p className="text-lg">
                      The platform has enabled <strong className="text-[#67BC2A]">thousands of wellness professionals</strong> to streamline their operations, increase client satisfaction, and grow their revenue while maintaining the personal touch that makes their services special.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 3 - Platform Impact */}
              <CarouselItem>
                <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">The WellnessZ Difference</h3>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Across India, wellness coaches are discovering that <strong className="text-[#67BC2A]">WellnessZ isn't just a tool - it's a business transformation platform.</strong> From solo practitioners to large wellness centers, our users consistently report significant improvements in efficiency, client satisfaction, and revenue growth.
                    </p>
                    <p className="text-lg">
                      The platform's comprehensive approach to <strong className="text-[#67BC2A]">client management, automated workflows, and integrated payment systems</strong> has helped over 3,000+ coaches reclaim their time and focus on what matters most - delivering exceptional results for their clients.
                    </p>
                    <p className="text-lg">
                      Whether you're just starting your wellness journey or looking to scale an established practice, <strong className="text-[#67BC2A]">WellnessZ provides the foundation for sustainable growth</strong> and long-term success in the rapidly evolving wellness industry.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}