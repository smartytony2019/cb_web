const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.member.token,
  info: state => state.member.info,
  navIndex: state => state.app.navIndex
}
export default getters
