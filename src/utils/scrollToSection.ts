/**
 * Scrolls to a specific section by its ID with smooth behavior
 * Handles offset manually for better control with sticky positioning
 * @param sectionId - The ID of the section to scroll to (without the # prefix)
 */
export const scrollToSection = (sectionId: string): void => {
  const targetSection = document.querySelector(`#${sectionId}`) as HTMLElement;

  console.log(`Scrolling to section: ${sectionId}`, targetSection);

  if (targetSection) {
    // Get element's position relative to document
    const rect = targetSection.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elementTop = rect.top + scrollTop;

    // Calculate responsive offset
    const headerOffset = window.innerWidth < 770 ? 64 : 62; // 4rem mobile, 3.125rem desktop
    const scrollPosition = elementTop - headerOffset;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
};
