package org.apache.cordova.toast;

import android.content.Intent;
import android.provider.Settings;
import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.json.JSONArray;
import org.json.JSONException;
import android.util.Log;


public class MyToast<Int> extends CordovaPlugin {

    @Override
    public boolean execute(String action, String rawArgs, CallbackContext callbackContext) throws JSONException {
        return super.execute(action, rawArgs, callbackContext);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        return super.execute(action, args, callbackContext);
    }

    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        //showToast 是你在JS中调用的方法名；
        if (action.equals("showToast")){
            //这里可以实现一些你的原生逻辑功能
            int x  = Integer.parseInt(args.getString(0));
            int y  = Integer.parseInt(args.getString(1));
            this.showToast(x ,y,callbackContext);
           // callbackContext.success("finish");//如果不调用success回调，则js中successCallback不会执行
            return true;
        }
        return false;
    }

    public String showToast(int x, int y,CallbackContext callbackContext){
        String result = "";
        if (y == 0){
            result ="除数不能为0";
        }else {
            result += x / y ;
        }
        callbackContext.success(result);//如果不调用success回调，则js中successCallback不会执行
        return result;
    }

}