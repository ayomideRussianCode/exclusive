import clsx from 'clsx';

export default function Button({children, onClick, variant='primary', size='md', isLoading=false, disabled = false, className="", }) {
    const base = "rounded transition-all font-medium focus:outline-none disabled:opacity-50 disabled-cursor-not-allowed";

    const variants = {
        primary: "bg-red-400 text-white hover:bg-red-500",
        secondary: "bg-white text-black border border-black hover:bg-gray-100",
    };

    const sizes = {
        sm: "text-sm py-3 px-1.5",
        md: "text-base py-4 px-2",
        lg: "text-lg py-5 px-3",
    }

    return (
        
          <button
           onClick={onClick}
            disabled={disabled || isLoading}
            className={clsx(base, variants[variant], sizes[size], className)}>
          {isLoading ? "Loading..." : children}
                </button>
        
    )
}