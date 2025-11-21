/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"observeMySession":{"verb":"POST","url":"/api/v1/observe-my-session","args":[],"protocol":"io.socket"},"saveChurch":{"verb":"POST","url":"/api/v1/save-church","args":["id","fullName","shortName","email","address","site","phone","linktree","tipo","ourCommunityText","churchMissionText","joinToGroupText","churchBeliefsText","churchFacilities","churchLearnings","churchMeetings"]},"deleteChurch":{"verb":"DELETE","url":"/api/v1/delete-church","args":["id"]},"saveSocial":{"verb":"POST","url":"/api/v1/social/save-social","args":["id","nome","descricao","users"]},"saveUserClasse":{"verb":"POST","url":"/api/v1/classe/save-user-classe","args":["userId","classroomId"]},"removeUserClasse":{"verb":"DELETE","url":"/api/v1/classe/remove-user-classe","args":["userId","classroomId"]},"saveClasse":{"verb":"POST","url":"/api/v1/classe/save-classe","args":["id","name","local","church"]},"saveUserChurch":{"verb":"POST","url":"/api/v1/church/save-user-church","args":["userId","churchId"]},"saveSermon":{"verb":"POST","url":"/api/v1/sermon/save-sermon","args":["id","titulo","comentario","videoUrl","church"]},"saveResource":{"verb":"POST","url":"/api/v1/resource/save-resource","args":["id","tipo","name","detail","location","church"]},"saveUser":{"verb":"POST","url":"/api/v1/user/save-user","args":["id","profile","emailAddress","fullName","isSuperAdmin","church","userCares","socialServices","contributions","classrooms"]},"saveFaq":{"verb":"POST","url":"/api/v1/save-faq","args":["id","question","answer","lang"]},"saveContribution":{"verb":"POST","url":"/api/v1/contribution/save-contribution","args":["id","dtContribution","value","propose","user"]},"saveGuideline":{"verb":"POST","url":"/api/v1/guideline/save-guideline","args":["id","sequence","text"]},"saveUsercare":{"verb":"POST","url":"/api/v1/usercare/save-usercare","args":["id","dtContact","record","whoCares"]}}
  /* eslint-enable */

});
