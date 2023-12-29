/**
 * <cc-glist>
 * -----------------------------------------------------------------------------
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('cc-glist', {

  // public props
  props: ['name', 'type', 'id', 'display_edit'],

  // html
  template: `
    <div class="d-flex justify-content-between">
      <p class="text-capitalize">{{name}}</p>
      <p class="text-lowercase">{{type}}</p>
      <p class="text-lowercase">{{id}}</p>
      
      <a href="#" class="btn btn-light" v-if="display_edit" 
        @click="goToEdit(igreja.id)"
      >
        <span class="fa fa-pencil"></span>
      </a>
    </div>
  `
})
