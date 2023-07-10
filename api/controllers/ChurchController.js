/**
 * ChurchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: async function (req, res) {
        const id = req.params['id'];
        await Church.find({id: id})
          .then(
            Church => {
              res.render('pages/church/church-edit', {instance: Church});
            }
          ).catch(err => {
              res.notFound()
              console.log(err.message)
          });
      },    
    
    
      getAll: async function (req, res) {
          const page = req.query.page | 0;
          const size = req.query.size | 0;
    
         await Church
            .find()
            .skip(page*size)
            .limit(size)
            .then(list => res.view('pages/church/church-search', {list: list}))
            .catch(err => console.log(err.message));
            
      },
    
      put: async function (req, res) {
        let Church = await Church.find({_id: req.params['id']});
        return res.json(Church.updateOne(
            {
            version: req.body.version,
            description: req.body.description
            }
        ));
      },
    
      post: async function (req, res) {
        await Church.create(req.body).then(
          Church => res.json(Church)
        ).catch(err => console.log(err));
      },
    

};

