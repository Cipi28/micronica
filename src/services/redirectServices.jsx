export const openFacebookProfile = () => {
    const facebookProfileUrl = 'https://www.facebook.com/share/Akd4JNZg4mohpx3E/?mibextid=LQQJ4d';
    window.open(facebookProfileUrl);
};

export const openInstagramProfile = () => {
    const instagramProfileUrl = 'https://www.instagram.com/micronica.2004';
    window.location.href = instagramProfileUrl;
};

export const openEmailClient = () => {
    const email = 'office@micronica.ro';
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
};

export const openMapsLocation = () => {
    const placeName = encodeURIComponent('MICRONICA S.R.L., Hala 1, Str. Gării nr. 10, Sânnicolau Mare 305600');
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${placeName}`;
    window.open(googleMapsUrl, '_blank');
};