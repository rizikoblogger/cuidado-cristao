/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  'GET /projeto/overview-pt': { action: 'projeto/view-overview-pt' },
  'GET /projeto/overview-en': { action: 'projeto/view-overview-en' },

  'GET /church/search-church': { action: 'church/view-search-church' },
  'GET /church/edit-church/:id': { action: 'church/view-edit-church' },

  'GET /classe/search-classe': { action: 'classe/view-search-classe' },
  'GET /classe/edit-classe/:id': { action: 'classe/view-edit-classe' },

  'GET /map/map-search': { action: 'map/view-map-search' },

  'GET /social/social-search': { action: 'social/view-social-search' },
  'GET /social/social-edit/:id': { action: 'social/view-social-edit' },

  'GET /sermon/search-sermon': { action: 'sermon/view-search-sermon' },
  'GET /sermon/edit-sermon/:id': { action: 'sermon/view-edit-sermon' },

  'GET /resource/search-resource': { action: 'resource/view-search-resource' },
  'GET /resource/edit-resource/:id': { action: 'resource/view-edit-resource' },

  'GET /user/search-user': { action: 'user/view-search-user' },
  'GET /user/edit-user/:id': { action: 'user/view-edit-user' },

  'GET /search-faq': { action: 'view-search-faq' },
  'GET /edit-faq/:id': { action: 'view-edit-faq' },

  'GET /contribution/search-contribution': { action: 'contribution/view-search-contribution' },
  'GET /contribution/edit-contribution/:id': { action: 'contribution/view-edit-contribution' },

  'GET /report/dashboard-report': { action: 'report/view-dashboard-report' },
  'GET /report/search-all': { action: 'report/view-search-all' },
  'GET /report/search-administrators': { action: 'report/view-search-administrators' },
  'GET /report/search-priests': { action: 'report/view-search-priests' },
  'GET /report/search-deacons': { action: 'report/view-search-diacons' },
  'GET /report/search-members': { action: 'report/view-search-members' },
  'GET /report/search-congregants': { action: 'report/view-search-congregants' },

  'GET /usercare/search-usercare': { action: 'usercare/view-search-usercare' },
  'GET /usercare/edit-usercare/:id/:userId': { action: 'usercare/view-edit-usercare' },



  'GET /not-yet': { action: 'view-not-yet' },

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },

  'POST /api/v1/save-church': { action: 'church/save-church' },
  'DELETE /api/v1/delete-church': { action: 'church/delete-church' },

  'POST /api/v1/social/save-social': { action: 'social/save-social' },
  'POST /api/v1/classe/save-user-classe': { action: 'classe/save-user-classe' },
  'DELETE /api/v1/classe/remove-user-classe': { action: 'classe/remove-user-classe' },
  'POST /api/v1/church/save-user-church': { action: 'church/save-user-church' },
  'POST /api/v1/sermon/save-sermon': { action: 'sermon/save-sermon' },
  'POST /api/v1/resource/save-resource': { action: 'resource/save-resource' },

  'POST /api/v1/user/save-user': { action: 'user/save-user' },

  'POST /api/v1/save-faq': { action: 'save-faq' },

  'POST /api/v1/contribution/save-contribution': { action: 'contribution/save-contribution' },


}
