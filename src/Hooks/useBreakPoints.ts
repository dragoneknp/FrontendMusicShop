import useWindowDimensions from "./useWindowDimensions";

interface BreakPoints {
    [key: number]: number | string;
}
export const useBreakPoints = (breakPoints: BreakPoints) => {
    const { width } = useWindowDimensions();

    for (const [key, value] of Object.entries(breakPoints).sort(
        (a, b) => (b[0] as unknown as number) - (a[0] as unknown as number)
    )) {
        if ((key as unknown as number) < width) {
            return value;
        }
    }
    return Object.values(breakPoints)[Object.values(breakPoints).length - 1];
};
