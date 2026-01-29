import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AEOAccordionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AEOAccordion({ title, description, children, defaultOpen = false }: AEOAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-purple-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      
      {/* Visible content when open */}
      {isOpen && (
        <div className="px-6 py-4 border-t border-purple-100 animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
      
      {/* Hidden content for SEO/AEO when collapsed - takes no visual space */}
      {!isOpen && (
        <div className="hidden" aria-hidden="true">
          {children}
        </div>
      )}
    </div>
  );
}

interface AEOAccordionGroupProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function AEOAccordionGroup({ children, title, subtitle }: AEOAccordionGroupProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600">{subtitle}</p>
          )}
        </div>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}
