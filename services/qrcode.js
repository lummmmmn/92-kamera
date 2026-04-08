const QRCode = require('qrcode');

/**
 * Generates a QR code for a booking link.
 * @param {string} bookingLink - The booking link to generate a QR code for.
 * @returns {Promise<string>} - The QR code as a base64 string.
 */
async function generateQRCode(bookingLink) {
    try {
        const qrCode = await QRCode.toDataURL(bookingLink);
        return qrCode;
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw new Error('Could not generate QR code');
    }
}

module.exports = { generateQRCode };