import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
        <Logo />
        
        <div className="space-y-20">
          <HeroSection />
          <StepsSection />
        </div>
        
        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 RewardHub. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
