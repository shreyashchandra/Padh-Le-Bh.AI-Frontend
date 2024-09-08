import { ArrowRight, Award, BookOpen, Clock } from "lucide-react";
import Top from "./Top";
import { useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Top />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-16 space-y-24">
          {/* Hero Section */}

          {/* About Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">What is Padh Le Bh.AI?</h2>
              <p className="text-gray-300">
                Padh Le Bh.AI is an innovative AI-powered platform that
                revolutionizes the way you study. By analyzing your syllabus and
                understanding your time constraints, it creates a tailored study
                roadmap to help you achieve your academic goals efficiently.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <BookOpen className="mr-2" /> Upload your syllabus
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2" /> Set your study time and deadlines
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2" /> Get a personalized study plan
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="./plai.png"
                  alt="Padh Le Bh.AI Interface"
                  className="rounded-md object-cover w-full h-full"
                  width={640}
                />
              </div>
            </div>
          </section>

          {/* Hackathon Win Section */}
          <section className="text-center bg-gray-800 py-12 px-4 rounded-lg">
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-3xl font-bold mb-4">
              Award-Winning Innovation
            </h2>
            <p className="text-xl text-gray-300">
              Padh Le Bh.AI proudly secured victory at a recent hackathon,
              recognized for its innovative approach to personalized learning.
            </p>
          </section>

          {/* Created By Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8">Meet the Creators</h2>
            <div className="flex flex-col items-center justify-center gap-28 lg:flex-row">
              {[
                {
                  name: "Aditya Yadav",
                  image: "https://avatars.githubusercontent.com/u/97109361?v=4",
                  linkd: "https://github.com/Adityauyadav",
                },
                {
                  name: "Shreyash Chandra",
                  image: "https://avatars.githubusercontent.com/u/78721024?v=4",
                  linkd: "https://github.com/shreyashchandra",
                },

                {
                  name: "Rashi Arora",
                  image: "https://avatars.githubusercontent.com/u/74211043?v=4",
                  linkd: "https://github.com/rashi12122001",
                },
              ].map((creator) => (
                <>
                  <a
                    key={creator.name}
                    href={creator.linkd}
                    className="w-40 h-40 rounded-[5rem] overflow-hidden"
                  >
                    <div
                      className="relative button-container  w-40 h-40 flex flex-col items-center justify-center"
                      onMouseMove={handleMouseMove}
                    >
                      <div
                        className="moving-border w-40 h-40 overflow-hidden"
                        style={{
                          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #3498db, #9b59b6, #e74c3c, #f1c40f, #1abc9c)`,
                        }}
                      ></div>
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-[9.5rem] h-[9.5rem] rounded-full mx-auto object-cover relative z-10"
                      />
                    </div>
                  </a>
                </>
              ))}
            </div>
          </section>
        </main>

        <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Padh Le Bh.AI. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
