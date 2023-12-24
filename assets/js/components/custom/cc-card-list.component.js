/**
 * <cc-card-list></cc-card-list>
 * -----------------------------------------------------------------------------
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('cc-card-list', {

  // public props
  props: ['name'],

  // initial internal state
  data: function () {
    return {
      notificationText: '',
      roomName: undefined,
    }
  },

  // html
  template: `
    <div class="container">

      <span class="text-info fw-bolder">
          {{name}}
      </span>

      <div class="row g-0">
        <slot></slot>
      </div>
    
      </div>
  `,

  // lifecicle

  // interactions
  methods: {}

})
