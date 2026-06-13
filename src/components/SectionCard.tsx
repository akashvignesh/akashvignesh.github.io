"use client";
import { ReactNode, useRef, useEffect, useState } from 'react';
import { useTheme } from '@/src/context/ThemeContext';

interface SectionCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  id?: string;
}

export default function SectionCard({ title, children, icon, id }: SectionCardProps) {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={cardRef}
      id={id} 
      className={`section-card section-card--${themeClass} ${isVisible ? 'section-card--visible' : 'section-card--hidden'}`}
    >
      {/* Header */}
      <div className="section-card-header">
        {icon && (
          <div className={`section-card-icon section-card-icon--${themeClass}`}>
            {icon}
          </div>
        )}
        <h2 className={`section-card-title section-card-title--${themeClass}`}>
          {title}
        </h2>
      </div>
      
      {/* Content */}
      <div className={`section-card-content section-card-content--${themeClass}`}>
        {children}
      </div>
    </div>
  );
}
