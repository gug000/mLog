/**
 * Created by ttt on 2016/3/8.
 */
;(function(define){
    'use strict';
    define('mLog',[],function() {
        var _typeIn = function(_type,_types){
            var f = false;
            for(var k in _types){
                if(_types[k] == _type){
                    f = true;
                }
            }
            return f;
        };
        var mLog = {
            version : '1.0.1',
            on : true,
            types: {
                info: 1,
                error: 2,
                warm: 3
            },
            format : {
                prefix : '[mLog start......',
                suffix : '......mLog end]'
            },
            log : function(msg,type,isNative){
                var that = this;
                if(!that.on){
                    return;
                }
                window.console = window.console || {};
                var _date = new Date();
                that.format.prefix = '[' + _date.getFullYear() + '-' + Number(_date.getMonth()+1) + '-' + _date.getDate() + ' ' + _date.getHours() + ':' + _date.getMinutes() + ':' + _date.getSeconds() + ':' + _date.getMilliseconds() + '] ' + that.format.prefix;
                switch(arguments.length){
                    case 1:
                        if(!arguments[0]){
                            return;
                        }
                        window.console.log(that.format.prefix + arguments[0] + that.format.suffix);
                        break;
                    case 2:
                        var _msg, _type, _isNative;
                        for(var i=0; i<arguments.length; i++){
                            switch(Object.prototype.toString.call(arguments[i])){
                                case "[object String]":
                                    _msg = arguments[i];
                                    break;
                                case "[object Number]":
                                    _type = arguments[i];
                                    break;
                                case "[object Boolean]":
                                    _isNative = arguments[i];
                                    break;
                            };
                        }
                        if(!_msg){
                            return;
                        }
                        if(!_typeIn(_type,that.types)){
                            _type = that.types.info;
                        }
                        if(_type){
                            switch(_type){
                                case that.types.info:
                                    window.console.log(that.format.prefix + _msg + that.format.suffix);
                                    break;
                                case that.types.error:
                                    window.console.error(that.format.prefix + _msg + that.format.suffix);
                                    break;
                                case that.types.warm:
                                    window.console.warn(that.format.prefix + _msg + that.format.suffix);
                                    break;
                                default:
                                    window.console.log(that.format.prefix + _msg + that.format.suffix);
                                    break;
                            }
                        }else{
                            if(_isNative){
                                try{
                                    Android.log(that.format.prefix  + _msg + that.format.suffix);
                                }catch(e){
                                    window.console.error(that.format.prefix + ' 【Android.log is undefined】 ' + _msg + that.format.suffix);
                                }
                            }else{
                                window.console.log(that.format.prefix + _msg + that.format.suffix);
                            }
                        }
                        break;
                    case 3:
                        var _msg, _type, _isNative;
                        for(var i=0; i<arguments.length; i++){
                            switch(Object.prototype.toString.call(arguments[i])){
                                case "[object String]":
                                    _msg = arguments[i];
                                    break;
                                case "[object Number]":
                                    _type = arguments[i];
                                    break;
                                case "[object Boolean]":
                                    _isNative = arguments[i];
                                    break;
                            }
                        }
                        if(!_msg){
                            return;
                        }
                        if(!_typeIn(_type,that.types)){
                            _type = that.types.info;
                        }
                        if(_isNative){
                            try{
                                Android.log(that.format.prefix + _msg  + that.format.suffix);
                            }catch(e){
                                window.console.error(that.format.prefix + ' 【Android.log is undefined】 ' + _msg + that.format.suffix);
                            }
                        }else{
                            switch(_type){
                                case that.types.info:
                                    window.console.log(that.format.prefix + _msg + that.format.suffix);
                                    break;
                                case that.types.error:
                                    window.console.error(that.format.prefix + _msg + that.format.suffix);
                                    break;
                                case that.types.warm:
                                    window.console.warn(that.format.prefix + _msg + that.format.suffix);
                                    break;
                                default:
                                    window.console.log(that.format.prefix + _msg + that.format.suffix);
                                    break;
                            }
                        }
                        break;
                };
            }
        };
        return mLog;
    });
}(define));

