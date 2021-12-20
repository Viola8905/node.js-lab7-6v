const devController = {
  getAuthor: async(req, res)=>{
      res.render("author_Info",{
      });
  },
  getAPI: (req, res) => {
      res.render("Information_and_API",{
            
    });
  }
};

module.exports = devController;
