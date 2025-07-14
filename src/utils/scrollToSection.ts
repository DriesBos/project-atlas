/**
 * Scrolls to a specific section by its ID with smooth behavior
 * @param sectionId - The ID of the section to scroll to (without the # prefix)
 */
export const scrollToSection = (sectionId: string): void => {
  const bodyElement = document.body;
  const targetSection = document.querySelector(`#${sectionId}`) as HTMLElement;

  if (bodyElement && targetSection) {
    const offsetTop = targetSection.offsetTop;

    // Try scrolling the body instead of main
    bodyElement.scrollTop = offsetTop;

    // Also try window.scrollTo as fallback
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};
