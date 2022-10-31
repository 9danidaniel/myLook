const ReactNative = require('react-native');

const applyLTR = () => {
    try {
    ReactNative.I18nManager.allowRTL(false);
  } catch (e) {
    console.log(e);
  }
}
export default applyLTR