/**
 * <message>
 * -----------------------------------------------------------------------------
 * A modal dialog pop-up.
 *
 * > Be careful adding other Vue.js lifecycle callbacks in this file!  The
 * > finnicky combination of Vue transitions and bootstrap modal animations used
 * > herein work, and are very well-tested in practical applications.  But any
 * > changes to that specific cocktail could be unpredictable, with unsavory
 * > consequences.
 *
 * @type {Component}
 *
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('message', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'severity',
    'summary',
    'details'
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {}
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `

<!-- use:

<message id="msg" v-on:close="cleanMessage()" :severity="message.severity" :summary="message.summary" :details="message.details"></message>

it shows message according given severity if summary lenght is greater than 0. These details are optional

to clean message just clean message.summary value under cleanMessage() method.

-->

<div>

<div v-if="show()">

  <div class="modal fade show" tabindex="-1" style="display: block; overflow: visible; box-shadow: #5a5a5a">

  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
           <div v-if="severity=='success'">
              <span class="fw-bolder text-success"><em class="fa fa-check"></em> {{summary}}</span>
           </div>
           <div v-if="severity=='warn'">
                <span class="fw-bolder text-warning"><em class="fa fa-warning"></em> {{summary}}</span>
           </div>
           <div v-if="severity=='error'">
                <span class="fw-bolder text-danger"><em class="fa fa-bug"></em> {{summary}}</span>
           </div>
        </h5>
        <button type="button" class="btn-close" @click="$emit('close', '')" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <p class="text-muted">{{details}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="$emit('close', '')"><em class="fa fa-close"></em></button>
      </div>
    </div>
  </div>
</div>

</div>

</div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {

  },
  mounted: function () {

  },
  // ^Note that there is no `beforeDestroy()` lifecycle callback in this
  // component. This is on purpose, since the timing vs. `leave()` gets tricky.

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    show: function () {
      return this.summary !== ''
    }

  }
})
