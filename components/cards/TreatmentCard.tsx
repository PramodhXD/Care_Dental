import { ReactNode } from "react";

interface TreatmentCardProps {
  icon: ReactNode;
  title: string;
}

export default function TreatmentCard({
  icon,
  title,
}: TreatmentCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800">
          {title}
        </h3>
      </div>
    </div>
  );
}
