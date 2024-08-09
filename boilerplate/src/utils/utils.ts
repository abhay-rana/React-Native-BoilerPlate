export function isMobileEmail(str: string): 'email' | 'mobile' | undefined {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
    const isMobile = /^\d{10}$/.test(str); // Adjust regex as needed for your mobile format

    if (isEmail) {
        return 'email';
    } else if (isMobile) {
        return 'mobile';
    } else {
        return undefined; // Return undefined if neither
    }
}
