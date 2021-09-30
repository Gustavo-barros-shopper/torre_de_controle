import OTPAuth from 'otpauth';

const PERIOD = process.env.REACT_APP_OTP_PERIOD;
const DIGITS = process.env.REACT_APP_OTP_DIGITS;

function getPassword(secret) {
    const totp = new OTPAuth.TOTP({
        digits: DIGITS,
        period: PERIOD,
        secret
    });
    return totp.generate();
}

const getCurrentSeconds = () => {
    return Math.round(new Date().getTime() / 1000.0)
};

const getUpdateTime = () => {
    return PERIOD - (getCurrentSeconds() % PERIOD);
};

const getUpdateProgress = () => {
    const time = getUpdateTime();
    return (time / PERIOD) * 100;
};

export default getPassword;
export {
    getUpdateTime,
    getUpdateProgress
};