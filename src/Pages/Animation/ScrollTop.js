import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll tout en haut dès que le composant est monté
  }, []);

  return null;
}
