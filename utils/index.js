/**
 * Helps to determine if this user is on a mobile device or not.
 * @description This is helpful when rendering image heights and getting our sizing right
 */
export const isMobile = (window) => {
  if (window && window?.navigator)
    return !!window.navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  else return false
}
