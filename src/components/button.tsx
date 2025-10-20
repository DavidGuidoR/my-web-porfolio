function Button ({ className, children }: {className?: string, children?: React.ReactNode}) {
    return (
        <div className={`flex bg-primary hover:bg-secondary rounded-2xl text-base text-custom-black p-2 ${className}`}>
            {children}
        </div>
    );
}

export default Button;