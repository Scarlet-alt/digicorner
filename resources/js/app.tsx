import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { PageTransition } from "./Components/PageTransition";

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob("./Pages/**/*.tsx")),
  setup({ el, App, props }) {
    createRoot(el).render(
      <PageTransition>
        <App {...props} />
      </PageTransition>
    );
  },
  progress: {
    color: "#B78656",
  },
});
