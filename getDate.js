exports.getDate = function(){
    let today = new Date();
    let options ={
        weekday: 'long',
        today: 'numeric',
        month: 'long'
    }

    let day =today.toLocaleDateString('en-US', option);
    return day;
}