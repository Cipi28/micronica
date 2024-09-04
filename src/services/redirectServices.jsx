export const openFacebookProfile = () => {
    const facebookProfileUrl = 'https://www.facebook.com/share/Akd4JNZg4mohpx3E/?mibextid=LQQJ4d';
    window.open(facebookProfileUrl);
};

export const openInstagramProfile = () => {
    const instagramProfileUrl = 'https://www.instagram.com/micronica.2004';
    window.open(instagramProfileUrl);
};

export const openEmailClient = () => {
    const email = 'office@micronica.ro';

    const mailtoLink = `mailto:${email}`;

    window.open(mailtoLink, '_blank');
};