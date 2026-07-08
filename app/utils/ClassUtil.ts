/**
 * @description Merge class names with tailwind merge and clsx
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
