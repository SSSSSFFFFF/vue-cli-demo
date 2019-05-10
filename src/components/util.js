export default {
    toast:function(options){
        var _this = this;
        this._defaultOption = {
            text:'',
            time:2000
        }
        var timer = null;
        var initDefaultOption = function(){
            if(Object.prototype.toString.call(options) != '[object Object]'){
                return false;
            }
            Object.assign(_this._defaultOption,options);
        }
        var createDom = function(){
            var messageMask = document.createElement('div');
            messageMask.className = 'messageMask';
            var content = "<div class='messageContent'> \
                               <p>" + _this._defaultOption.text + "</p>\
                           </div>"
            messageMask.innerHTML = content;
            document.body.appendChild(messageMask); 
        }
        var addListenerAndTime = function(){
            var messageMask = document.querySelector('.messageMask');
            var todo = function(){
                clearTimeout(timer);
                messageMask.removeEventListener('click',todo,false);
                document.body.removeChild(messageMask);
            }
            messageMask.addEventListener('click',todo,false);
            messageMask.addEventListener('touchmove',function(e){
                var e = e || window.event;
                e.preventDefault();
            },false);

            timer = setTimeout(function(){
                todo();
            },_this._defaultOption.time)
        }
        

        var ready = function(){
            //初始化参数
            initDefaultOption();
            //创建dom
            createDom();
            //添加时间监听
            addListenerAndTime();
        }
        ready();
    },
    trim: function(val){
        var reg = /^(\s)* | (\s)*$/g;
        return val.replace(reg,'');
    },
    telValidator: function(val){
        var reg = /^\d{11}$/;
        return reg.test(val);
    }
}