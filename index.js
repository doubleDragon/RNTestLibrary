/* eslint-disable global-require */
module.exports = {
    get AdMobBanner() {
        return require('./RNGADBannerView').default;
    },
    get AdMobInterstitial() {
        return require('./RNAdMobInterstitial').default;
    },
    get PublisherBanner() {
        return require('./RNDFPBannerView').default;
    },
    get AdMobRewarded() {
        return require('./RNAdMobRewarded').default;
    },
};
