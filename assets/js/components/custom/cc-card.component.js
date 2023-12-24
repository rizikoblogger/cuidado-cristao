/**
 * <cc-card>
 * -----------------------------------------------------------------------------
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('cc-card', {

  // public props
  props: ['title', 'href', 'description'],

  // initial internal state
  data: function () {
    return {
      notificationText: '',
      roomName: undefined,
    }
  },

  // html
  template: `
    <div class="card m-2 col-sm-2">
      <a class="text-decoration-none" :href="href">
          <div class="card-body">
              <h5 class="card-title text-capitalize">
                  {{title}}
              </h5>
              <small class="card-text text-muted">{{description}}</small>
          </div>
      </a>
    </div>
  `,

  // lifecicle

  // interactions
  methods: {}

})
