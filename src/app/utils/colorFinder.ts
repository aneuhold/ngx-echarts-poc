/**
 * Gets the color at runtime of the provided CSS variable name.
 *
 * For example `--color-primary`
 */
export default function getColor(colorVariableName: string) {
  return getComputedStyle(document.body).getPropertyValue(colorVariableName);
}
