import { motion } from 'motion/react';

export function About() {
    return (
        <section id="about" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Content removed - Our Mission section and cards */}
            </div>
        </section>
    );
}
