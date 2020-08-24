var root_url = 'http://dayan.yuzh.online/index.php/Api/';
var index_url = root_url;


function chosewin(){
  api.closeWin();

}

function yanzheng(){
    this.src='http://dayan.yuzh.online/index.php/Api/Index/verify?'+new Date().getTime();
}

function doSearch(){

}
function msg(message){
  api.toast({
      msg: message,
      duration: 2000,
      location: 'bottom'
  });
}
