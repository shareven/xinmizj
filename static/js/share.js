(function () {
    /* QQ分享 */
    var p = {
        url: location.href,
        /*获取URL，可加上来自分享到QQ标识，方便统计*/
        desc: '',
        /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
        title: '',
        /*分享标题(可选)*/
        summary: '',
        /*分享摘要(可选)*/
        pics: '',
        /*分享图片(可选)*/
        flash: '',
        /*视频地址(可选)*/
        site: '',
        /*分享来源(可选) 如：QQ分享*/
        style: '201',
        width: 32,
        height: 32
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    $('.share-qq').attr('href', 'http://connect.qq.com/widget/shareqq/index.html?' + s.join('&'));

    /* 微信分享 */
    $('#qrcode').qrcode({
        render: "canvas", //也可以替换为table
        width: 100,
        height: 100,
        text: location.href //二维码地址
    });
})();