document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    function disp(pos) {
        $('.lat-view').html(pos.coords.latitude);
        $('.long-view').html(pos.coords.longitude);
    }

    $('#getIt').click(function() {
        navigator.geolocation.getCurrentPosition(disp);
    });
    


}
