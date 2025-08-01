import { LucideIcon } from "lucide-react";

interface ItemProps {
  onClick: () => void;
  label: string;
  icon: LucideIcon;
}

export const Item = ({ onClick, label, icon: Icon }: ItemProps) => {
  return (
    <div
      role="button"
      onClick={onClick}
      style={{ paddingLeft: "12px" }}
      className="group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 text-muted-foreground font-medium flex items-center cursor-pointer"
    >
      <Icon className="shrink-0 h-[18px] mr-2" />
      <span className="truncate">{label}</span>
    </div>
  );
};
