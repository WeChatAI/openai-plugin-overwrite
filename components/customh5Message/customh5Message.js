Component({
    properties: {
        msg: Object,
    },

    data: {},
    lifetimes: {
        ready: function () {
            this.setData({
                picurl: this.properties.msg.docs[0].picurl,
                title: this.properties.msg.docs[0].title,
                description: this.properties.msg.docs[0].description,
                url: this.properties.msg.docs[0].url,
                type: this.properties.msg.docs[0].type,
            });
        },
    },
    methods: {
        gowebView: function (e) {
            let url = e.currentTarget.dataset.url;
            wx.navigateTo({
                url: "/pages/webviewPage/webviewPage?url=" + url,
                success: function (res) {},
                fail: function (res) {},
                complete: function (res) {},
            });
        },
    },
});
