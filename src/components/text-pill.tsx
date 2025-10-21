function TextPill ({text, className}: {text:string, className?: string}) {
    return(
        <div className={`p-1 rounded-full w-16 h-auto bg-primary ${className}`}>
            <p className="text-custom-black text-xs text-center">{text}</p>
        </div>
    );
}

export default TextPill;