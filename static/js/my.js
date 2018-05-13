$(function () {
    /* 上传裁剪头像 */
    var initCropperInModal = function (img, input, modal) {
        var $image = img;
        var $inputImage = input;
        var $modal = modal;
        var options = {
            aspectRatio: 1, // 纵横比
            viewMode: 2,
            preview: '.img-preview' // 预览图的class名
        };
        // 模态框隐藏后需要保存的数据对象
        var saveData = {};
        var URL = window.URL || window.webkitURL;
        var blobURL;
        $modal.on('show.bs.modal', function () {
            // 如果打开模态框时没有选择文件就点击“打开图片”按钮
            if (!$inputImage.val()) {
                $inputImage.click();
            }
        }).on('shown.bs.modal', function () {
            // 重新创建
            $image.cropper($.extend(options, {
                ready: function () {
                    // 当剪切界面就绪后，恢复数据
                    if (saveData.canvasData) {
                        $image.cropper('setCanvasData', saveData.canvasData);
                        $image.cropper('setCropBoxData', saveData.cropBoxData);
                    }
                }
            }));
        }).on('hidden.bs.modal', function () {
            // 保存相关数据
            saveData.cropBoxData = $image.cropper('getCropBoxData');
            saveData.canvasData = $image.cropper('getCanvasData');
            // 销毁并将图片保存在img标签
            $image.cropper('destroy').attr('src', blobURL);
        });
        if (URL) {
            $inputImage.change(function () {
                var files = this.files;
                var file;
                if (!$image.data('cropper')) {
                    return;
                }
                if (files && files.length) {
                    file = files[0];
                    if (/^image\/\w+$/.test(file.type)) {

                        if (blobURL) {
                            URL.revokeObjectURL(blobURL);
                        }
                        blobURL = URL.createObjectURL(file);

                        // 重置cropper，将图像替换
                        $image.cropper('reset').cropper('replace', blobURL);

                        // 选择文件后，显示和隐藏相关内容
                        $('.img-container').removeClass('hidden');
                        $('.img-preview-box').removeClass('hidden');
                        $('#uploadModal .disabled').removeAttr('disabled').removeClass('disabled');
                        $('#uploadModal .tip-info').addClass('hidden');

                    } else {
                        window.alert('请选择一个图像文件！');
                    }
                }
            });
        } else {
            $inputImage.prop('disabled', true).addClass('disabled');
        }
    }

    var sendPhoto = function () {
        // 得到PNG格式的dataURL
        var photo = $('#photo').cropper('getCroppedCanvas', {
            width: 300,
            height: 300
        }).toDataURL('image/png');

        function dataURItoBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], {
                type: mimeString
            });
        }
        var Form = new FormData();
        Form.append('file', dataURItoBlob(photo), new Date().getTime() + '.png'); //否则会图片生成.blob文件

        $.ajax({
            url: '/upload', // 设置要上传的地址
            type: 'post',
            data: Form,
            processData: false, // 不会将 data 参数序列化字符串
            contentType: false, // 根据表单 input 提交的数据使用其默认的 contentType
            success: function (data) {
                location.reload(); //刷新页面
            },
            error: function name(err) {
                console.log(err);
                alert("上传失败");
            }
        });
    }

    initCropperInModal($('#photo'), $('#photoInput'), $('#uploadModal'));
});