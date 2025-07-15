/**
 * Scrolls to a specific section by its ID with smooth behavior
 * Uses CSS scroll-margin-top for proper offset handling
 * @param sectionId - The ID of the section to scroll to (without the # prefix)
 */
export const scrollToSection = (sectionId: string): void => {
  const targetSection = document.querySelector(`#${sectionId}`) as HTMLElement;

  console.log(`Scrolling to section: ${sectionId}`, targetSection);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
