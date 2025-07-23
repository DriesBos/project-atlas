/**
 * Scrolls to a specific section by its ID with smooth behavior
 * Handles offset manually for better control with sticky positioning
 * @param sectionId - The ID of the section to scroll to (without the # prefix)
 */

// Store static top positions on page load to avoid sticky positioning issues
let staticSectionPositions: Map<string, number> | null = null;

/**
 * Initialize static section positions on page load
 * Call this once when the page is fully loaded
 */
export const initializeSectionPositions = (): void => {
  if (typeof window === 'undefined') return;

  staticSectionPositions = new Map();

  // Common section IDs to pre-cache
  const sectionIds = [
    'sectionIntro',
    'sectionNumbers',
    'sectionProblems',
    'sectionSolutions',
    'sectionOhio',
    'sectionMail',
    'sectionTerms',
  ];

  sectionIds.forEach((sectionId) => {
    const element = document.querySelector(`#${sectionId}`) as HTMLElement;
    if (element) {
      // Use offsetTop which is reliable and doesn't change with sticky positioning
      staticSectionPositions!.set(sectionId, element.offsetTop);
    }
  });
};

export const scrollToSection = (sectionId: string): void => {
  const targetSection = document.querySelector(`#${sectionId}`) as HTMLElement;

  if (targetSection) {
    let elementTop: number;

    // Try to use stored static position first (most reliable)
    if (staticSectionPositions && staticSectionPositions.has(sectionId)) {
      elementTop = staticSectionPositions.get(sectionId)!;
    } else {
      // Fallback to offsetTop (more reliable than getBoundingClientRect for sticky elements)
      elementTop = targetSection.offsetTop;

      // Store this position for future use
      if (!staticSectionPositions) {
        staticSectionPositions = new Map();
      }
      staticSectionPositions.set(sectionId, elementTop);
    }

    // Calculate responsive offset
    const headerOffset = window.innerWidth < 770 ? 64 : 62; // 4rem mobile, 3.125rem desktop
    const scrollPosition = elementTop - headerOffset;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
};
