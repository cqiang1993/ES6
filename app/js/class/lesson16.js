{
  let readonly=function(target,name,descripter){
    descripter.writable=false;
    return descripter
  };

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test = new Test();

  // test.time=function(){
  //   console.log("reset time");
  // }

  console.log(test.time());
}

{
  let typename=function(target,name,descripter){
    target.myname='hello';
  }
  @typename
  class Test{

  }
  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators;npm install core-decorators
}

{
  let log=(type)=>function(target,name,descripter){
      let src_method=descripter.value;
      descripter.value=(...arg)=>{
        src_method.apply(target,arg);
        console.info(`log ${type}`);
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show');
    }
    @log('click')
    click(){
      console.info('ad is click');
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();

}
