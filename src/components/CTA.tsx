
import React from "react";
import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const handleSendNotification = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        // Request permission
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
          // Register service worker
          const registration = await navigator.serviceWorker.ready;
          
          // Send a test notification using the service worker
          registration.showNotification('Lookscout Notification', {
            body: 'Thanks for enabling notifications!',
            icon: '/icon-192.png',
            data: {
              url: window.location.href
            }
          });
          
          toast({
            title: "Notification sent",
            description: "Check your notifications tray",
          });
          
          console.log('Notification sent!');
        } else {
          toast({
            title: "Notification permission denied",
            description: "Please enable notifications in your browser settings",
            variant: "destructive",
          });
          console.log('Notification permission denied');
        }
      } catch (error) {
        console.error('Error sending notification:', error);
        toast({
          title: "Error",
          description: "Could not send notification",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Not supported",
        description: "Push notifications are not supported in your browser",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-lookscout-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Welcome to your new digital reality that will rock your world truly at all throughout.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="btn-secondary bg-white text-lookscout-blue hover:bg-blue-50 flex items-center gap-2"
              onClick={handleSendNotification}
            >
              <BellRing size={18} />
              Send Notification
            </Button>
            <Button className="btn-secondary bg-transparent text-white border-white hover:bg-blue-800/20">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
