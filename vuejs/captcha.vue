
<style lang="scss" scoped>

</style>

<template>
    <div element-loading-spinner="fa fa-spinner fa-spin"
         element-loading-background="rgba(255, 255, 255, 0.8)">
        <el-input type="text" v-model="loginForm.captcha" auto-complete="off" :maxlength="4" placeholder="请输入验证码"></el-input>
		<img v-if="showCaptcha" @click="refleshCaptcha" :src="captchaImg">
	</div>
</template>
<script>
    export default {
        data() {
            var checkCaptcha = (rule, value, callback) => {
                if (this.showCaptcha && this.loginForm.captcha == '') {
                     callback(new Error('请输入验证码'));
                  }
                  callback();
                };
            return {
                    showCaptcha:false,
                    captchaImg:'',
                    captcha:'',
                    loginForm: {
                        captcha: '',
                        captchaError: ''
                  },
                }
            },

            beforeMount(){
                 this.refleshCaptcha();
            },
            mounted(){
                	
                let randomStr = this.getRandomStr();
                this.captchaKey = 'eb' + (randomStr.length > 9 ? '' : '0') + randomStr.length + randomStr;
                
                if (window.localStorage.SHOW_CAPTCHA) {
                    this.showCaptcha = true;
                    this.refleshCaptcha();
                }
            },
            methods: {  
                	// 刷新验证码
                refleshCaptcha(){
                    this.loginForm.captcha = '';
                    this.captchaLoading = true;
                    let imageObj = new Image();
                    imageObj.src = '/api/captcha/' + this.captchaKey + this.getRandomStr();
                    imageObj.onload = () => { 
                        // 图片加载成功
                        this.captchaLoading = false;
                        this.captchaImg = imageObj.src;
                    }
                },
                // 生成验证码Key
                getRandomStr(){
                    let len = parseInt(Math.random()*4+8,10); 
                    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
                    let str = '';
                    　　for (var i = 0; i < len; i++) {
                        str += chars.charAt(Math.floor(Math.random() * 48));
                    　　}
                    return str;
                },
            }
    }
</script>