
export default {
  resetCanvas() {
    const scale = document.documentElement.clientWidth / 420
    // const b = 16 * Math.min(scale, 2)
    let size = 16
    const defaultSize = 16
    if (scale < 2) {
      size = defaultSize * scale
    }
    document.getElementsByTagName('html')[0].style.fontSize = size + 'px'
  }
}
