 $(document).ready(function () {
     var $validateBtn=$('#getvalidatecode'),
         $telephone = $('#telephone'),
         time=59,
         timer;
    $telephone.on("keydown",function () {
        var $val = $telephone.val()
        $val.length >= 11 && $telephone.val($val.slice(0, 11)) && $validateBtn.attr('disabled', false).removeClass('disabled');
        
    }) ; 
     $validateBtn.on("click",function () {
         $(this).attr('disabled',true).addClass('disabled');
         clearInterval(timer);
         timer=setInterval(function () {
             time--;
             $validateBtn.html(time+"s");
             if(time<=1){
                 $validateBtn.html("获取验证码").attr('disabled', false).removeClass('disabled');
                 clearInterval(timer);
                 time = 59;
             }
         },1000);
         /* 发送验证码请求后台 */


         /* 发送验证码请求后台 */

     });
 });