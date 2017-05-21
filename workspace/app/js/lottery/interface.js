import $ from 'jquery';

class Interface{
  /**
   * [getOmit 获取遗漏数据]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getOmit(issue){
    let self=this;
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/get/omit',
        data:{
          issue:issue
        },
        dataType:'json',
        success:(res)=>{
          self.setOmit(res.data);
          resolve.call(self,res);
        },
        error:(err)=>{
          reject.call(err);
        }
      })
    });
  }
  /**
   * [getOpenCode 获取开奖号码]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getOpenCode(issue){
    let self = this;
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/get/opencode',
        data:{
          issue:issue
        },
        dataType:'json',
        success:(res)=>{
          self.setOpenCode(res.data);
          resolve.call(self,res);
        },
        error:(err)=>{
          reject.call(err);
        }
      })
    });
  }
  /**
   * [getState 获取当前状态]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getState(issue){
    let self = this;
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/get/state',
        data:{
          issue:issue
        },
        dataType:'json',
        success:(res)=>{
          resolve.call(self,res);
        },
        error:(err)=>{
          reject.call(err);
        }
      })
    });
  }
}

export default Interface;
