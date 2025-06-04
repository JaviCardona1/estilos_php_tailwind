import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return visible ? (
    <Button
      variant="primary"
      className="position-fixed bottom-0 end-0 m-4 rounded-circle"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </Button>
  ) : null;
}
