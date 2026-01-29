
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { SEOProvider } from "./seo/components";

  createRoot(document.getElementById("root")!).render(
    <SEOProvider>
      <App />
    </SEOProvider>
  );
  