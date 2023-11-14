export function capitalizeFirstLetter(string: string) {
    const trimmedStr = string.trim();
    return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1);
}
