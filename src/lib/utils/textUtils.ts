export const extractInitials = (text: string): string => {
    if (!text.trim()) return ""
    const words = text.split(' ')
    if (!words.length) return ""
    const initials = words.map(word => word.charAt(0).toUpperCase())
    return initials.join('')
}