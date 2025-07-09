'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
  useRef,
} from 'react';

interface SectionCounterContextType {
  registerSectionElement: (element: HTMLElement) => void;
  unregisterSectionElement: (element: HTMLElement) => void;
}

const SectionCounterContext = createContext<
  SectionCounterContextType | undefined
>(undefined);

export const SectionCounterProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const registeredElements = useRef<Set<HTMLElement>>(new Set());

  const assignSectionNumbers = useCallback(() => {
    // Get all elements with sectionCounter class in DOM order
    const allSectionElements = document.querySelectorAll('.sectionCounter');

    // Assign numbers starting from S01
    allSectionElements.forEach((element, index) => {
      const sectionNumber = `S${(index + 1).toString().padStart(2, '0')}`;
      element.textContent = sectionNumber;
    });
  }, []);

  const registerSectionElement = useCallback(
    (element: HTMLElement) => {
      registeredElements.current.add(element);

      // Use a small timeout to ensure all components have mounted
      setTimeout(() => {
        assignSectionNumbers();
      }, 0);
    },
    [assignSectionNumbers]
  );

  const unregisterSectionElement = useCallback((element: HTMLElement) => {
    registeredElements.current.delete(element);
  }, []);

  return (
    <SectionCounterContext.Provider
      value={{ registerSectionElement, unregisterSectionElement }}
    >
      {children}
    </SectionCounterContext.Provider>
  );
};

export const useSectionCounter = () => {
  const context = useContext(SectionCounterContext);
  if (!context) {
    throw new Error(
      'useSectionCounter must be used within a SectionCounterProvider'
    );
  }
  return context;
};

export const SectionCounter = () => {
  const { registerSectionElement, unregisterSectionElement } =
    useSectionCounter();
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      registerSectionElement(element);

      return () => {
        unregisterSectionElement(element);
      };
    }
  }, [registerSectionElement, unregisterSectionElement]);

  return (
    <p ref={elementRef} className="sectionCounter">
      S00
    </p>
  );
};
