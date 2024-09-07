import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Top() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;

    const handleMouseMove = (e) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const button = document.querySelector(".try-now-btn");
        if (button) {
          const rect = button.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div>
      {/* Background SVG */}

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-bold">Padh Le Bh.AI</div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-16 space-y-24">
          {/* Hero Section */}
          <section className="text-center space-y-8 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in-up">
              Master Your Studies with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Upload your syllabus, set your goals, and get a personalized study
              roadmap powered by AI.
            </p>
            <a href="https://padhlebhai.streamlit.app/" className="relative">
              <div className="button-container">
                <div
                  className="moving-border"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #3498db, #9b59b6, #e74c3c, #f1c40f, #1abc9c)`,
                  }}
                ></div>
                <button className="try-now-btn animate-fade-in-up animation-delay-400 flex items-center rounded-md">
                  Try Now <ArrowRight className="ml-2" />
                </button>
              </div>
            </a>
          </section>
        </main>
      </div>

      <style>{`
        .button-container {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          padding: 2px;
        }

        .moving-border {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          transition: all 0.3s ease;
        }

        .try-now-btn {
          position: relative;
          padding: 12px 24px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .try-now-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
