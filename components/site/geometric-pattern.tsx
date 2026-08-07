interface GeometricPatternProps {
    pattern?: "hero" | "subtle";
    className?: string;
  }
  
  export function GeometricPattern({
    pattern = "subtle",
    className = "",
  }: GeometricPatternProps) {
    if (pattern === "hero") {
      return (
        <svg
          className={`absolute inset-0 w-full h-full ${className}`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(5,150,105,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <circle
            cx="85%"
            cy="20%"
            r="200"
            fill="rgba(5,150,105,0.03)"
          />
          <circle
            cx="10%"
            cy="80%"
            r="150"
            fill="rgba(15,23,42,0.02)"
          />
        </svg>
      );
    }
  
    return (
      <svg
        className={`absolute inset-0 w-full h-full ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="subtle-dots"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.04)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#subtle-dots)" />
      </svg>
    );
  }