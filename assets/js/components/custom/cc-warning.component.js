/**
 * <cc-warning>
 * -----------------------------------------------------------------------------
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('cc-warning', {

  // public props
  props: ['message'],

  // initial internal state
  data: function () {
    return {
      notificationText: '',
      roomName: undefined,
    }
  },

  // html
  template: `
    <div class="text-danger fw-bolder">
      {{message}}
    </div>
  `,

  // lifecicle

  // interactions
  methods: {}

})
