var vue = new Vue({
  el: "#app",
  data: {
    subTitle: "Article",
    articles: [],
    editArticle: {},
    loading: false
  },
  ready: function () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.loading = true;
      wildDogHelper.get("article", function (data) {
        vue.$set("articles", data);
        vue.$set("loading", false);
      })
    },
    addArticle: function () {
      var article = {id: this.id, title: this.title, body: this.body};
      wildDogHelper.create("article", article, function (result) {
        $("#createArticle").modal("hide");
      })

    },
    deleteArticle: function (key) {
      wildDogHelper.delete("article/" + key)
    },
    updateArticle: function () {
      wildDogHelper.update("article/" + this.key, {
        id: this.editArticle.id,
        title: this.editArticle.title,
        body: this.editArticle.body
      }, function (error) {
        $("#editArticle").modal("hide");
      });
    },
    showEditModal: function (key, article) {
      this.editArticle = article;
      this.key = key;
      $("#editArticle").modal("show");
    }
  }
});
		