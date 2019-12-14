/*
 * COMPONENTS constants for templates
 * Naming scheme: tag[_tag]+__s
 */
const HUE_BASE_n = 230

module.exports =
{
  HUE_P_n: HUE_BASE_n,
  HUE_S_n: HUE_BASE_n - 50,
  HUE_I_n: HUE_BASE_n + 20,
  HUE_D_n: HUE_BASE_n - 20,
  HUE_L_n: HUE_BASE_n + 60,
  
  h4_a__s: ( href_s, title_s ) =>
    `<h4>→ <a href="${href_s}" target="_blank" rel="noreferrer">${title_s}</a></h4>`,

}
