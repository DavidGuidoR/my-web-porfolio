type CircleProps = {
  children: React.ReactNode;
  bg: string;
  label: string;
  labelClass?: string;
};

function Circle ({children, bg, label, labelClass = ""}: CircleProps) {
    return(
    <div className="flex flex-col items-center gap-3">
        <div className={`grid place-items-center size-16 md:size-24 rounded-full shadow-lg ${bg}`}>
        {children}
        </div>
        <span className={`text-lg md:text-xl font-semibold tracking-widest ${labelClass}`}>
        {label}
        </span>
    </div>
    );
};

export default Circle;