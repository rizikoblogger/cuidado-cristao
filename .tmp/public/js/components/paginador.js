//╔═══╗╔═══╗╔═╗╔═╗╔═══╗╔═══╗╔═╗ ╔╗╔═══╗╔═╗ ╔╗╔════╗╔═══╗    ╔═══╗╔═══╗╔═══╗╔══╗╔═╗ ╔╗╔═══╗╔═══╗╔═══╗╔═══╗
//║╔═╗║║╔═╗║║║╚╝║║║╔═╗║║╔═╗║║║╚╗║║║╔══╝║║╚╗║║║╔╗╔╗║║╔══╝    ║╔═╗║║╔═╗║║╔═╗║╚╣╠╝║║╚╗║║║╔═╗║╚╗╔╗║║╔═╗║║╔═╗║
//║║ ╚╝║║ ║║║╔╗╔╗║║╚═╝║║║ ║║║╔╗╚╝║║╚══╗║╔╗╚╝║╚╝║║╚╝║╚══╗    ║╚═╝║║║ ║║║║ ╚╝ ║║ ║╔╗╚╝║║║ ║║ ║║║║║║ ║║║╚═╝║
//║║ ╔╗║║ ║║║║║║║║║╔══╝║║ ║║║║╚╗║║║╔══╝║║╚╗║║  ║║  ║╔══╝    ║╔══╝║╚═╝║║║╔═╗ ║║ ║║╚╗║║║╚═╝║ ║║║║║║ ║║║╔╗╔╝
//║╚═╝║║╚═╝║║║║║║║║║   ║╚═╝║║║ ║║║║╚══╗║║ ║║║ ╔╝╚╗ ║╚══╗    ║║   ║╔═╗║║╚╩═║╔╣╠╗║║ ║║║║╔═╗║╔╝╚╝║║╚═╝║║║║╚╗
//╚═══╝╚═══╝╚╝╚╝╚╝╚╝   ╚═══╝╚╝ ╚═╝╚═══╝╚╝ ╚═╝ ╚══╝ ╚═══╝    ╚╝   ╚╝ ╚╝╚═══╝╚══╝╚╝ ╚═╝╚╝ ╚╝╚═══╝╚═══╝╚╝╚═╝

/* \assets\js\components\paginador.js */

/**
 *
 * -----------------------------------------------------------------------------
 * Um paginador para grandes conjuntos de dados:
 *
 * @property content um array contendo o conjunto de registros, paginado
 * @property number o numero da pagina cujo cursor deve estar
 * @property size a quantidade de registros maxima esperada, por pagina
 * @property total o numero total de registros (filtrados) da base de dados
 *
 * How to: para incorporar a paginacao:
 *         <paginador :content="page.content" :number="page.number" :size="page.size" :total="page.totalpages" v-on:paginated="paginate($event)"></paginador>
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('paginador', {

  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'content',
    'number',
    'size',
    'total'
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      cont: [],
      num: 0,
      siz: 0,
      tot: 0
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
     <div id='paginador' class='text-center'>
     <em class="fa fa-fast-backward m-2 pointer" @click='goToFirst()'></em>
            <em class="fa fa-backward m-2 pointer" @click='goToPrevious()'></em>
            <em class="badget m-2">{{+num + 1}}</em>
            <em class="fa fa-forward m-2 pointer" @click='goToNext()'></em>
            <em class="fa fa-fast-forward m-2 pointer" @click='goToLast()'></em>
            <br>
     <em class="fw-bold">[ {{+num * +siz}} - {{(+num * +siz) + +siz }} / {{ (tot) }} ]</em>
     </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    this.cont = this.content;
    this.num = this.number;
    this.siz = (this.size<this.total)?this.size:this.total;
    this.tot = this.total;

  },

  beforeDestroy: function () {

  },


  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    goToFirst: function () {
      this.num = 0;
      this.$emit('paginated', { content: this.cont, number: this.num, size: this.siz, total: this.tot });
    },

    goToPrevious: function () {
      this.num = this.number - 1;
      if (this.num < 0) {this.num = 0;}
      this.$emit('paginated', { content: this.cont, number: this.num, size: this.siz, total: this.tot });


    },

    goToNext: function () {
      if(this.content.length < this.size) return;
      this.num = this.number + 1;
      let maxPage = this.total / this.size;
      if (this.num > maxPage) {this.num = maxPage;}
      this.$emit('paginated', { content: this.cont, number: this.num, size: this.siz, total: this.tot });

    },

    goToLast: function () {
      if(this.content.length < this.size) return;
      this.num = this.total / this.size;
      this.$emit('paginated', { content: this.cont, number: this.num, size: this.siz, total: this.tot });
    },


  }

});
