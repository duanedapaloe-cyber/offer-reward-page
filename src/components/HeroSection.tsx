import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Get a{" "}
          <span className="text-black dark:text-white font-extrabold">
            $1000 Reward
          </span>
          <br />
          for Completing a Few Quick Deals
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Simple Steps, Exclusive Opportunity
        </p>
      </div>
      
      <a 
        href="https://trkfy.org/aff_c?offer_id=880&aff_id=115643"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 bg-gradient-hero"
        >
          Claim Your Reward
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </a>
    </div>
  );
};

export default HeroSection;
