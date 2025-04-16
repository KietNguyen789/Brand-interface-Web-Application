export const formatDateForInput = (isoDate) => {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2); // Months are zero-indexed
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
};
export function formatDateTime(dateString) {
    const date = new Date(dateString);
    // Format date and time as 'YYYY-MM-DD HH:mm'
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}