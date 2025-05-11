
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Companies from "../components/Companies";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  useEffect(() => {
    // Register service worker for PWA support
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  // Request permission for notifications on page load
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        // Wait a few seconds before asking for permission
        setTimeout(async () => {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            toast({
              title: "Notifications enabled",
              description: "You'll now receive important updates from Lookscout",
            });
          }
        }, 5000);
      }
    };

    requestNotificationPermission();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonial />
        <Blog />
        <Companies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
