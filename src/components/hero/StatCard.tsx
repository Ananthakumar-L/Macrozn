
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  description: string;
  icon: React.ReactNode;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description, icon, subtitle }) => {
  return (
    <div className="bg-gray-100 rounded-xl border border-gray-100 relative overflow-hidden group h-full">
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6936F5]/10 text-[#6936F5] mb-6 relative z-10">
          {icon}
        </div>
        <div className="flex items-baseline gap-1">
          <div className="text-4xl md:text-5xl font-bold text-[#6936F5] font-inter relative z-10">{value}</div>
        </div>
        <div className="text-convrt-dark-blue/80 mt-2 font-inter text-lg md:text-xl font-semibold relative z-10">
          {description}
        </div>
        {subtitle && (
          <div className="text-convrt-dark-blue/60 text-sm mt-auto relative z-10 leading-relaxed">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
