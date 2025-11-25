import { Gift } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero shadow-soft">
        <Gift className="w-6 h-6 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold text-foreground tracking-tight">
        RewardHub
      </span>
    </div>
  );
};

export default Logo;
