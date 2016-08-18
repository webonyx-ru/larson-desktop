function CountdownTimer (elm, tl) {
 this.initialize.apply(this,arguments);
}

CountdownTimer.prototype = {
  initialize: function (elm, tl2) {
    this.elem = document.getElementById(elm);
    this.tl = tl2;
  },

  countDown: function () {
    var timer = '';
    
    var today = new Date();
    var timeBetween = this.tl - today;

    var day  = Math.floor(timeBetween / 86400000      );
    var hour = Math.floor(timeBetween /  3600000 % 24 );
    var min  = Math.floor(timeBetween /    60000 % 60 );
    var sec  = Math.floor(timeBetween /     1000 % 60 );

    if(timeBetween > 0){
      timer += '<div style="display: none;" class="countdown--number--wrapper dib vam"><div class="countdown--number--item day">' + day + '</div><div class="countdown--number--caption">дней</div></div>';
      timer += '<div class="countdown--number--wrapper dib vam"><div class="countdown--number--item hour">' + hour + '</div><div class="countdown--number--caption">часов</div></div>';
      timer += '<div class="countdown--number--wrapper dib vam"><div class="countdown--number--item min">' + this.addZero(min) + '</div><div class="countdown--number--caption">минут</div></div>';
      timer += '<div class="countdown--number--wrapper dib vam"><div class="countdown--number--item sec">' + this.addZero(sec) + '</div><div class="countdown--number--caption">секунд</div></div>';
      this.elem.innerHTML = timer;
      tid = setTimeout((function (_this) { return function () { _this.countDown(); }})(this), 1000);
    }
    else{
      this.elem.innerHTML = '<div style="text-align:center;">Ожидаем новости</div>';
      return;
    }
  },

  addZero: function (num) { 
    return ('0' + num).slice(-2); 

  }
}

function CDT(){
  // Set countdown limit
  var i = 0;
  $('#countdown, #comp_counter, .traiders-table__countdown--counter').each(function(){
    if($(this).hasClass('traiders-table__countdown--counter')) {
      $(this).attr('id', 'traiders-table__countdown--counter'+i)
      i++;
    }

    if($(this).attr('data-day'))
      var tl = new Date($(this).attr('data-day'));
    else
      var tl = new Date("Thu, 16 Mar 2050 19:00:00 GMT");

    // You can add time's up message here
    var timer = new CountdownTimer($(this).attr('id'), tl);
    timer.countDown();
  })
}

window.onload=function(){
  CDT();
}